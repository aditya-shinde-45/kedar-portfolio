import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const sectionRef = useRef();
  const titleRef = useRef();
  const tabsRef = useRef([]);
  const featuredRef = useRef();
  const gridRef = useRef([]);

  const projects = [
    {
      id: 1,
      title: "EduBridge Mobile App",
      category: "Mobile UI/UX",
      description: "Mobile application design - alumni and student connection platform. Conducted analysis, user research, interviews & surveys, Created wire frames, user flows, low fidelity, high-fidelity, visual design & prototypes in Figma.",
      image: "/edubridgeapp.png",
      technologies: ["Figma", "Prototyping", "User Research"],
      link: "#"
    },
    {
      id: 2,
      title: "Dashboard design - emergency response dashboard for police dept",
      category: "Web UI/UX",
      description: "Did competitor analysis, user research, interviews & surveys, Making wire frames, user flows, low fidelity, high-fidelity, visual design & prototypes in Figma and figjam.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["Figma", "FigJam", "User Research"],
      link: "#"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      category: "Branding",
      description: "Complete e-commerce solution with advanced filtering, wishlist functionality, and seamless checkout process.",
      image: "/satvit.png",
      technologies: ["Sketch", "Prototyping", "User Testing"],
      link: "#"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title 3D entrance
      gsap.fromTo(titleRef.current,
        { opacity: 0, rotationX: -90, y: 50 },
        {
          opacity: 1,
          rotationX: 0,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Tabs magnetic animation
      tabsRef.current.forEach((tab, index) => {
        if (tab) {
          gsap.fromTo(tab,
            { opacity: 0, scale: 0, rotation: 180 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: tab,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Featured project reveal
      gsap.fromTo(featuredRef.current,
        { opacity: 0, scale: 0.8, rotationY: 45 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Grid items stagger
      gsap.fromTo(gridRef.current,
        { opacity: 0, y: 60, rotationX: 45 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleProjectChange = (index) => {
    gsap.to(featuredRef.current, {
      scale: 0.95,
      opacity: 0.7,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
        setSelectedProject(index);
        gsap.to(featuredRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      }
    });
  };

  return (
    <section ref={sectionRef} id="works" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 ref={titleRef} className="pixel-font text-3xl md:text-4xl font-bold text-center mb-12 text-glow transform-gpu">
          SELECTED WORKS
        </h2>

        {/* Project Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project, index) => (
            <button
              key={project.id}
              ref={el => tabsRef.current[index] = el}
              onClick={() => handleProjectChange(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 magnetic hover-3d ${
                selectedProject === index 
                  ? 'glass glow text-white border-white/30' 
                  : 'glass-dark text-white/70 hover:text-white'
              }`}
            >
              {project.category}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        <div ref={featuredRef} className="glass rounded-3xl overflow-hidden mb-12 hover:glow transition-all duration-500 hover-3d transform-gpu">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative overflow-hidden">
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full text-sm text-white/80">
                  {projects[selectedProject].category}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-glow">
                {projects[selectedProject].title}
              </h3>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                {projects[selectedProject].description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[selectedProject].technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full text-sm text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button className="glass px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 w-fit">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => gridRef.current[index] = el}
              className={`glass rounded-2xl overflow-hidden hover:glow transition-all duration-500 cursor-pointer hover-3d magnetic transform-gpu ${
                selectedProject === index ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => handleProjectChange(index)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold mb-1">{project.title}</h4>
                  <p className="text-white/80 text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;