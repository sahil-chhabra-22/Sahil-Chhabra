import React from 'react';
import { Cpu, Award, BookOpen, Layers, ShieldCheck, Compass } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Authentic Engineering Journey */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-wider uppercase text-cyan-400">
              Engineering Foundation & Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Designing at the Transistor Level
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            As a B.Tech undergraduate in <strong className="text-white">VLSI Design & Technology</strong> at VIPS-TC, my passion lies in bridging theoretical device physics and physical silicon realization. My work centers on analog and mixed-signal integrated circuits, where subtle effects—such as channel length modulation, threshold voltage mismatch, and parasitic layout capacitances—determine whole-chip functionality.
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Through rigorous hands-on projects in <strong className="text-cyan-300">Cadence Virtuoso</strong>, I have designed, simulated, and laid out full-custom building blocks—ranging from temperature-resilient operational transconductance amplifiers for EV battery management systems to 6T SRAM bitcells and energy-recovering adiabatic ALUs.
          </p>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Cpu className="w-4 h-4" />
                <span>Analog & Mixed-Signal ICs</span>
              </div>
              <p className="text-xs text-slate-300">
                Transistor sizing, bandgap biasing, Common-Centroid layout, and Assura DRC/LVS physical signoff.
              </p>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Layers className="w-4 h-4" />
                <span>Memory & Low-Power Logic</span>
              </div>
              <p className="text-xs text-slate-300">
                Static Noise Margin (SNM) butterfly curve extraction and adiabatic transmission-gate charge recovery.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Key Focus Card */}
        <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-cyan-950/90 shadow-2xl space-y-6">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
            Current Focus & Objective
          </span>

          <div className="space-y-4">
            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1.5">
              <h4 className="text-sm font-bold text-white">Active Research & Design</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Currently designing high-speed Phase-Locked Loops (PLL) in Cadence Virtuoso, including resettable DFF phase-frequency detectors and low-jitter charge pumps.
              </p>
            </div>

            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1.5">
              <h4 className="text-sm font-bold text-white">IIT Roorkee Experience</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Characterized 8-bit MAC operations integrated with 6T SRAM arrays in the digital domain under the mentorship of Prof. Sudeb Dasgupta.
              </p>
            </div>

            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1.5">
              <h4 className="text-sm font-bold text-white">Career Objective</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Seeking both off-campus and on-campus VLSI design internships and job opportunities in Analog/Mixed-Signal design, Memory architecture, or Digital RTL-to-GDSII verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
