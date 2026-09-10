import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: "What is VIKAS 2026 / a colloquium?",
    a: "VIKAS 2026 is an academic, research and innovation-oriented platform for students to explore research, develop ideas and present technology-driven solutions to real-world problems."
  },
  {
    q: "Who can participate?",
    a: "Participation is open to PPG (PhD / Pre-PhD / Doctoral), PG (ME / M.Tech), and UG & Diploma (Undergraduate and Diploma) students."
  },
  {
    q: "What is the team size?",
    a: "For PPG and PG categories, participation is individual. For UG & Diploma categories, teams must consist of 2–4 members."
  },
  {
    q: "Is the event online or offline?",
    a: "The final event is held offline ON-CAMPUS. However, the initial abstract submission and screening process is conducted online."
  },
  {
    q: "What is submitted in Round 1?",
    a: "Teams must submit an abstract along with a presentation PDF in one of the 9 specific tracks before the submission deadline."
  },
  {
    q: "What is the registration fee?",
    a: "Abstract submission is free. However, shortlisted teams must pay a fee of ₹300 per team after selection via UPI."
  },
  {
    q: "Do all participants receive a certificate?",
    a: "Yes, all participants will receive an Online Participation Certificate, while winners receive hardcopy Certificates, Trophies, and Cash Prizes."
  },
  {
    q: "Is there an IPR opportunity?",
    a: "Yes. High-potential ideas may be considered for Copyright and Patent/IPR filing with institutional guidance for prototyping."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-container">
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <p>Everything you need to know about participating in VIKAS 2026.</p>
        </motion.div>
        
        <motion.div 
          className="faq-accordion"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleOpen(index)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
