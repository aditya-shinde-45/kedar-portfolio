import React from 'react';

const Skills = () => {
  const education = {
    school: "MIT School of Fine Arts and Applied Arts",
    location: "Pune, Maharashtra",
    course: "BFA. Applied Arts"
  };

  const skills = [
    { name: "User Research", level: 90 },
    { name: "Wire framing", level: 85 },
    { name: "Visual Design", level: 95 },
    { name: "Brand Designing", level: 80 },
    { name: "Prototyping", level: 88 },
    { name: "UI/UX Design", level: 92 }
  ];

  const toolIcons = [
    <i className="fi fi-brands-illustrator text-4xl sm:text-5xl md:text-6xl"></i>,
    <i className="fi fi-brands-photoshop text-4xl sm:text-5xl md:text-6xl"></i>,
    <i className="fi fi-brands-indesign text-4xl sm:text-5xl md:text-6xl"></i>,
    <i className="fi fi-brands-after-effects text-4xl sm:text-5xl md:text-6xl"></i>,
    <i className="fi fi-brands-figma text-4xl sm:text-5xl md:text-6xl"></i>,
    <img src="/dreamweaver.png" alt="Dreamweaver" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="pixel-font text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12 text-glow">
          SKILLS & EDUCATION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Education */}
          <div className="glass rounded-2xl p-8">
            <h3 className="pixel-font text-2xl font-bold text-white mb-6 text-glow">EDUCATION</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold">{education.school}</h4>
                <p className="text-white/70">{education.location}</p>
              </div>
              <div className="glass-dark rounded-lg p-4">
                <h5 className="text-white font-medium">Course</h5>
                <p className="text-white/80">{education.course}</p>
              </div>
            </div>
          </div>

          {/* Key Expertise */}
          <div className="glass rounded-2xl p-8">
            <h3 className="pixel-font text-2xl font-bold text-white mb-6 text-glow">EXPERTISE</h3>
            <div className="space-y-4">
              <div className="glass-dark rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Primary Focus</h4>
                <p className="text-white/80">UI/UX Designer</p>
              </div>
              <div className="glass-dark rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Location</h4>
                <p className="text-white/80">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Progress */}
        <div className="glass rounded-2xl p-8 mb-8">
          <h3 className="pixel-font text-2xl font-bold text-white mb-6 text-glow">TECHNICAL SKILLS</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-white">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-white/70">{skill.level}%</span>
                </div>
                <div className="glass-dark rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-1000 glow"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      {/* Tools - Full Width */}
      <div className="w-full py-8">
        <h3 className="sporty-font text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-glow text-center">TOOLS & SOFTWARE</h3>
        <div className="overflow-hidden">
          <div className="flex animate-slide gap-8 sm:gap-12 md:gap-16">
            {[...toolIcons, ...toolIcons, ...toolIcons].map((icon, index) => (
              <div key={index} className="glass-dark p-4 rounded-full text-white/90">
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