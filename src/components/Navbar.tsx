
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'experience', 'education', 'projects', 'certifications', 'blog', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-lg py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-gradient">          B.Nihanth
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-3">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 shadow-sm ${
                activeSection === item.id
                  ? 'bg-neon-cyan/20 text-neon-cyan shadow-lg'
                  : `bg-white/80 text-black hover:bg-white hover:text-neon-purple ${index % 2 === 0 ? 'border border-neon-purple/20' : 'border border-neon-cyan/20'}`
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/nihanth2006"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass hover:neon-glow transition-all duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/b-nihanth-117407334/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass hover:neon-glow transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:nihanth1006@gmail.com"
            className="p-2 rounded-lg glass hover:neon-glow transition-all duration-300"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
