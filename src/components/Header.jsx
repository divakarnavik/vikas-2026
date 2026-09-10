import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrollState, setScrollState] = useState('top');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      
      // Hero (100vh) + About (300vh) = 400vh
      if (y > vh * 3.5) {
        setScrollState('green');
      } else {
        setScrollState('top');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${scrollState === 'green' ? 'scrolled green' : ''}`}>
      <div className="container header-container">
        <div className="logo-group">
          <span className="logo-text">SLRTCE | IEEE | VIKAS 2026</span>
        </div>
        
        <nav className={`desktop-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>HOME</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
          <a href="#timeline" onClick={() => setIsMobileMenuOpen(false)}>TIMELINE</a>
          <a href="#prize-pool" onClick={() => setIsMobileMenuOpen(false)}>PRIZE POOL</a>
          <a href="#tracks" onClick={() => setIsMobileMenuOpen(false)}>TRACKS</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          {isMobileMenuOpen && (
            <a href="#register" className="btn-register-header mobile-register-btn" onClick={() => setIsMobileMenuOpen(false)}>REGISTER NOW</a>
          )}
        </nav>

        <div className="right-actions">
          <a href="#register" className="btn-register-header desktop-only" onClick={() => setIsMobileMenuOpen(false)}>REGISTER NOW</a>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
