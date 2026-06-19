
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-white/20 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">B.Nihanth</h3>
            <p className="text-slate-300 leading-relaxed">
              Full Stack Developer passionate about creating scalable software solutions and mentoring the next generation of developers.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-wrap gap-3">
              {['About', 'Projects', 'Blog', 'Contact'].map((link, index) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium text-slate-100 bg-slate-900/60 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-neon-cyan/20 ${index % 2 === 0 ? 'border border-neon-purple/20' : 'border border-neon-cyan/20'}`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-black text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-blue-500 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:nihanth1006@gmail.com"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-pink-500 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <Mail size={18} />
              </a>
            </div>
            <div className="text-sm text-slate-300">
              <p>nihanth1006@gmail.com</p>
              <p>+91 7794085626</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} B.Nihanth. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
