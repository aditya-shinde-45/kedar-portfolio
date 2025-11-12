import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef();
  const cardRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const descriptionRef = useRef();
  const buttonsRef = useRef();
  const orbsRef = useRef([]);
  const particlesRef = useRef([]);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;
      
      gsap.to(cardRef.current, {
        rotationY: x * 15,
        rotationX: -y * 15,
        x: x * 20,
        y: y * 20,
        transformPerspective: 1000,
        duration: 0.4,
        ease: "power2.out"
      });
      
      // Parallax effect on inner elements
      gsap.to([titleRef.current, subtitleRef.current, descriptionRef.current], {
        x: x * 10,
        y: y * 10,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotationY: 0,
        rotationX: 0,
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)"
      });
      
      gsap.to([titleRef.current, subtitleRef.current, descriptionRef.current], {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)"
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card fade in with scale
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power2.out" }
      );

      // Title slide up
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" }
      );

      // Subtitle slide up
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
      );

      // Description fade in
      gsap.fromTo(descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.7, ease: "power2.out" }
      );

      // Buttons fade in
      gsap.fromTo(buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power2.out" }
      );

      // Floating orbs animation
      orbsRef.current.forEach((orb, index) => {
        if (orb) {
          gsap.to(orb, {
            y: "random(-20, 20)",
            x: "random(-15, 15)",
            rotation: "random(-180, 180)",
            duration: "random(4, 8)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.5
          });
        }
      });

      // Particles floating animation
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          gsap.fromTo(particle,
            { y: "100vh", opacity: 0, rotation: 0 },
            {
              y: "-100px",
              opacity: 1,
              rotation: 360,
              duration: "random(10, 15)",
              repeat: -1,
              delay: index * 2,
              ease: "none"
            }
          );
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-background opacity-10"></div>
      

      
      {/* Floating Squares */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          ref={el => particlesRef.current[i] = el}
          className="floating-square"
        ></div>
      ))}

      <div className="text-center relative z-10">
        <div 
          ref={cardRef} 
          className="hero-glass-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h1 ref={titleRef} className="hero-title sporty-font">Portfolio 25-26</h1>
          <h2 ref={subtitleRef} className="hero-subtitle">product to pixel</h2>

          <div ref={buttonsRef} className="hero-buttons">
            <a href="#works" className="btn-glass">View Work</a>
            <a href="#contact" className="btn-primary">Get in Touch</a>
          </div>
        </div>

        {/* Corner images */}
        <img 
          src="/topcorner.png" 
          alt="Top Corner" 
          className="absolute -top-3 -right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 opacity-80 floating"
        />
        <img 
          src="/bottomcorner.png" 
          alt="Bottom Corner" 
          className="absolute -bottom-3 -left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 opacity-80 floating"
        />
      </div>
    </section>
  );
};

// Add orb positions to refs
const addOrbRef = (el, index) => {
  if (el) orbsRef.current[index] = el;
};

const addParticleRef = (el, index) => {
  if (el) particlesRef.current[index] = el;
};

export default Hero;