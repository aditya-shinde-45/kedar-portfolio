import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Works from './Components/Works';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import LoadingScreen from './Components/LoadingScreen';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const progressRef = useRef();
  const cursorRef = useRef();
  const cursorDotRef = useRef();

  useEffect(() => {
    // Scroll progress indicator
    gsap.to(progressRef.current, {
      scaleX: 1,
      transformOrigin: "left",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    // Custom cursor
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(cursorDotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <div ref={progressRef} className="scroll-progress" style={{scaleX: 0}}></div>
      
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={cursorDotRef} className="custom-cursor-dot"></div>

      <LoadingScreen />
      <div className="min-h-screen bg-black overflow-x-hidden">
        <div className="backdrop-blur-sm bg-white/5">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Works />
          <Contact />
          <Footer />

        </div>
      </div>
    </>
  );
}

export default App;