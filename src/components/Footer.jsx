import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        <motion.div 
          className="footer-top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <h2 className="footer-title">VIKAS 2026</h2>
            <p className="footer-subtitle">A Research & Idea Colloquium</p>
            <div className="footer-conducted">
              <span className="technical-label">CONDUCTED BY</span>
              <p>IEEE SLRTCE Student Branch</p>
            </div>
          </div>
          
          <div className="footer-links">
            <span className="technical-label">QUICK LINKS</span>
            <nav>
              <a href="#about">About</a>
              <a href="#timeline">Timeline</a>
              <a href="#prize-pool">Prize Pool</a>
              <a href="#tracks">Tracks</a>
              <a href="#faq">FAQ</a>
              <a href="#register">Register</a>
            </nav>
          </div>
          
          <div className="footer-contact">
            <span className="technical-label">CONTACT</span>
            <p>Email: contact@vikas2026.org</p>
            <p>Phone: +91 00000 00000</p>
          </div>
          
          <div className="footer-address">
            <span className="technical-label">ADDRESS</span>
            <p>
              Shree L. R. Tiwari College of Engineering<br/>
              Kanakia Park, Mira Road (East)<br/>
              Thane, Maharashtra 401107
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="footer-map"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Embedded Google Map Placeholder */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.485121966567!2d72.87102917521035!3d19.29290078195846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b037379d45e5%3A0xc15e24af9bc5fbc1!2sShree%20L.%20R.%20Tiwari%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1694119934661!5m2!1sen!2sin" 
            width="100%" 
            height="250" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="SLRTCE Map"
          ></iframe>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; 2026 IEEE SLRTCE Student Branch. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
