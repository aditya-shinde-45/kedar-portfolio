import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Works', 'Contact'];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home">
          <img src="/src/assets/kedarlogo.png" alt="Kedar Logo" className="w-full h-8 md:h-10" />
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-white transition-all duration-300 hover:text-glow text-sm font-medium uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <img src="/src/assets/ALIENBUG-06 1.png" alt="Alien Bug" className="w-8 h-8 md:w-10 md:h-10 hidden md:block" />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden glass p-2 rounded-lg text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-dark mt-2 mx-6 rounded-lg p-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;