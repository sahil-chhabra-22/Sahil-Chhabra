import React from 'react';
import { X, CheckCircle2, Cpu, Wrench, ShieldAlert, ArrowRight, Layers, FileText } from 'lucide-react';
import { Project } from '../data/resumeData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#070c17] border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header (Top Bar Contract Compliant) */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-slate-950/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span>{project.affiliation || project.semester || 'Cadence Virtuoso Design'}</span>
              <span aria-hidden="true">·</span>
              <span className="uppercase">{project.category} IC</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8">
          {/* Executive Overview & Problem */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                Engineering Problem & Context
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                {project.problem}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                Architecture & Implementation
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                {project.architecture}
              </p>
            </div>
          </div>

          {/* Verified Engineering Results */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Verified Results & Measured Simulation Data</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.verifiedResults.map((res, idx) => (
                <div key={idx} className="p-4 bg-slate-950 rounded-xl border border-cyan-950/90 shadow-sm flex flex-col justify-between">
                  <span className="text-[11px] font-mono text-slate-400">{res.metric}</span>
                  <div className="text-xl font-bold font-mono text-cyan-300 my-1">{res.value}</div>
                  <span className="text-[10px] text-slate-400">{res.condition}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow Stages */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Cadence Virtuoso Design & Verification Workflow</span>
            </h4>
            <div className="space-y-2">
              {project.stages.map((stage, idx) => (
                <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-950 text-cyan-400 font-mono text-xs flex items-center justify-center shrink-0 border border-cyan-800">
                    {idx + 1}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold font-mono text-white">{stage.name}</h5>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Decisions & Trade-offs */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-sky-400" />
              <span>Critical Engineering Decisions</span>
            </h4>
            <div className="space-y-2">
              {project.designDecisions.map((dec, idx) => (
                <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5">
                  <span className="text-cyan-400 font-mono mt-0.5">▸</span>
                  <span>{dec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Environment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs font-mono text-slate-400 block mb-2">EDA Tools & Technologies</span>
              <div className="flex flex-wrap gap-2">
                {project.toolsUsed.map((tool, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs font-mono text-slate-400 block mb-2 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                <span>Documented Scope & Next Stages</span>
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.limitations}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-6 border-t border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Verified in Cadence Virtuoso</span>
            <span aria-hidden="true">·</span>
            <span>Sahil Chhabra Portfolio</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Project
          </button>
        </div>
      </div>
    </div>
  );
};
