import React, { useState } from 'react';
import { GraduationCap, Award, Briefcase, Users, CheckCircle2, ChevronRight, FileCheck } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const TimelineSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cadence' | 'ieee'>('all');

  const filteredCerts = RESUME_DATA.certifications.filter((cert) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'cadence') return cert.type === 'Cadence';
    if (activeFilter === 'ieee') return cert.type === 'IEEE';
    return true;
  });

  return (
    <section id="timeline" className="w-full py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="space-y-3 mb-10">
        <span className="text-xs font-mono tracking-wider uppercase text-cyan-400">
          Academic Track & Verified Development
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Education, Experience & Certifications
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Chronological record of academic qualifications, premier research internships, institutional leadership, and official Cadence training credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Education & Experience Timeline */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <h3 className="text-sm font-mono uppercase text-cyan-400 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Education</span>
            </h3>

            <div className="space-y-4">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-cyan-400">{edu.period}</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">{edu.score}</span>
                  </div>
                  <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                  <p className="text-xs text-slate-400">{edu.institution}</p>
                  <div className="pt-2 border-t border-slate-900 space-y-1">
                    {edu.highlights.map((h, i) => (
                      <p key={i} className="text-xs text-slate-300 leading-relaxed">
                        • {h}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Activities */}
          <div>
            <h3 className="text-sm font-mono uppercase text-cyan-400 mb-4 flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Leadership & Society Experience</span>
            </h3>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-cyan-400">{RESUME_DATA.leadership.period}</span>
                <span className="text-xs font-mono text-slate-400">Official Society of VSET</span>
              </div>
              <h4 className="text-base font-bold text-white">{RESUME_DATA.leadership.role}</h4>
              <p className="text-xs text-slate-400">{RESUME_DATA.leadership.organization}</p>
              <div className="pt-2 border-t border-slate-900 space-y-1.5">
                {RESUME_DATA.leadership.achievements.map((ach, i) => (
                  <p key={i} className="text-xs text-slate-300 leading-relaxed">
                    • {ach}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 10 Verified Certifications */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-sm font-mono uppercase text-cyan-400 flex items-center gap-2">
              <FileCheck className="w-4 h-4" />
              <span>Verified Industry Certifications (10)</span>
            </h3>

            {/* Cert filter tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-2.5 py-1 text-xs font-mono rounded ${
                  activeFilter === 'all'
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All (10)
              </button>
              <button
                onClick={() => setActiveFilter('cadence')}
                className={`px-2.5 py-1 text-xs font-mono rounded ${
                  activeFilter === 'cadence'
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Cadence (4)
              </button>
              <button
                onClick={() => setActiveFilter('ieee')}
                className={`px-2.5 py-1 text-xs font-mono rounded ${
                  activeFilter === 'ieee'
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                IEEE (2)
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono mb-1">
                    <span className="text-cyan-400">{cert.issuer}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">{cert.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {cert.topics.join(' · ')}
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 shrink-0">
                  {cert.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
