import React from 'react';
import { X, Download, Printer, Copy, Check, FileText } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { downloadResumePdf } from '../utils/generateResumePdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const textContent = `SAHIL CHHABRA
B.Tech Electronics Engineering – VLSI Design & Technology | Vivekananda Institute of Professional Studies – TC | 2024–2028
Delhi, India • sahilchhabra2712@gmail.com • Seeking Both Off-Campus & On-Campus • Open to Internships & Job Opportunities
LinkedIn: https://linkedin.com/in/sahilchhabra2712 • GitHub: https://github.com/sahilchhabra2712

PROFESSIONAL SUMMARY
${RESUME_DATA.summary}

TECHNICAL SKILLS
• VLSI / IC Design: Analog & Mixed-Signal IC Design, Full-Custom Layout Design, Low-Power / Adiabatic Logic, Memory (SRAM) Architecture Design, PLL, Digital Design & Verification
• EDA Tools: Cadence (Virtuoso ADE L/XL, Layout XL, Genus, Innovus, Xcelium), AMD Xilinx Vivado
• Verification: DRC, LVS, Noise Margin / SNM (Butterfly-Curve) Analysis, PVT Analysis, Process-Corner Analysis (SS, FS, SF, TT, FF), Monte Carlo Analysis, PSD Analysis, Timing Analysis
• HDL / Programming: Verilog, C, Python, SQL, EMU8086, Keil, MATLAB
• Platforms: Windows 11, Ubuntu, Red Hat Linux

RESEARCH INTERNSHIP
Research Intern, Dept. of Electronics & Communication Engineering – IIT Roorkee (Jun 2026 – Jul 2026)
Under the supervision of Prof. Sudeb Dasgupta
• Simulated and characterized an unsigned 8-bit Multiply-Accumulate (MAC) operation built on a 6T SRAM-based architecture in the digital domain, evaluating computational accuracy and hardware performance across varying operating conditions and benchmarking efficiency against conventional digital MAC implementations.

KEY PROJECTS — CADENCE VIRTUOSO
1. ThermaStable: Temperature-Resilient OTA for EV Battery Management Systems (Chip to Future C2F Hackathon, SoC Track, 2026)
• Co-designed a temperature- and voltage-insensitive Operational Transconductance Amplifier (OTA) in 180nm CMOS at 1.8V supply for BMS analog front-ends, built from a bandgap-based bias generation stage co-optimized with the amplification stage to remove gain drift at the circuit level.
• Achieved a gain error of just 1.18% (+25°C to +50°C) and 2.23% (+25°C to -40°C) with all transistors held in saturation; simulated in Cadence ADE L/ADE XL and implemented layout with Layout XL, including parasitic extraction.

2. PFD for High-Speed PLL Using Resettable D Flip-Flop & Charge Pump (5th Sem)
• Designed and verified a Phase-Frequency Detector built from a resettable D flip-flop and charge pump for high-speed PLL applications, verifying phase/frequency-error detection and lock behavior.

3. 7-Stage Ring Oscillator Using Inverters (5th Sem)
• Designed and verified a 7-stage inverter-based ring oscillator, analyzing oscillation frequency and output signal stability.

4. Unsigned 8-Bit MAC Operation Using 6T SRAM in Digital Domain (IIT Roorkee Internship)
• Designed and verified an unsigned 8-bit MAC architecture using a 6T SRAM-based digital-domain implementation, validating functional correctness across multiple operating conditions.

5. Low-Power ALU Using Adiabatic Logic (Transmission Gates) (4th Sem)
• Designed a low-power ALU implementing AND/NAND gates with adiabatic transmission-gate logic, extended to a full 8-bit adiabatic ALU; verified via PVT analysis across ±5% voltage variation, -40°C to 100°C, and SS/FS/SF/TT/FF corners.

6. Layout Design of Buck Converter & Transconductance Amplifier (4th Sem)
• Designed full-custom layouts in Cadence Virtuoso for a buck converter and a transconductance amplifier; verified manufacturability with DRC and LVS.

7. Adiabatic Logic Implementation – Logic Gates & Half Adder (4th Sem)
• Implemented adiabatic logic across fundamental gates and a half adder using transmission-gate topology, reducing dynamic power vs. conventional CMOS.

8. RTL-to-GDS of a Half Adder (4th Sem)
• Executed the complete RTL-to-GDS flow (synthesis, placement, routing) for a half adder in Cadence, verified with DRC and LVS.

9. 6T SRAM Cell with Static Noise Margin (SNM) Analysis (2nd Sem)
• Designed a 6T SRAM bitcell and characterized stability via butterfly-curve SNM analysis across hold/read/write modes under process and voltage variation.

