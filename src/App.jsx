import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Participate from './components/Participate';
import Timeline from './components/Timeline';
import PrizePool from './components/PrizePool';
import Tracks from './components/Tracks';
import RegistrationCTA from './components/RegistrationCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Hero />
      <About />
      <Participate />
      <Timeline />
      <PrizePool />
      <Tracks />
      <RegistrationCTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
