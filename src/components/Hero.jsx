import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ scrollSnapAlign: 'start' }}>
      <div className="hero-video-wrapper">
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          src="/Untitled design.mp4"
        ></video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="hero-title"
        >
          VIKAS<br/><span className="year-highlight">2026</span>
        </motion.h1>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="scroll-indicator technical-label"
      >
        SCROLL TO EXPLORE ↓
      </motion.div>
    </section>
  );
};

export default Hero;