10. Schmitt Trigger Design & Analysis (2nd Sem)
• Designed and simulated a Schmitt trigger, analyzing hysteresis width, switching thresholds, and noise immunity.

RESEARCH PUBLICATIONS
• Published (2026): "Low-Temperature Power-Efficient Design of an 8-Bit ALU for Quantum-Inspired Computational Architectures"
  Sahil Chhabra, Abhinav Sharma, Nishtha Kansal — 1st International Conference on VLSI Circuits and Systems (ICVCS 2026), IEEE CAS Kolkata Section, Jul 2026. Presented & published on IEEE Xplore.
  - Characterized performance across -40°C to 100°C (<1% variation) and validated robustness across all process corners and voltage fluctuations (<4% error margin).
• Submitted: "PVT Insensitive Energy-Recovering ALU Architecture for Low-Power Microprocessor and Microcontroller Applications"
  Sahil Chhabra, Abhinav Sharma, Nishtha Kansal — Manuscript submitted to a peer-reviewed journal.

CERTIFICATIONS
• Certificate of Presentation — ICVCS 2026, IEEE CAS Kolkata Section, Jul 2026
• Author Certificate — ICVCS 2026, IEEE CAS Kolkata Section, Jul 2026
• Winter School of Electronics — VIPS-TC, 2025
• Value Added Course (VAC): Cadence-Powered Circuit Design — VIPS-TC, 2025
• Two-Day Workshop on VLSI Design and Semiconductor Industry — ChipXpert Technologies Pvt. Ltd., Apr 2026
• VLSI SoC Design using Verilog HDL (Seminar) — VLSI For All, with VIPS-TC, Apr 2026
• Analog IC Design Implementation and Verification v1.0 (Online) — Cadence Training Services, Jun 2026
• Digital Design and Verification v1.0 (Online) — Cadence Training Services, Jun 2026
• Cadence RTL-to-GDSII Flow v7.0 (Online) — Cadence Training Services, Jun 2026
• Virtuoso Schematic Editor S1: Creating Design Schematics vIC25.1 (Online) — Cadence Training Services, Jul 2026

EDUCATION
• B.Tech, Electronics Engineering – VLSI Design & Technology – VIPS-TC (2024 – 2028), GPA: 8.5 / 10
• Class XII (Science Stream — Chemistry with Computer Science) – Vishal Bharti Sr. Sec. School (2012 – 2024), Scored 80% (Physics, Mathematics, and Chemistry with Computer Science)

LEADERSHIP & ACTIVITIES
Technical Head – Cadence & Public Relations (PR) – Chip Crafters, Official Society of VSET (Aug 2025 – Sep 2026)
• Led Cadence Virtuoso workshops and hands-on IC design sessions; organized VLSI seminars and design challenges.
• Handled society outreach and communication, coordinating promotion and participation for events.

