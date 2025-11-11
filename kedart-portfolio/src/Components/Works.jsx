import React, { useState } from 'react';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "EduBridge Mobile App",
      category: "Mobile UI/UX",
      description: "A comprehensive educational platform connecting students with tutors. Features include real-time messaging, video calls, and progress tracking.",
      image: "/edubridgeapp.png",
      technologies: ["Figma", "Prototyping", "User Research"],
      link: "#"
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      category: "Web UI/UX",
      description: "Modern financial dashboard with real-time analytics, transaction management, and investment tracking features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["Adobe XD", "Data Visualization", "Responsive Design"],
      link: "#"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      category: "Branding",
      description: "Complete e-commerce solution with advanced filtering, wishlist functionality, and seamless checkout process.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["Sketch", "Prototyping", "User Testing"],
      link: "#"
    }
  ];

  return (
    <section id="works" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="pixel-font text-3xl md:text-4xl font-bold text-white text-center mb-12 text-glow">
          SELECTED WORKS
        </h2>

        {/* Project Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
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
        <div className="glass rounded-3xl overflow-hidden mb-12 hover:glow transition-all duration-500">
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
                <span className="glass-dark px-3 py-1 rounded-full text-sm text-white/80">
                  {projects[selectedProject].category}
                </span>
              </div>
              
              <h3 className="pixel-font text-2xl md:text-3xl font-bold text-white mb-4 text-glow">
                {projects[selectedProject].title}
              </h3>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                {projects[selectedProject].description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[selectedProject].technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="glass-dark px-3 py-1 rounded-full text-sm text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button className="glass glow px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 w-fit">
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
              className={`glass rounded-2xl overflow-hidden hover:glow transition-all duration-500 cursor-pointer ${
                selectedProject === index ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => setSelectedProject(index)}
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