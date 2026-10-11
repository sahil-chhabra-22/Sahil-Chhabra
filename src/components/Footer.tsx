import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full border-t border-slate-800/80 bg-[#02050c]/90 backdrop-blur-sm py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity & Academic Affiliation */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-base font-bold text-white tracking-tight">
            Sahil Chhabra
          </div>
          <p className="text-xs text-slate-400">
            B.Tech in VLSI Design & Technology · VIPS-TC (2024–2028) · Delhi, India
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex items-center gap-6 text-xs text-slate-400">
          <a href="#research" className="hover:text-cyan-400 transition-colors">Research</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#timeline" className="hover:text-cyan-400 transition-colors">Education</a>
        </div>

        {/* Right: Social & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={RESUME_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${RESUME_DATA.personal.email}`}
            className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
            aria-label="Email Contact"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
