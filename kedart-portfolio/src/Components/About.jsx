import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="relative h-full">
            <div className="glass rounded-2xl p-2 glow h-full flex items-center">
              <img
                src="/src/assets/aboutme.png"
                alt="Kedar Portrait"
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-full p-4 opacity-80">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h2 className="sporty-font text-3xl md:text-4xl font-bold text-white mb-6 text-glow">
              ABOUT ME
            </h2>
            
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                "I'm Kedar, and I spend my days as a UI/UX Designer focused on one thing: 
                making digital experiences practical, usable, and beautiful. Creating user-centric 
                design isn't just a goal; it's how I approach every challenge."
              </p>
              
              <p>
                My personal style is all about impact and clarity. I'm a big fan of monochromatic 
                depth, finding endless ways to play with just the right tints and shades. And when 
                it comes to type, I absolutely love big, bold, and blocky designs.
              </p>
              
              <p>
                What I value most is starting strong. Every design journey begins with deep research 
                to make sure we're solving the right problem. I'm an easy-to-work-with professional, 
                always ready to dive in and create something great.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="glass-dark rounded-lg p-4 text-center">
                <div className="sporty-font text-2xl font-bold text-white text-glow">3+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div className="glass-dark rounded-lg p-4 text-center">
                <div className="sporty-font text-2xl font-bold text-white text-glow">50+</div>
                <div className="text-white/70 text-sm">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;