LANGUAGES
English – Professional Proficiency • Hindi – Native
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sahil_Chhabra_VLSI_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[94vh] bg-[#090d16] border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">
              Official Verified Resume — Sahil Chhabra
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => downloadResumePdf()}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
              title="Download official 2-page PDF resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Resume</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center gap-1.5 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas (Styled for high legibility & standard resume aesthetic) */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans print:p-0 print:m-0 selection:bg-cyan-200">
          {/* Header */}
          <div className="text-center border-b border-slate-300 pb-4 mb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
              SAHIL CHHABRA
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
              B.Tech Electronics Engineering – VLSI Design & Technology | Vivekananda Institute of Professional Studies – TC | 2024–2028
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-600 mt-1 font-mono">
              <span>Delhi, India</span>
              <span>•</span>
              <a href="mailto:sahilchhabra2712@gmail.com" className="text-blue-700 underline">sahilchhabra2712@gmail.com</a>
              <span>•</span>
              <span className="font-semibold text-slate-800">Seeking Both Off-Campus & On-Campus · <span className="text-emerald-700 font-bold">Open to Internships & Job Opportunities</span></span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed text-justify">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Technical Skills Table */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              TECHNICAL SKILLS
            </h2>
            <div className="text-xs text-slate-800 space-y-1">
              <div className="grid grid-cols-12 gap-2">
                <span className="col-span-3 font-semibold text-slate-900">VLSI / IC Design</span>
                <span className="col-span-9">Analog & Mixed-Signal IC Design • Full-Custom Layout Design • Low-Power / Adiabatic Logic • Memory (SRAM) Architecture Design • PLL • Digital Design & Verification</span>
              </div>
              <div className="grid grid-cols-12 gap-2">
                <span className="col-span-3 font-semibold text-slate-900">EDA Tools</span>
                <span className="col-span-9">Cadence (Virtuoso, Genus, Innovus, Xcelium) • AMD Xilinx Vivado</span>
              </div>
              <div className="grid grid-cols-12 gap-2">
                <span className="col-span-3 font-semibold text-slate-900">Verification</span>
                <span className="col-span-9">DRC • LVS • Noise Margin / SNM (Butterfly-Curve) Analysis • PVT Analysis • Process-Corner Analysis (SS, FS, SF, TT, FF) • Monte Carlo Analysis • PSD Analysis • Timing Analysis</span>
              </div>
              <div className="grid grid-cols-12 gap-2">
                <span className="col-span-3 font-semibold text-slate-900">HDL / Programming</span>
                <span className="col-span-9">Verilog • C • Python • SQL • EMU8086 • Keil • MATLAB</span>
              </div>
              <div className="grid grid-cols-12 gap-2">
                <span className="col-span-3 font-semibold text-slate-900">Platforms</span>
                <span className="col-span-9">Windows 11 • Ubuntu • Red Hat Linux</span>
              </div>
            </div>
          </div>

          {/* Research Internship */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              RESEARCH INTERNSHIP
            </h2>
            <div className="text-xs text-slate-800">
              <div className="flex justify-between font-bold text-slate-900">
                <span>Research Intern, Dept. of Electronics & Communication Engineering – IIT Roorkee</span>
                <span className="font-mono text-slate-700">Jun 2026 – Jul 2026</span>
              </div>
              <p className="italic text-slate-600 mb-1">Under the supervision of Prof. Sudeb Dasgupta</p>
              <p className="leading-relaxed text-justify">
                • Simulated and characterized an unsigned 8-bit Multiply-Accumulate (MAC) operation built on a 6T SRAM-based architecture in the digital domain, evaluating computational accuracy and hardware performance across varying operating conditions and benchmarking efficiency against conventional digital MAC implementations.
              </p>
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              KEY PROJECTS — CADENCE VIRTUOSO
            </h2>
            <div className="space-y-2.5 text-xs text-slate-800">
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>ThermaStable: Temperature-Resilient OTA for EV Battery Management Systems – Chip to Future (C2F) Hackathon – SoC Track</span>
                  <span className="font-mono text-slate-700">Hackathon 2026</span>
                </div>
                <p className="text-justify leading-relaxed">
                  • Co-designed (2-member team) a temperature- and voltage-insensitive Operational Transconductance Amplifier (OTA) in 180nm CMOS at 1.8V supply for BMS analog front-ends, built from a bandgap-based bias generation stage co-optimized with the amplification stage to remove gain drift at the circuit level.
                </p>
                <p className="text-justify leading-relaxed">
                  • Achieved a gain error of just 1.18% (+25°C to +50°C) and 2.23% (+25°C to -40°C) with all transistors held in saturation; simulated in Cadence ADE L/ADE XL and implemented layout with Layout XL, including parasitic extraction.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>PFD for High-Speed PLL Using Resettable D Flip-Flop & Charge Pump</span>
                  <span className="font-mono text-slate-700">5th Sem</span>
                </div>
                <p className="text-justify leading-relaxed">
                  • Designed and verified a Phase-Frequency Detector built from a resettable D flip-flop and charge pump for high-speed PLL applications, verifying phase/frequency-error detection and lock behavior.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>7-Stage Ring Oscillator Using Inverters</span>
                  <span className="font-mono text-slate-700">5th Sem</span>
                </div>
                <p className="text-justify leading-relaxed">
                  • Designed and verified a 7-stage inverter-based ring oscillator, analyzing oscillation frequency and output signal stability.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Low-Power ALU Using Adiabatic Logic (Transmission Gates)</span>
                  <span className="font-mono text-slate-700">4th Sem</span>
                </div>
                <p className="text-justify leading-relaxed">
                  • Designed a low-power ALU implementing AND/NAND gates with adiabatic transmission-gate logic, extended to a full 8-bit adiabatic ALU; verified via PVT analysis across ±5% voltage variation, -40°C–100°C, and SS/FS/SF/TT/FF corners.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Layout Design of Buck Converter & Transconductance Amplifier</span>
                  <span className="font-mono text-slate-700">4th Sem</span>
                </div>
                <p className="text-justify leading-relaxed">
                  • Designed full-custom layouts in Cadence Virtuoso for a buck converter and a transconductance amplifier; verified manufacturability with DRC and LVS.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>RTL-to-GDS of a Half Adder</span>
                  <span className="font-mono text-slate-700">4th Sem</span>
                </div>
                <p className="text-justify leading-relaxed">
                  • Executed the complete RTL-to-GDS flow (synthesis, placement, routing) for a half adder in Cadence, verified with DRC and LVS.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>6T SRAM Cell with Static Noise Margin (SNM) Analysis</span>
                  <span className="font-mono text-slate-700">2nd Sem</span>
                </div>
                <p className="text-justify leading-relaxed">
                  • Designed a 6T SRAM bitcell and characterized stability via butterfly-curve SNM analysis across hold/read/write modes under process and voltage variation.
                </p>
              </div>
            </div>
          </div>

          {/* Research Publications */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              RESEARCH PUBLICATIONS
            </h2>
            <div className="space-y-2 text-xs text-slate-800">
              <div>
                <p className="font-bold text-slate-900">
                  Published (2026) — &quot;Low-Temperature Power-Efficient Design of an 8-Bit ALU for Quantum-Inspired Computational Architectures&quot;
                </p>
                <p className="text-slate-700 italic">
                  Sahil Chhabra, Abhinav Sharma, Nishtha Kansal — 1st International Conference on VLSI Circuits and Systems (ICVCS 2026), IEEE CAS Kolkata Section, Jul 2026. Presented & published on IEEE Xplore.
                </p>
                <p className="text-justify leading-relaxed">
                  • Designed a transistor-level 8-bit CMOS ALU integrating adiabatic logic; characterized performance across -40°C to 100°C (&lt;1% variation) and validated robustness across all process corners and voltage fluctuations (&lt;4% error margin).
                </p>
              </div>

              <div>
                <p className="font-bold text-slate-900">
                  Submitted — &quot;PVT Insensitive Energy-Recovering ALU Architecture for Low-Power Microprocessor and Microcontroller Applications&quot;
                </p>
                <p className="text-slate-700 italic">
                  Sahil Chhabra, Abhinav Sharma, Nishtha Kansal — Manuscript submitted to a peer-reviewed journal.
                </p>
                <p className="text-justify leading-relaxed">
                  • Developed an energy-recovering ALU using adiabatic logic engineered for PVT-insensitive operation, validated across ±5% voltage variation, -40°C–100°C, and SS/FS/SF/TT/FF process corners.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              CERTIFICATIONS
            </h2>
            <ul className="text-xs text-slate-800 space-y-0.5 list-disc list-inside">
              <li>Certificate of Presentation — ICVCS 2026, IEEE CAS Kolkata Section, Jul 2026</li>
              <li>Author Certificate — ICVCS 2026, IEEE CAS Kolkata Section, Jul 2026</li>
              <li>Winter School of Electronics — VIPS-TC, 2025</li>
              <li>Value Added Course (VAC): Cadence-Powered Circuit Design — VIPS-TC, 2025</li>
              <li>Two-Day Workshop on VLSI Design and Semiconductor Industry — ChipXpert Technologies Pvt. Ltd., Apr 2026</li>
              <li>VLSI SoC Design using Verilog HDL (Seminar) — VLSI For All, with VIPS-TC, Apr 2026</li>
              <li>Analog IC Design Implementation and Verification v1.0 (Online) — Cadence Training Services, Jun 2026</li>
              <li>Digital Design and Verification v1.0 (Online) — Cadence Training Services, Jun 2026</li>
              <li>Cadence RTL-to-GDSII Flow v7.0 (Online) — Cadence Training Services, Jun 2026</li>
              <li>Virtuoso Schematic Editor S1: Creating Design Schematics vIC25.1 (Online) — Cadence Training Services, Jul 2026</li>
            </ul>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              EDUCATION
            </h2>
            <div className="text-xs text-slate-800 space-y-1">
              <div className="flex justify-between font-bold text-slate-900">
                <span>B.Tech, Electronics Engineering – VLSI Design & Technology – VIPS-TC</span>
                <span className="font-mono text-slate-700">2024 – 2028</span>
              </div>
              <p>• GPA: 8.5 / 10 (till 4th Semester)</p>
              <div className="flex justify-between font-bold text-slate-900 pt-1">
                <span>Class XII (Science Stream — Chemistry with Computer Science) – Vishal Bharti Sr. Sec. School</span>
                <span className="font-mono text-slate-700">2012 – 2024</span>
              </div>
              <p>• Scored 80% (Physics, Mathematics, and Chemistry with Computer Science)</p>
            </div>
          </div>

          {/* Leadership & Activities */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              LEADERSHIP & ACTIVITIES
            </h2>
            <div className="text-xs text-slate-800">
              <div className="flex justify-between font-bold text-slate-900">
                <span>Technical Head – Cadence & Public Relations (PR) – Chip Crafters, Official Society of VSET</span>
                <span className="font-mono text-slate-700">Aug 2025 – Sep 2026</span>
              </div>
              <p>• Led Cadence Virtuoso workshops and hands-on IC design sessions; organized VLSI seminars and design challenges.</p>
              <p>• Handled society outreach and communication, coordinating promotion and participation for events.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
