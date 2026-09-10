import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import './Participate.css';

const TiltCard = ({ title, subtitle, rule, highlight = false }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="tilt-card-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="tilt-card">
        <div className="glare-container">
          <motion.div 
            className="glare"
            style={{
              x: useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "100%"]),
              y: useTransform(mouseYSpring, [-0.5, 0.5], ["-100%", "100%"])
            }}
          />
        </div>
        <div className="card-content" style={{ transform: "translateZ(50px)" }}>
          <h4>{title}</h4>
          <p>{subtitle}</p>
          <div className={`team-rule ${highlight ? 'highlight' : ''}`}>{rule}</div>
        </div>
      </div>
    </motion.div>
  );
};

const Participate = () => {
  return (
    <section className="participate-section">
      <div className="container">
        <div className="participate-grid">
          
          <motion.div 
            className="participate-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2>WHO CAN PARTICIPATE?</h2>
            
            <div className="eligibility-cards">
              <TiltCard 
                title="PPG" 
                subtitle="PhD / Pre-PhD / Doctoral" 
                rule="Individual participation" 
              />
              <TiltCard 
                title="PG" 
                subtitle="ME / M.Tech" 
                rule="Individual participation" 
              />
              <TiltCard 
                title="UG & DIPLOMA" 
                subtitle="Undergraduate and Diploma" 
                rule="2–4 members" 
                highlight={true} 
              />
            </div>
          </motion.div>

          <motion.div 
            className="participate-flow"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>MISSION FLOW</h3>
            <div className="flow-steps">
              <div className="step">
                <div className="step-number">01</div>
                <div className="step-text">Register on the portal</div>
              </div>
              <div className="step">
                <div className="step-number">02</div>
                <div className="step-text">Submit Abstract + Presentation PDF</div>
              </div>
              <div className="step">
                <div className="step-number">03</div>
                <div className="step-text">Screening Phase</div>
              </div>
              <div className="step">
                <div className="step-number">04</div>
                <div className="step-text">Selected teams complete payment</div>
              </div>
              <div className="step">
                <div className="step-number">05</div>
                <div className="step-text">Present on campus</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Participate;
