import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "kedar@example.com",
      link: "mailto:kedar@example.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "Pune, Maharashtra",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      link: "#"
    },
    {
      name: "Dribbble",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 7.21c.693 1.454 1.109 3.077 1.109 4.79 0 .746-.081 1.477-.234 2.18-.302-.064-3.32-.7-6.32-.318-.064-.154-.13-.309-.2-.463-.216-.476-.454-.95-.712-1.418 3.29-1.34 4.91-3.252 5.357-4.771zM12 2.18c1.768 0 3.404.584 4.717 1.57-.394.454-1.846 2.185-4.996 3.442C10.31 4.658 8.81 2.775 8.81 2.775c1.02-.434 2.14-.595 3.19-.595zm-4.06 1.46s1.498 1.881 2.91 4.414c-3.67 .977-6.9 .966-7.27.96C4.18 6.49 6.61 4.36 7.94 3.64zm-3.67 8.36c0-.09.004-.18.01-.27.37.006 4.42.055 8.33-1.154.31.607.595 1.226.854 1.85-.108.03-.218.062-.325.095-4.107 1.326-6.263 4.934-6.263 4.934S2.27 15.09 2.27 12zm9.73 9.82c-1.787 0-3.44-.61-4.74-1.63 0 0 1.63-2.97 5.18-4.04.94 2.44 1.32 4.48 1.46 5.07-.62.37-1.29.6-1.9.6zm3.14-2.25c-.09-.45-.41-2.05-1.2-4.17 2.73-.43 5.12.27 5.4.35-.36 1.58-1.41 2.96-2.8 3.82h-.4z"/>
        </svg>
      ),
      link: "#"
    },
    {
      name: "Behance",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
        </svg>
      ),
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="pixel-font text-3xl md:text-4xl font-bold text-white text-center mb-12 text-glow">
          GET IN TOUCH
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="pixel-font text-2xl font-bold text-white mb-6 text-glow">
                Let's Work Together
              </h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project in mind or just want to chat about design, feel free to reach out!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 glass-dark rounded-lg p-4 hover:glow transition-all duration-300 group"
                  >
                    <div className="text-white/70 group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <p className="text-white/70">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="glass-dark p-3 rounded-lg text-white/70 hover:text-white hover:glow transition-all duration-300"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="pixel-font text-2xl font-bold text-white mb-6 text-glow">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full glass-dark rounded-lg px-4 py-3 text-white placeholder-white/50 border-0 focus:ring-2 focus:ring-white/30 transition-all"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full glass-dark rounded-lg px-4 py-3 text-white placeholder-white/50 border-0 focus:ring-2 focus:ring-white/30 transition-all"
                  required
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full glass-dark rounded-lg px-4 py-3 text-white placeholder-white/50 border-0 focus:ring-2 focus:ring-white/30 transition-all"
                required
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full glass-dark rounded-lg px-4 py-3 text-white placeholder-white/50 border-0 focus:ring-2 focus:ring-white/30 transition-all resize-none"
                required
              ></textarea>
              
              <button
                type="submit"
                className="w-full glass glow px-6 py-4 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;