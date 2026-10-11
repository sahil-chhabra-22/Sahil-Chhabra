import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Download, Copy, Check, ExternalLink, Printer, FileText } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { downloadResumePdf } from '../utils/generateResumePdf';

interface ContactAndResumeProps {
  onOpenResumeModal: () => void;
}

export const ContactAndResume: React.FC<ContactAndResumeProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="w-full py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="space-y-3 mb-10 text-center max-w-2xl mx-auto">
        <span className="text-xs font-mono tracking-wider uppercase text-cyan-400">
          Semiconductor Recruitment & Collaboration
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Get in Touch & Credentials
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Open to VLSI and mixed-signal engineering internships, job opportunities, and collaborative research initiatives.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Actions Card */}
        <div className="p-8 rounded-2xl bg-slate-950 border border-cyan-950/90 shadow-xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
              Direct Engineering Contact
            </span>

            {/* Email with copy button */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="truncate">
                  <span className="text-[11px] text-slate-400 block font-mono">Email Address</span>
                  <a
                    href={`mailto:${RESUME_DATA.personal.email}`}
                    className="text-sm font-mono text-white hover:text-cyan-300 transition-colors truncate block"
                  >
                    {RESUME_DATA.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
                title="Copy Email"
                aria-label="Copy Email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <span className="text-[11px] text-slate-400 block font-mono">Current Base</span>
                <span className="text-sm text-white font-mono">{RESUME_DATA.personal.location}</span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-4 border-t border-slate-900 flex items-center gap-3">
            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Resume Card & Direct Download */}
        <div className="p-8 rounded-2xl bg-slate-950 border border-cyan-950/90 shadow-xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
              Official Curriculum Vitae
            </span>

            <h3 className="text-xl font-bold text-white">
              Sahil Chhabra — VLSI Engineering Resume
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Complete, verified documentation of Cadence Virtuoso layout projects, butterfly SNM SRAM characterization, IEEE ICVCS 2026 publication, and 10 official Cadence Training Services certifications.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono text-slate-400">
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span>Specialization</span>
                <span className="text-white">Analog & Mixed-Signal IC</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span>Degree Focus</span>
                <span className="text-white">VLSI Design & Technology</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span>Status</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  Open to Internships & Job Opportunities
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-slate-900">
            <button
              onClick={() => downloadResumePdf()}
              className="w-full py-3 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-cyan-400/20"
              title="Download official 2-page PDF resume"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Resume (Official)</span>
            </button>

            <button
              onClick={onOpenResumeModal}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Interactive Printable Resume</span>
            </button>

            <a
              href={`mailto:${RESUME_DATA.personal.email}?subject=VLSI%20Engineering%20Opportunity%20-%20Sahil%20Chhabra`}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 text-xs font-semibold text-slate-400 hover:text-white flex items-center justify-center gap-2 transition-colors block text-center"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Send Direct Email Inquiry</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
