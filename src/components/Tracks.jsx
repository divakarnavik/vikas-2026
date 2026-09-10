import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Tracks.css';

const tracks = [
  { id: '01', name: 'Artificial Intelligence & Machine Learning', sdgs: [4, 8, 9, 10], bg: '#0A0A0A', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop', description: 'Explore the frontiers of deep learning, generative models, and intelligent systems shaping the future of autonomous decision making.' },
  { id: '02', name: 'Internet of Things', sdgs: [9, 11, 12], bg: '#0F1A2A', image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1000&auto=format&fit=crop', description: 'Innovate with connected devices, sensor networks, and smart city infrastructure to build a more responsive and efficient world.' },
  { id: '03', name: 'Healthcare & MedTech', sdgs: [3, 5, 10], bg: '#1A0F15', image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5c52?q=80&w=1000&auto=format&fit=crop', description: 'Pioneer advanced medical technologies, bioinformatics, and digital health solutions to improve global patient outcomes.' },
  { id: '04', name: 'Sustainability & Green Technology', sdgs: [6, 7, 11, 12, 13], bg: '#0A1A10', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop', description: 'Develop eco-friendly energy solutions, sustainable materials, and circular economy strategies for environmental preservation.' },
  { id: '05', name: 'Cybersecurity & Digital Trust', sdgs: [9, 16], bg: '#1A1A0A', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop', description: 'Secure digital infrastructure through advanced cryptography, threat intelligence, and zero-trust architectures.' },
  { id: '06', name: 'Automation', sdgs: [8, 9, 12], bg: '#1A0A0A', image: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1000&auto=format&fit=crop', description: 'Revolutionize industries using robotics, industrial automation, and smart manufacturing processes.' },
  { id: '07', name: 'FinTech', sdgs: [1, 8, 9, 10], bg: '#0A1A1A', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop', description: 'Redefine the financial sector with digital currencies, decentralized finance, and algorithmic trading.' },
  { id: '08', name: 'Blockchain', sdgs: [9, 16], bg: '#100A1A', image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop', description: 'Design transparent and distributed ledger applications for secure and immutable transactions.' },
  { id: '09', name: 'Emerging Technologies', sdgs: [4, 8, 9, 11], bg: '#1A100A', image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?q=80&w=1000&auto=format&fit=crop', description: 'Explore nascent fields including quantum computing, advanced materials, and brain-computer interfaces.' },
];

const Tracks = () => {
  const scrollRef = useRef(null);
  const [activeTrackIndex, setActiveTrackIndex] = React.useState(0);
  const [flippedTrackId, setFlippedTrackId] = React.useState(null);

  const handleCardClick = (index, trackId) => {
    if (activeTrackIndex === index) {
      setFlippedTrackId(flippedTrackId === trackId ? null : trackId);
    } else {
      setActiveTrackIndex(index);
      setFlippedTrackId(null);
    }
  };

  const handlePrev = () => {
    setActiveTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setFlippedTrackId(null);
  };

  const handleNext = () => {
    setActiveTrackIndex((prev) => (prev + 1) % tracks.length);
    setFlippedTrackId(null);
  };

  return (
    <section id="tracks" className="tracks-section">
      <motion.div 
        className="container tracks-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2>9 RESEARCH DOMAINS</h2>
        <p className="tracks-subheading">Choose exactly one of nine research and innovation domains.</p>
      </motion.div>

      <motion.div 
        className="tracks-carousel-container" 
        ref={scrollRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="carousel-wrapper">
          <button className="btn-carousel-nav prev" onClick={handlePrev} aria-label="Previous Track">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div className="tracks-carousel">
          {tracks.map((track, index) => {
            const isActive = activeTrackIndex === index;
            const isFlipped = flippedTrackId === track.id;
            
            const length = tracks.length;
            let offset = (index - activeTrackIndex) % length;
            if (offset > Math.floor(length / 2)) {
              offset -= length;
            } else if (offset < -Math.floor(length / 2)) {
              offset += length;
            }

            const isVisible = Math.abs(offset) <= 1;

            return (
              <motion.div 
                key={track.id} 
                className={`carousel-card-wrapper ${isActive ? 'active' : ''} ${isVisible ? 'visible' : 'hidden'}`}
                animate={{
                  x: `${offset * 110}%`,
                  scale: isActive ? 1 : 0.85,
                  opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                  zIndex: isActive ? 10 : 5
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => handleCardClick(index, track.id)}
              >
                <div className={`flip-container ${isFlipped ? 'flipped' : ''}`}>
                  <div className="flipper">
                    {/* Front Face */}
                    <div className="front" style={{ backgroundImage: `url(${track.image})` }}>
                      <div className="track-overlay"></div>
                      <div className="track-number">{track.id}</div>
                      <div className="track-info">
                        <h3>{track.name}</h3>
                        <div className="sdg-badges">
                          {track.sdgs.map(sdg => (
                            <span key={sdg} className="sdg-badge">SDG {sdg}</span>
                          ))}
                        </div>
                        <button className="btn-explore-track">TAP TO VIEW →</button>
                      </div>
                    </div>
                    {/* Back Face */}
                    <div className="back">
                      <h3>{track.name}</h3>
                      <p className="track-description">{track.description}</p>
                      <button className="btn-explore-track" onClick={(e) => { e.stopPropagation(); setFlippedTrackId(null); }}>← FLIP BACK</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <button className="btn-carousel-nav next" onClick={handleNext} aria-label="Next Track">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
      </motion.div>
    </section>
  );
};

export default Tracks;
