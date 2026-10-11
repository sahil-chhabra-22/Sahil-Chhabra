import React, { useState } from 'react';
import { Layers, Cpu, ArrowUpRight, CheckCircle2, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { RESUME_DATA, Project } from '../data/resumeData';

interface ProjectsGalleryProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'analog' | 'memory' | 'low-power' | 'layout' | 'digital'>('all');

  const filteredProjects = RESUME_DATA.projects.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="w-full py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-xs font-mono tracking-wider uppercase text-cyan-400">
            Cadence Virtuoso & RTL Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Featured Engineering Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Transistor-level schematics, physical layouts verified with DRC/LVS, and SPICE PVT corner simulations executed in Cadence Virtuoso.
          </p>
        </div>

        {/* Segmented Filter Control (Buttons with click handlers) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              filter === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Projects ({RESUME_DATA.projects.length})
          </button>
          <button
            onClick={() => setFilter('analog')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              filter === 'analog'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Analog & OTA
          </button>
          <button
            onClick={() => setFilter('memory')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              filter === 'memory'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            SRAM & Memory
          </button>
          <button
            onClick={() => setFilter('low-power')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              filter === 'low-power'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Low-Power / Adiabatic
          </button>
          <button
            onClick={() => setFilter('layout')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              filter === 'layout'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Layout XL & DRC/LVS
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer flex flex-col justify-between p-6 rounded-2xl bg-slate-950 border border-slate-800/90 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/30 transition-all duration-300 hover:-translate-y-1 relative"
          >
            {/* Top Metadata (Unboxed text with separators - Zero-Pill Rule) */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
                <span>{project.semester || project.affiliation?.split('–')[0]?.trim() || 'Cadence Virtuoso'}</span>
                <span aria-hidden="true">·</span>
                <span className="uppercase text-slate-400">{project.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-2">
                {project.title}
              </h3>

              {/* Overview */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {project.shortOverview}
              </p>
            </div>

            {/* Bottom Section: Verified Highlight & CTA */}
            <div className="pt-4 border-t border-slate-900 space-y-3">
              {/* Primary Verified Metric */}
              {project.verifiedResults.length > 0 && (
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 truncate max-w-[140px]">
                    {project.verifiedResults[0].metric}
                  </span>
                  <span className="font-bold text-cyan-300">
                    {project.verifiedResults[0].value}
                  </span>
                </div>
              )}

              {/* Unboxed Tools & Action */}
              <div className="flex items-center justify-between pt-1">
                <div className="text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                  {project.toolsUsed.slice(0, 2).join(' · ')}
                </div>

                <div className="flex items-center gap-1 text-xs font-mono font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors shrink-0">
                  <span>Inspect</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
