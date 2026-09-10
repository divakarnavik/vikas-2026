import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import './About.css';

const About = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [currentPanel, setCurrentPanel] = useState(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setCurrentPanel(1);
    } else if (latest < 0.66) {
      setCurrentPanel(2);
    } else {
      setCurrentPanel(3);
    }
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section id="about" ref={targetRef} className="about-section">
      {/* Snap points for vertical scrolling */}
      <div style={{ position: 'absolute', top: 0, height: '100vh', width: '1px', scrollSnapAlign: 'start', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', top: '100vh', height: '100vh', width: '1px', scrollSnapAlign: 'start', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', top: '200vh', height: '100vh', width: '1px', scrollSnapAlign: 'start', pointerEvents: 'none' }}></div>
      
      <div className="about-sticky">
        <div className="about-header container">
          <div className="about-header-top">
            <div className="panel-indicator">
              <span className="indicator-current">0{currentPanel}</span> / 03
            </div>
          </div>
          <h2>VIKAS COLLOQUIUM 2026</h2>
        </div>
        
        <motion.div style={{ x }} className="about-horizontal-scroll">
          
          {/* Panel 1 */}
          <div className="about-panel" style={{ backgroundImage: `url('/College Logo/SLRTCE.png')` }}>
            <div className="panel-bg-overlay"></div>
            <div className="glass-box">
              <h3>ABOUT SLRTCE</h3>
              <p>
                Shree L. R. Tiwari College of Engineering (ISO 9001:2015 certified) was established in 2010. 
                It was the first engineering college in Mira-Bhayandar, and since then has provided a sound 
                platform, equipping students to stand on their own feet, visualize, grow and build a bright future.
              </p>
              <div className="panel-meta">
                <span className="technical-label">ESTD. 2010</span>
                <span className="technical-label">AUTONOMOUS</span>
              </div>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="about-panel" style={{ backgroundImage: `url('/College Logo/SLRTCE (1).jpg')` }}>
            <div className="panel-bg-overlay"></div>
            <div className="glass-box">
              <h3>ABOUT IEEE SLRTCE</h3>
              <p>
                The IEEE Student Branch at SLRTCE acts as a catalyst for technological advancement and professional 
                development. We foster a community of innovators, researchers, and engineers who are passionate about 
                leveraging technology for humanity's benefit.
              </p>
              <div className="panel-meta">
                <span className="technical-label">STUDENT BRANCH</span>
                <span className="technical-label">INNOVATION HUB</span>
              </div>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="about-panel" style={{ backgroundImage: `url('/College Logo/images.jpg')` }}>
            <div className="panel-bg-overlay"></div>
            <div className="glass-box">
              <h3>ABOUT VIKAS 2026</h3>
              <p>
                VIKAS is an academic, research and innovation-oriented platform for students to explore research, develop ideas and present technology-driven solutions to real-world problems.
              </p>
              <ul className="vikas-acronym">
                <li><span>V</span> — Viksit Bharat @2047</li>
                <li><span>I</span> — Innovation</li>
                <li><span>K</span> — Knowledge</li>
                <li><span>A</span> — Advancement</li>
                <li><span>S</span> — Sustainability</li>
              </ul>
              <div className="panel-meta align-global">
                <span className="technical-label">NATIONAL ALIGNMENT: Viksit Bharat @2047</span>
                <span className="technical-label">GLOBAL ALIGNMENT: UN SDGs</span>
              </div>
            </div>
          </div>

        </motion.div>
        
        <div className="scroll-progress-container container">
          <motion.div 
            className="scroll-progress-bar"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
