import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 7.21c.693 1.454 1.109 3.077 1.109 4.79 0 .746-.081 1.477-.234 2.18-.302-.064-3.32-.7-6.32-.318-.064-.154-.13-.309-.2-.463-.216-.476-.454-.95-.712-1.418 3.29-1.34 4.91-3.252 5.357-4.771zM12 2.18c1.768 0 3.404.584 4.717 1.57-.394.454-1.846 2.185-4.996 3.442C10.31 4.658 8.81 2.775 8.81 2.775c1.02-.434 2.14-.595 3.19-.595zm-4.06 1.46s1.498 1.881 2.91 4.414c-3.67 .977-6.9 .966-7.27.96C4.18 6.49 6.61 4.36 7.94 3.64zm-3.67 8.36c0-.09.004-.18.01-.27.37.006 4.42.055 8.33-1.154.31.607.595 1.226.854 1.85-.108.03-.218.062-.325.095-4.107 1.326-6.263 4.934-6.263 4.934S2.27 15.09 2.27 12zm9.73 9.82c-1.787 0-3.44-.61-4.74-1.63 0 0 1.63-2.97 5.18-4.04.94 2.44 1.32 4.48 1.46 5.07-.62.37-1.29.6-1.9.6zm3.14-2.25c-.09-.45-.41-2.05-1.2-4.17 2.73-.43 5.12.27 5.4.35-.36 1.58-1.41 2.96-2.8 3.82h-.4z"/>
        </svg>
      )
    },
    {
      name: 'Behance',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.929.013 7.794.048 2.51.252.252 2.51.048 7.794.013 7.929 0 8.396 0 12.017c0 3.621.013 4.088.048 4.223.204 5.284 2.462 7.542 7.746 7.746.135.035.602.048 4.223.048 3.621 0 4.088-.013 4.223-.048 5.284-.204 7.542-2.462 7.746-7.746.035-.135.048-.602.048-4.223 0-3.621-.013-4.088-.048-4.223C23.782 2.51 21.524.252 16.24.048 16.105.013 15.638 0 12.017 0zm0 2.16c3.561 0 3.983.013 5.39.048 4.068.185 5.986 2.133 6.171 6.171.035 1.407.048 1.829.048 5.39 0 3.561-.013 3.983-.048 5.39-.185 4.068-2.133 5.986-6.171 6.171-1.407.035-1.829.048-5.39.048-3.561 0-3.983-.013-5.39-.048-4.068-.185-5.986-2.133-6.171-6.171-.035-1.407-.048-1.829-.048-5.39 0-3.561.013-3.983.048-5.39.185-4.068 2.133-5.986 6.171-6.171 1.407-.035 1.829-.048 5.39-.048zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12.017 16c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.162-10.338c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="glass rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <a href="#home" className="pixel-font text-2xl font-bold text-white text-glow mb-4 block">
                KEDAR.ART
              </a>
              <p className="text-white/70 mb-6 leading-relaxed">
                UI/UX Designer passionate about creating beautiful, functional digital experiences. 
                Let's build something amazing together.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="glass-dark p-3 rounded-lg text-white/70 hover:text-white hover:glow transition-all duration-300"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="pixel-font text-lg font-bold text-white mb-4 text-glow">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="pixel-font text-lg font-bold text-white mb-4 text-glow">
                Contact
              </h3>
              <div className="space-y-2 text-white/70">
                <p>Pune, Maharashtra</p>
                <p>kedar@example.com</p>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>

          <hr className="my-8 border-white/10" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © {currentYear} Kedar. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <a
            href="#home"
            className="inline-flex items-center justify-center glass p-3 rounded-full text-white hover:glow transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;