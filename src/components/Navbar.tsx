import React, { useState } from 'react';
import { Menu, X, Download, FileText, Mail } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onResumeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#030712]/90 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
        >
          Sahil Chhabra
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a
            href="#research"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Research
          </a>
          <a
            href="#projects"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Skills
          </a>
          <a
            href="#publications"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Publications
          </a>
          <a
            href="#timeline"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Timeline
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onResumeClick}
            className="px-4 py-2 text-xs font-medium text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0 font-semibold shadow-sm"
          >
            Resume & Contact
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#070c17] px-6 py-4 space-y-3">
          <a
            href="#research"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-1"
          >
            Research Spotlight
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-1"
          >
            Featured Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-1"
          >
            Technical Skills
          </a>
          <a
            href="#publications"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-1"
          >
            Publications
          </a>
          <a
            href="#timeline"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-1"
          >
            Timeline & Education
          </a>
          <div className="pt-2 border-t border-slate-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="w-full py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg text-center"
            >
              Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
