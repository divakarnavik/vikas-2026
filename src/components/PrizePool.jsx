import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, FileText, Lightbulb, ArrowUpRight } from 'lucide-react';
import './PrizePool.css';

const PrizePool = () => {
  return (
    <section id="prize-pool" className="prize-section light-theme">
      <div className="container">
        
        {/* Header */}
        <motion.div 
          className="section-top-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-titles">
            <span className="title-bold">PRIZE POOL</span>
            <span className="title-light">RESEARCH THAT MATTERS</span>
          </div>
        </motion.div>

        {/* Main Grid */}
        <motion.div 
          className="prize-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          
          {/* Left Black Box */}
          <div className="prize-black-box">
            <div className="box-top-left">PRIZE POOL</div>
            <div className="box-center">
              <span className="rupee">₹</span> <span className="tba">15,000+</span>
            </div>
            <div className="box-bottom-words">
              <span className="word-orange">REWARDING</span>
              <span className="word-blue">RESEARCH</span>
              <span className="word-green">INNOVATION</span>
              <span className="word-white">IMPACT</span>
            </div>
            <div className="box-bottom-left">PRIZE POOL - TO BE ANNOUNCED</div>
          </div>

          {/* Right Recognition List */}
          <div className="recognition-list-container">
            <h4 className="list-title">RECOGNITION</h4>
            <ul className="recognition-list">
              <li>
                <div className="rank">
                  <Trophy size={20} className="icon-orange" />
                  <span>1ST POSITION</span>
                </div>
                <div className="rewards">Certificate + Cash Prize + Trophy</div>
              </li>
              <li>
                <div className="rank">
                  <Medal size={20} className="icon-blue" />
                  <span>2ND POSITION</span>
                </div>
                <div className="rewards">Certificate + Cash Prize + Trophy</div>
              </li>
              <li>
                <div className="rank">
                  <Award size={20} className="icon-green" />
                  <span>CONSOLATION AWARD</span>
                </div>
                <div className="rewards">Certificate + Trophy</div>
              </li>
              <li>
                <div className="rank">
                  <FileText size={20} className="icon-grey" />
                  <span>ALL OTHER PARTICIPANTS</span>
                </div>
                <div className="rewards">Online Participation Certificate</div>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom IPR Box */}
        <motion.div 
          className="ipr-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="ipr-left">
            <div className="ipr-icon-container">
              <Lightbulb size={24} className="icon-orange" />
            </div>
            <h4>IPR & Innovation Support</h4>
          </div>
          <div className="ipr-middle">
            <p>High-potential ideas may be considered for Copyright and Patent/IPR filing. Selected participants receive institutional guidance and pathways for prototyping/incubation.</p>
          </div>
          <div className="ipr-right">
            <a href="#register" className="btn-outline">
              REGISTER NOW <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PrizePool;
