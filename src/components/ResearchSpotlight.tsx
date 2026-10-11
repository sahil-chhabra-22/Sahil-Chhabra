import React from 'react';
import { BookOpen, Sparkles, Award, ArrowUpRight, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface ResearchSpotlightProps {
  onSelectProject: (id: string) => void;
}

export const ResearchSpotlight: React.FC<ResearchSpotlightProps> = ({ onSelectProject }) => {
  return (
    <section id="research" className="w-full py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="space-y-3 mb-10">
        <span className="text-xs font-mono tracking-wider uppercase text-cyan-400">
          Academic Rigor & Research Contributions
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Research & Publications Spotlight
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          Peer-reviewed semiconductor research and premier academic internships focused on cryogenic computing, energy-recovering adiabatic logic, and in-memory compute architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: IIT Roorkee Research Internship Feature */}
        <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-cyan-950/90 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono text-cyan-400">RESEARCH INTERNSHIP</span>
              <h3 className="text-xl font-bold text-white mt-0.5">IIT Roorkee</h3>
              <p className="text-xs text-slate-400">{RESUME_DATA.internship.department}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-slate-300 block">{RESUME_DATA.internship.period}</span>
              <span className="text-xs font-mono text-emerald-400">Supervisor: {RESUME_DATA.internship.supervisor}</span>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold text-cyan-300">
              {RESUME_DATA.internship.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
              {RESUME_DATA.internship.description}
            </p>
          </div>

          {/* Internship Verified Highlights */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {RESUME_DATA.internship.metrics.map((m, idx) => (
              <div key={idx} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block">{m.label}</span>
                <span className="text-sm font-bold font-mono text-white mt-0.5 block">{m.value}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-slate-400">Domain: In-Memory Computing & SRAM Array Design</span>
            <button
              onClick={() => onSelectProject('iit-roorkee-mac')}
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 underline underline-offset-4"
            >
              <span>View IIT Roorkee Project Detail</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Peer-Reviewed Publications */}
        <div className="lg:col-span-5 space-y-4">
          {RESUME_DATA.publications.map((pub) => (
            <div
              key={pub.id}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className={pub.status === 'Published' ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
                  {pub.status === 'Published' ? 'IEEE Published (2026)' : 'Journal Manuscript (2026)'}
                </span>
                <span className="text-slate-400">{pub.index}</span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                {pub.title}
              </h4>

              <div className="text-xs text-slate-400">
                <span>{pub.authors.join(', ')}</span>
                <span className="block mt-0.5 text-slate-400 italic">{pub.venue}</span>
              </div>

              <div className="pt-2 space-y-1.5 border-t border-slate-900">
                {pub.highlights.map((h, i) => (
                  <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-cyan-400 font-mono text-[11px] mt-0.5">▪</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Hackathon Honor Box */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-cyan-400">NATIONAL HACKATHON</span>
              <h5 className="text-xs font-bold text-white">Chip to Future (C2F) · SoC Track</h5>
              <p className="text-[11px] text-slate-400">ThermaStable 180nm OTA Co-Design</p>
            </div>
            <button
              onClick={() => onSelectProject('thermastable-ota')}
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300"
            >
              View →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
