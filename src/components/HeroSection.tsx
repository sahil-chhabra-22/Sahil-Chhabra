import React from 'react';
import { ArrowDown, Download, Eye, ExternalLink, Cpu, Sparkles, BookOpen, Layers, CheckCircle2, ChevronRight, Activity, Terminal, ShieldCheck, Zap } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onContactClick,
}) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-72px)] flex flex-col justify-between pt-8 pb-12 px-6 max-w-7xl mx-auto">
      {/* Smooth Atmospheric Ambient Glow (No distracting grid lines) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-cyan-500/[0.07] rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[400px] bg-blue-600/[0.05] rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main 2-Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">
        {/* Left Column: Typographic Hierarchy */}
        <div className="lg:col-span-6 space-y-6">
          {/* Unboxed Metadata Kicker (Anti-slop zero-pill discipline) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400">
            <span>B.Tech VLSI Design & Technology</span>
            <span aria-hidden="true">·</span>
            <span>VIPS-TC (2024–2028)</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              Open to Internships & Job Opportunities
            </span>
          </div>

          {/* Headline with balanced wrap */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              {RESUME_DATA.personal.name}
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-cyan-300 font-display">
              {RESUME_DATA.personal.headline}
            </p>
          </div>

          {/* Authentic Resume Lead Copy */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            Electronics Engineering undergraduate specializing in analog and mixed-signal IC design, with hands-on full-custom layout, schematic, and SPICE-level verification in <strong className="text-white font-medium">Cadence Virtuoso</strong>. Authored IEEE Xplore-published research on temperature-robust ALUs and simulated 6T SRAM compute-in-memory architectures at IIT Roorkee.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-lg hover:shadow-cyan-500/25 whitespace-nowrap"
            >
              Explore My Projects
            </button>

            <button
              onClick={onContactClick}
              className="px-6 py-3 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-xl transition-all whitespace-nowrap flex items-center gap-2"
              title="Download official 2-page PDF resume"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>View Resume &amp; Download</span>
            </button>

            <button
              onClick={onContactClick}
              className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-cyan-300 transition-colors whitespace-nowrap"
            >
              Contact Me →
            </button>
          </div>

          {/* Unboxed Verified Technical Badges */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400">
            <span>Cadence Virtuoso (ADE / Layout XL)</span>
            <span aria-hidden="true">·</span>
            <span>180nm CMOS PDK</span>
            <span aria-hidden="true">·</span>
            <span>Noise Margin & SNM Analysis</span>
            <span aria-hidden="true">·</span>
            <span>DRC / LVS Verified</span>
          </div>
        </div>

        {/* Right Column: Clean Technical Architecture & 3D Rotating Silicon Hologram */}
        <div className="lg:col-span-6 w-full">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#090f1d]/85 to-[#040711]/95 border border-slate-800/90 shadow-2xl backdrop-blur-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div>
                <span className="text-xs font-mono text-cyan-400">CADENCE VIRTUOSO & ASIC FLOW</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">Core Semiconductor Architectures</h3>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                180nm CMOS
              </span>
            </div>

            {/* Cadence IC Design Flow Real-Time Architecture Metric Banner */}
            <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center font-mono">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 block uppercase">Schematic / Sim</span>
                <span className="text-xs font-bold text-cyan-300 block">ADE L & ADE XL</span>
                <span className="text-[10px] text-emerald-400">PVT Robust</span>
              </div>
              <div className="space-y-1 border-x border-slate-800/80 px-2">
                <span className="text-[10px] text-slate-400 block uppercase">Full-Custom</span>
                <span className="text-xs font-bold text-cyan-300 block">Layout XL (180nm)</span>
                <span className="text-[10px] text-emerald-400">Common Centroid</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 block uppercase">Signoff Checks</span>
                <span className="text-xs font-bold text-cyan-300 block">Assura DRC & LVS</span>
                <span className="text-[10px] text-emerald-400">100% Clean</span>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-2.5">
              <div
                onClick={onExploreProjects}
                className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all cursor-pointer group flex items-start justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <span>ANALOG FRONT-END</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400">1.18% Drift (+50°C)</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                    ThermaStable Temperature-Resilient OTA
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Bandgap-based bias generation co-optimized with amplification stage in 180nm CMOS; Layout XL common-centroid with PEX.
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </div>

              <div
                onClick={onExploreProjects}
                className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all cursor-pointer group flex items-start justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <span>COMPUTE-IN-MEMORY</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-cyan-300">IIT Roorkee Research</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                    Unsigned 8-Bit MAC Built on 6T SRAM
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Simulated 6T SRAM in-memory multiplication-accumulation with butterfly Static Noise Margin (SNM) verification.
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </div>

              <div
                onClick={onExploreProjects}
                className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all cursor-pointer group flex items-start justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <span>LOW-POWER LOGIC</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-indigo-400">IEEE Xplore Published</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                    Adiabatic Energy-Recovery 8-Bit ALU
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Transmission-gate adiabatic topology with &lt;1% performance variation across −40°C to 100°C and all process corners.
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </div>
            </div>

            {/* Quick Link to Projects */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
              <span>Cadence ADE L/XL · Layout XL · Assura DRC/LVS</span>
              <button
                onClick={onExploreProjects}
                className="text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1"
              >
                <span>View Full Catalog</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Proof Strip: Placed in a full-width row below the hero split */}
      <div className="w-full mt-12 pt-8 border-t border-slate-800/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-xs font-mono text-slate-400">Research Internship</span>
            <div className="text-xl font-bold font-mono text-white mt-1">IIT Roorkee</div>
            <p className="text-xs text-slate-400 mt-0.5">Dept. of ECE · 6T SRAM MAC</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-xs font-mono text-slate-400">Peer-Reviewed Research</span>
            <div className="text-xl font-bold font-mono text-cyan-300 mt-1">IEEE Xplore</div>
            <p className="text-xs text-slate-400 mt-0.5">ICVCS 2026 · Adiabatic ALU</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-xs font-mono text-slate-400">Physical Verification</span>
            <div className="text-xl font-bold font-mono text-white mt-1">DRC & LVS Clean</div>
            <p className="text-xs text-slate-400 mt-0.5">180nm CMOS PDK Signoff</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-xs font-mono text-slate-400">Industry Certifications</span>
            <div className="text-xl font-bold font-mono text-white mt-1">10 Verified</div>
            <p className="text-xs text-slate-400 mt-0.5">Cadence Services & IEEE CAS</p>
          </div>
        </div>
      </div>
    </section>
  );
};
