import React, { useState } from 'react';
import { Cpu, Terminal, Wrench, ShieldCheck, Layers, Server, Sparkles } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const TechnicalSkills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(RESUME_DATA.skills[0].category);
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; context: string } | null>(
    RESUME_DATA.skills[0].items[0]
  );

  return (
    <section id="skills" className="w-full py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="space-y-3 mb-10">
        <span className="text-xs font-mono tracking-wider uppercase text-cyan-400">
          EDA Suites & Transistor Engineering
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Technical Skills & Toolchain Dashboard
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Comprehensive tool proficiency across Cadence analog and digital suites, physical verification rule decks, and hardware description languages.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-slate-950 rounded-xl border border-slate-800">
        {RESUME_DATA.skills.map((cat) => (
          <button
            key={cat.category}
            onClick={() => {
              setActiveCategory(cat.category);
              setSelectedSkill(cat.items[0]);
            }}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeCategory === cat.category
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Grid of Skill Tiles & Inspector Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Skill Tiles */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {RESUME_DATA.skills
            .find((c) => c.category === activeCategory)
            ?.items.map((skill) => (
              <div
                key={skill.name}
                onClick={() => setSelectedSkill(skill)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedSkill?.name === skill.name
                    ? 'bg-slate-900 border-cyan-400/80 shadow-lg shadow-cyan-950/40 translate-x-1'
                    : 'bg-slate-950 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-start justify-between">
                  <h4 className="text-sm font-semibold text-white leading-snug">
                    {skill.name}
                  </h4>
                  {selectedSkill?.name === skill.name && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 mt-1" />
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                  {skill.context}
                </p>
              </div>
            ))}
        </div>

        {/* Right: Technical Context Panel */}
        <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-cyan-950/90 shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Layers className="w-4 h-4" />
            <span>PRACTICAL IMPLEMENTATION CONTEXT</span>
          </div>

          <h3 className="text-lg font-bold text-white">
            {selectedSkill?.name}
          </h3>

          <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800 text-sm text-slate-300 leading-relaxed">
            {selectedSkill?.context}
          </div>

          {/* Verification Assurance Notes */}
          <div className="space-y-2 pt-2 border-t border-slate-900">
            <span className="text-[11px] font-mono text-slate-400 block uppercase">
              Application in Portfolio Projects
            </span>
            <div className="p-3 bg-slate-900/40 rounded-lg text-xs text-slate-300">
              Validated through practical design exercises, published research papers, or hackathon implementations in Cadence Virtuoso and Xcelium.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
