import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef();
  const imageRef = useRef();
  const contentRef = useRef();
  const titleRef = useRef();
  const paragraphsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(imageRef.current,
        { rotationY: -45, opacity: 0, scale: 0.8 },
        {
          rotationY: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(paragraphsRef.current,
        { opacity: 0, y: 30, rotationX: 45 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      statsRef.current.forEach((stat, index) => {
        if (stat) {
          gsap.fromTo(stat,
            { scale: 0, rotation: 180 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.8,
              delay: index * 0.2,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: stat,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          <div ref={imageRef} className="relative h-full order-2 lg:order-1 transform-gpu">
            <div className="glass rounded-2xl p-2 glow h-full flex items-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] hover-3d">
              <img
                src="/aboutme.png"
                alt="Kedar Portrait"
                className="w-full h-full object-cover object-center rounded-xl grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-lg p-4 opacity-80 floating">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          <div ref={contentRef} className="glass rounded-2xl p-6 sm:p-8 order-1 lg:order-2 hover-3d">
            <h2 ref={titleRef} className="sporty-font text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-glow">
              ABOUT ME
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-white/90 leading-relaxed text-sm sm:text-base">
              <p ref={el => paragraphsRef.current[0] = el}>
                "I'm Kedar, and I spend my days as a UI/UX Designer focused on one thing: 
                making digital experiences practical, usable, and beautiful. Creating user-centric 
                design isn't just a goal; it's how I approach every challenge."
              </p>
              
              <p ref={el => paragraphsRef.current[1] = el}>
                My personal style is all about impact and clarity. I'm a big fan of monochromatic 
                depth, finding endless ways to play with just the right tints and shades. And when 
                it comes to type, I absolutely love big, bold, and blocky designs.
              </p>
              
              <p ref={el => paragraphsRef.current[2] = el}>
                What I value most is starting strong. Every design journey begins with deep research 
                to make sure we're solving the right problem. I'm an easy-to-work-with professional, 
                always ready to dive in and create something great.
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;