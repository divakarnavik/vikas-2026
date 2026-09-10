import React from 'react';
import { motion } from 'framer-motion';
import './RegistrationCTA.css';

const RegistrationCTA = () => {
  return (
    <section id="register" className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>READY TO TURN YOUR RESEARCH INTO IMPACT?</h2>
          <p>Join VIKAS 2026 and present your ideas, research and technology-driven solutions.</p>
          <div className="cta-actions">
            <button className="btn-cta-primary">REGISTER NOW</button>
            <a href="#timeline" className="btn-cta-secondary">VIEW TIMELINE</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
