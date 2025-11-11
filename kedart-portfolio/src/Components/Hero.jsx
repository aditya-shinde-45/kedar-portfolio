import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonsRef = useRef();
  const squaresRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { y: 100, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)" }
      );

      // Subtitle animation
      gsap.fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
      );

      // Buttons animation
      gsap.fromTo(buttonsRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.6, stagger: 0.2, ease: "power2.out" }
      );

     

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center relative">
        <div className="glass rounded-3xl p-8 md:p-16 max-w-4xl mx-auto">
          <h1 ref={titleRef} className="sporty-font text-4xl md:text-7xl font-bold text-white mb-4 text-glow">
            PORTFOLIO 25-26
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-white/80 mb-8 gradient-text">
            Pixel to product..
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="glass glow px-8 py-4 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </button>
            
            <button className="glass-dark px-8 py-4 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Work
            </button>
          </div>
        </div>

        {/* Corner images */}
        <img 
          src="/src/assets/topcorner.png" 
          alt="Top Corner" 
          className="absolute -top-5 -right-10 w-20 h-20 opacity-80 hidden md:block"
        />
        <img 
          src="/src/assets/bottomcorner.png" 
          alt="Bottom Corner" 
          className="absolute -bottom-5 -left-10 w-20 h-20 opacity-80 hidden md:block"
        />
      </div>
    </section>
  );
};

export default Hero;