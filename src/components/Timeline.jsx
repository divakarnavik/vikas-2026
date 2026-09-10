import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAutoProgression } from '../hooks/useAutoProgression';
import './Timeline.css';

const Timeline = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const { activeStage } = useAutoProgression(targetRef, 3, 5000, 7000);

  const rotation = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const inverseRotation = useTransform(rotation, (r) => -r);

  return (
    <section id="timeline" ref={targetRef} className="timeline-section">
      {/* Snap points for vertical scrolling */}
      <div style={{ position: 'absolute', top: 0, height: '100vh', width: '1px', scrollSnapAlign: 'start', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', top: '100vh', height: '100vh', width: '1px', scrollSnapAlign: 'start', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', top: '200vh', height: '100vh', width: '1px', scrollSnapAlign: 'start', pointerEvents: 'none' }}></div>

      <div className="timeline-sticky">
        <div className="container timeline-container">
          <motion.div 
            className="timeline-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2>MISSION TIMELINE</h2>
          </motion.div>

          <div className="timeline-content">
            <motion.div 
              className="stage-content"
              style={{ opacity: useTransform(scrollYProgress, [0, 0.2, 0.33], [1, 1, 0]) }}
            >
              <div className="stage-date">26 SEP 2026</div>
              <h3>01 ABSTRACT SUBMISSION & SCREENING</h3>
              <p>Teams submit an abstract + presentation PDF in one of 9 tracks. Entries are screened.</p>
              <div className="stage-output">
                <span className="output-label">OUTPUT:</span>
                Shortlist: 25 PPG, 25 PG, 50 UG/Diploma teams
              </div>
            </motion.div>

            <motion.div 
              className="stage-content absolute-stage"
              style={{ 
                opacity: useTransform(scrollYProgress, [0.25, 0.33, 0.5, 0.66], [0, 1, 1, 0]),
                pointerEvents: 'none'
              }}
            >
              <div className="stage-date">03 OCT 2026</div>
              <h3>02 INTERNAL EVALUATION ROUND</h3>
              <p>Shortlisted participants present within a strict 12-minute window.</p>
              <div className="stage-output">
                <span className="output-label">OUTPUT:</span>
                Top 25% per category advance to the finale.
              </div>
            </motion.div>

            <motion.div 
              className="stage-content absolute-stage"
              style={{ 
                opacity: useTransform(scrollYProgress, [0.55, 0.66, 1], [0, 1, 1]),
                pointerEvents: 'none'
              }}
            >
              <div className="stage-date">03 OCT 2026</div>
              <h3>03 EXTERNAL GRAND FINALE & AWARDS</h3>
              <p>Finalists present and defend their work before an external expert panel.</p>
              <div className="stage-output">
                <span className="output-label">OUTPUT:</span>
                Final rankings, Winners announced, IPR referral for standout ideas
              </div>
            </motion.div>
          </div>

          <div className="semicircle-container">
            <motion.div className="semicircle-arc" style={{ rotate: rotation }}>
              <motion.div style={{ rotate: inverseRotation }} className={`arc-node node-1 ${activeStage === 0 ? 'active' : activeStage > 0 ? 'completed' : ''}`}>01</motion.div>
              <motion.div style={{ rotate: inverseRotation }} className={`arc-node node-2 ${activeStage === 1 ? 'active' : activeStage > 1 ? 'completed' : ''}`}>02</motion.div>
              <motion.div style={{ rotate: inverseRotation }} className={`arc-node node-3 ${activeStage === 2 ? 'active' : ''}`}>03</motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
