import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const skillBarsRef = useRef([]);
  const toolsRef = useRef();
  const cardsRef = useRef([]);

  const education = {
    school: "MIT School of Fine Arts and Applied Arts",
    location: "Pune, Maharashtra",
    course: "BFA. Applied Arts"
  };

  const skills = [
    { name: "Wireframing", level: 85 },
    { name: "User Research", level: 90 },
    { name: "Prototyping", level: 88 },
    { name: "Usability Testing", level: 85 },
    { name: "Information Architecture", level: 87 },
    { name: "Visual Design", level: 95 },
    { name: "Typography", level: 90 },
    { name: "Design Systems", level: 88 }
  ];

  const toolIcons = [
    <i className="fi fi-brands-illustrator text-4xl sm:text-5xl md:text-6xl"></i>,
    <i className="fi fi-brands-photoshop text-4xl sm:text-5xl md:text-6xl"></i>,
    <i className="fi fi-brands-indesign text-4xl sm:text-5xl md:text-6xl"></i>,
    <i className="fi fi-brands-after-effects text-4xl sm:text-5xl md:text-6xl"></i>,
    <i className="fi fi-brands-figma text-4xl sm:text-5xl md:text-6xl"></i>,
    <img src="/dreamweaver.png" alt="Dreamweaver" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with morphing effect
      gsap.fromTo(titleRef.current,
        { opacity: 0, scale: 0.5, rotationY: 180 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards 3D flip animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { rotationY: -90, opacity: 0, z: -100 },
            {
              rotationY: 0,
              opacity: 1,
              z: 0,
              duration: 1,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Skill bars animated progress
      skillBarsRef.current.forEach((bar, index) => {
        if (bar) {
          const progressBar = bar.querySelector('.skill-progress');
          const percentage = bar.dataset.skill;
          
          gsap.fromTo(progressBar,
            { width: '0%', opacity: 0 },
            {
              width: percentage + '%',
              opacity: 1,
              duration: 1.5,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Tools infinite scroll with magnetic effect
      gsap.to(toolsRef.current, {
        x: "-50%",
        duration: 20,
        ease: "none",
        repeat: -1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 ref={titleRef} className="pixel-font text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-glow morphing">
          SKILLS & EDUCATION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Education */}
          <div ref={el => cardsRef.current[0] = el} className="glass rounded-2xl p-8 hover-3d transform-gpu">
            <h3 className="pixel-font text-2xl font-bold mb-6 text-glow">EDUCATION</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold">{education.school}</h4>
                <p className="text-white/70">{education.location}</p>
              </div>
              <div className=" rounded-lg p-4">
                <h5 className="text-white font-medium">Course</h5>
                <p className="text-white/80">{education.course}</p>
              </div>
            </div>
          </div>

          {/* Key Expertise */}
          <div ref={el => cardsRef.current[1] = el} className="glass rounded-2xl p-8 hover-3d transform-gpu">
            <h3 className="pixel-font text-2xl font-bold mb-6 text-glow">EXPERTISE</h3>
            <div className="space-y-4">
              <div className=" rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Primary Focus</h4>
                <p className="text-white/80">UI/UX Designer</p>
              </div>
              <div className=" rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Location</h4>
                <p className="text-white/80">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Progress */}
        <div ref={el => cardsRef.current[2] = el} className="glass rounded-2xl p-8 mb-8 hover-3d transform-gpu">
          <h3 className="pixel-font text-2xl font-bold mb-6 text-glow">TECHNICAL SKILLS</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} ref={el => skillBarsRef.current[index] = el} data-skill={skill.level} className="space-y-2">
                <div className="flex justify-between text-white">
                  <span className="font-medium">{skill.name}</span>
                </div>
                <div className=" rounded-full h-3 overflow-hidden">
                  <div className="skill-progress h-full bg-gradient-to-r from-white to-gray-300 rounded-full glow-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      {/* Tools - Full Width */}
      <div className="w-full py-8">
        <h3 className="sporty-font text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-glow text-center">TOOLS & SOFTWARE</h3>
        <div className="overflow-hidden">
          <div ref={toolsRef} className="flex gap-8 sm:gap-12 md:gap-16" style={{width: '200%'}}>
            {[...toolIcons, ...toolIcons, ...toolIcons, ...toolIcons].map((icon, index) => (
              <div key={index} className="text-white/90 hover:scale-110 transition-transform duration-300 magnetic">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;