import { useEffect, useState, useRef } from 'react';

export function useAutoProgression(sectionRef, totalStages = 3, intervalMs = 5000, pauseMs = 7000) {
  const [activeStage, setActiveStage] = useState(0);
  const isInteracting = useRef(false);
  const interactionTimeoutRef = useRef(null);
  const lastScrollTime = useRef(Date.now());

  useEffect(() => {
    const handleInteraction = () => {
      isInteracting.current = true;
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);

      interactionTimeoutRef.current = setTimeout(() => {
        isInteracting.current = false;
        lastScrollTime.current = Date.now(); // reset the clock
      }, pauseMs);
    };

    const events = ['wheel', 'touchstart', 'touchmove', 'keydown', 'click'];
    events.forEach(event => window.addEventListener(event, handleInteraction, { passive: true }));

    return () => {
      events.forEach(event => window.removeEventListener(event, handleInteraction));
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    };
  }, [pauseMs]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const checkAndScroll = () => {
      if (isInteracting.current) return;
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const maxScrollDistance = rect.height - window.innerHeight;
      if (maxScrollDistance <= 0) return;

      const sectionTop = -rect.top; // Amount scrolled past the top of the section
      const progress = Math.max(0, Math.min(1, sectionTop / maxScrollDistance));

      // Calculate the boundaries for each stage. If totalStages = 3, targets are 0, 0.5, 1.0
      // So Stage 0 is [0, 0.25), Stage 1 is [0.25, 0.75), Stage 2 is [0.75, 1]
      let currentStageIdx = 0;
      const stageStep = 1 / (totalStages - 1); // 0.5
      
      for (let i = 0; i < totalStages; i++) {
        const targetProgress = i * stageStep;
        if (Math.abs(progress - targetProgress) < (stageStep / 2)) {
          currentStageIdx = i;
          break;
        }
      }

      setActiveStage(currentStageIdx);

      // Only act if the section is fully pinned (top <= 0) and not finished
      // We give a small tolerance for rect.top
      if (rect.top <= 1 && rect.bottom >= window.innerHeight - 1) {
        
        const timeSinceLastAction = Date.now() - lastScrollTime.current;
        
        if (timeSinceLastAction >= intervalMs) {
           // We need to advance if we haven't reached the end
           const nextStage = currentStageIdx + 1;
           if (nextStage < totalStages) {
             const targetScrollY = window.scrollY + rect.top + (maxScrollDistance / (totalStages - 1)) * nextStage;
             window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
             lastScrollTime.current = Date.now();
           }
        }
      } else {
        lastScrollTime.current = Date.now(); // Reset if not in view
      }
    };

    // Run the check every 500ms
    const interval = setInterval(checkAndScroll, 500);
    return () => clearInterval(interval);
  }, [sectionRef, totalStages, intervalMs]);

  return { activeStage };
}
