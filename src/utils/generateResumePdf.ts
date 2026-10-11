import { jsPDF } from 'jspdf';
import { RESUME_DATA } from '../data/resumeData';

export const downloadResumePdf = () => {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;
  let y = 45;

  // Colors
  const textColor = '#111827';
  const subtitleColor = '#374151';
  const linkColor = '#0369a1';
  const dividerColor = '#cbd5e1';

  // Helper for Section Headings
  const addSectionHeader = (title: string) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(textColor);
    doc.text(title.toUpperCase(), margin, y);
    y += 4;
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.75);
    doc.line(margin, y, pageWidth - margin, y);
    y += 14;
  };

  // Helper for wrapped text
  const addWrappedText = (text: string, fontSize = 8.5, isBold = false, indent = 0) => {
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(textColor);
    const lines = doc.splitTextToSize(text, contentWidth - indent);
    doc.text(lines, margin + indent, y);
    y += lines.length * (fontSize + 3.5);
  };

  // --- PAGE 1 ---
  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(textColor);
  doc.text('SAHIL CHHABRA', pageWidth / 2, y, { align: 'center' });
  y += 16;

  // Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(subtitleColor);
  doc.text(
    'B.Tech Electronics Engineering – VLSI Design & Technology | Vivekananda Institute of Professional Studies – TC | 2024–2028',
    pageWidth / 2,
    y,
    { align: 'center' }
  );
  y += 13;

  // Contact line (no mobile number)
  doc.setFontSize(8.5);
  doc.setTextColor(linkColor);
  doc.text(
    'Delhi, India  •  sahilchhabra2712@gmail.com  •  Seeking Both Off-Campus & On-Campus  •  Open to Internships & Job Opportunities',
    pageWidth / 2,
    y,
    { align: 'center' }
  );
  y += 18;

  // Horizontal top rule
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, y, pageWidth - margin, y);
  y += 16;

  // Professional Summary
  addSectionHeader('Professional Summary');
  addWrappedText(RESUME_DATA.summary, 8.2);
  y += 6;

  // Technical Skills Table
  addSectionHeader('Technical Skills');
  const skillsData = [
    { label: 'VLSI / IC Design', val: 'Analog & Mixed-Signal IC Design • Full-Custom Layout Design • Noise Margin & SNM Analysis • Low-Power / Adiabatic Logic • Memory (SRAM) Architecture Design • PLL • Digital Design & Verification' },
    { label: 'EDA Tools', val: 'Cadence (Virtuoso, Genus, Innovus, Xcelium) • AMD Xilinx Vivado' },
    { label: 'Verification', val: 'DRC • LVS • Noise Margin / SNM (Butterfly-Curve) Analysis • PVT Analysis • Process-Corner Analysis (SS, FS, SF, TT, FF) • Monte Carlo Analysis • PSD Analysis • Timing Analysis' },
    { label: 'HDL / Programming', val: 'Verilog • C • Python • SQL • EMU8086 • Keil • MATLAB' },
    { label: 'Platforms', val: 'Windows 11 • Ubuntu • Red Hat Linux' }
  ];

  skillsData.forEach(row => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text(row.label, margin, y);
    doc.setFont('helvetica', 'normal');
    const lines = doc.splitTextToSize(row.val, contentWidth - 110);
    doc.text(lines, margin + 110, y);
    y += Math.max(lines.length * 11, 13);
  });
  y += 6;

  // Research Internship
  addSectionHeader('Research Internship');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Research Intern, Dept. of Electronics & Communication Engineering – IIT Roorkee', margin, y);
  doc.text('Jun 2026 – Jul 2026', pageWidth - margin, y, { align: 'right' });
  y += 11;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.text('Under the supervision of Prof. Sudeb Dasgupta', margin, y);
  y += 11;
  addWrappedText(
    '• Simulated and characterized an unsigned 8-bit Multiply-Accumulate (MAC) operation built on a 6T SRAM-based architecture in the digital domain, evaluating computational accuracy and hardware performance across varying operating conditions and benchmarking efficiency against conventional digital MAC implementations.',
    8,
    false,
    8
  );
  y += 8;

  // Key Projects
  addSectionHeader('Key Projects — Cadence Virtuoso');

  // Project 1: ThermaStable
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('ThermaStable: Temperature-Resilient OTA for EV Battery Management Systems', margin, y);
  doc.text('Hackathon 2026', pageWidth - margin, y, { align: 'right' });
  y += 11;
  addWrappedText(
    '• Co-designed (2-member team) a temperature- and voltage-insensitive Operational Transconductance Amplifier (OTA) in 180nm CMOS at 1.8V supply for BMS analog front-ends, built from a bandgap-based bias generation stage co-optimized with the amplification stage to remove gain drift at the circuit level.',
    8,
    false,
    8
  );
  addWrappedText(
    '• Achieved a gain error of just 1.18% (+25°C to +50°C) and 2.23% (+25°C to -40°C) with all transistors held in saturation; simulated in Cadence ADE L/ADE XL and implemented layout with Layout XL, including parasitic extraction.',
    8,
    false,
    8
  );
  y += 4;

  // Project 2: PFD for PLL
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('PFD for High-Speed PLL Using Resettable D Flip-Flop & Charge Pump', margin, y);
  doc.text('5th Sem', pageWidth - margin, y, { align: 'right' });
  y += 11;
  addWrappedText(
    '• Designed and verified a Phase-Frequency Detector built from a resettable D flip-flop and charge pump for high-speed PLL applications, verifying phase/frequency-error detection and lock behavior.',
    8,
    false,
    8
  );
  y += 4;

  // Project 3: 7-Stage Ring Oscillator
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('7-Stage Ring Oscillator Using Inverters', margin, y);
  doc.text('5th Sem', pageWidth - margin, y, { align: 'right' });
  y += 11;
  addWrappedText(
    '• Designed and verified a 7-stage inverter-based ring oscillator, analyzing oscillation frequency and output signal stability.',
    8,
    false,
    8
  );
  y += 4;

  // Project 4: Unsigned 8-bit MAC
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Unsigned 8-Bit MAC Operation Using 6T SRAM in Digital Domain – IIT Roorkee', margin, y);
  doc.text('Internship', pageWidth - margin, y, { align: 'right' });
  y += 11;
  addWrappedText(
    '• Designed and verified an unsigned 8-bit MAC architecture using a 6T SRAM-based digital-domain implementation, validating functional correctness across multiple operating conditions.',
    8,
    false,
    8
  );
  y += 4;

  // Project 5: Low-Power Adiabatic ALU
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Low-Power ALU Using Adiabatic Logic (Transmission Gates)', margin, y);
  doc.text('4th Sem', pageWidth - margin, y, { align: 'right' });
  y += 11;
  addWrappedText(
    '• Designed a low-power ALU implementing AND/NAND gates with adiabatic transmission-gate logic, extended to a full 8-bit adiabatic ALU; verified via PVT analysis across ±5% voltage variation, -40°C–100°C, and SS/FS/SF/TT/FF corners.',
    8,
    false,
    8
  );

  // --- PAGE 2 ---
  doc.addPage();
  y = 45;

  // Project 6: Buck Converter Layout
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Layout Design of Buck Converter & Transconductance Amplifier', margin, y);
  doc.text('4th Sem', pageWidth - margin, y, { align: 'right' });
  y += 11;
  addWrappedText(
    '• Designed full-custom layouts in Cadence Virtuoso for a buck converter and a transconductance amplifier; verified manufacturability with DRC and LVS.',
    8,
    false,
    8
  );
  y += 4;

  // Project 7: RTL-to-GDS of Half Adder
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('RTL-to-GDS of a Half Adder', margin, y);
  doc.text('4th Sem', pageWidth - margin, y, { align: 'right' });
  y += 11;
  addWrappedText(
    '• Executed the complete RTL-to-GDS flow (synthesis, placement, routing) for a half adder in Cadence, verified with DRC and LVS.',
    8,
    false,
    8
  );
  y += 4;

  // Project 8: 6T SRAM with SNM Analysis
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('6T SRAM Cell with Static Noise Margin (SNM) Analysis', margin, y);
  doc.text('2nd Sem', pageWidth - margin, y, { align: 'right' });
  y += 11;
  addWrappedText(
    '• Designed a 6T SRAM bitcell and characterized stability via butterfly-curve SNM analysis across hold/read/write modes under process and voltage variation.',
    8,
    false,
    8
  );
  y += 4;

  // Project 9: Schmitt Trigger
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Schmitt Trigger Design & Analysis', margin, y);
  doc.text('2nd Sem', pageWidth - margin, y, { align: 'right' });
  y += 11;
  addWrappedText(
    '• Designed and simulated a Schmitt trigger, analyzing hysteresis width, switching thresholds, and noise immunity.',
    8,
    false,
    8
  );
  y += 10;

  // Research Publications
  addSectionHeader('Research Publications');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Published (2026) — "Low-Temperature Power-Efficient Design of an 8-Bit ALU for Quantum-Inspired Computational Architectures"', margin, y);
  y += 11;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.text('Sahil Chhabra, Abhinav Sharma, Nishtha Kansal — 1st Int. Conference on VLSI Circuits and Systems (ICVCS 2026), IEEE CAS Kolkata Section, Jul 2026.', margin, y);
  y += 11;
  addWrappedText(
    '• Designed a transistor-level 8-bit CMOS ALU integrating adiabatic logic; characterized performance across -40°C to 100°C (<1% variation) and validated robustness across all process corners and voltage fluctuations (<4% error margin). Presented & published on IEEE Xplore.',
    8,
    false,
    8
  );
  y += 4;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Submitted — "PVT Insensitive Energy-Recovering ALU Architecture for Low-Power Microprocessor and Microcontroller Applications"', margin, y);
  y += 11;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.text('Sahil Chhabra, Abhinav Sharma, Nishtha Kansal — Manuscript submitted to a peer-reviewed journal.', margin, y);
  y += 11;
  addWrappedText(
    '• Developed an energy-recovering ALU using adiabatic logic engineered for PVT-insensitive operation, validated across ±5% voltage variation, -40°C–100°C, and SS/FS/SF/TT/FF process corners.',
    8,
    false,
    8
  );
  y += 8;

  // Certifications
  addSectionHeader('Certifications');
  const certsList = [
    '• Certificate of Presentation — ICVCS 2026, IEEE CAS Kolkata Section, Jul 2026',
    '• Author Certificate — ICVCS 2026, IEEE CAS Kolkata Section, Jul 2026',
    '• Winter School of Electronics — VIPS-TC, 2025',
    '• Value Added Course (VAC): Cadence-Powered Circuit Design — VIPS-TC, 2025',
    '• Two-Day Workshop on VLSI Design and Semiconductor Industry — ChipXpert Technologies Pvt. Ltd., Apr 2026',
    '• VLSI SoC Design using Verilog HDL (Seminar) — VLSI For All, with VIPS-TC, Apr 2026',
    '• Analog IC Design Implementation and Verification v1.0 (Online) — Cadence Training Services, Jun 2026',
    '• Digital Design and Verification v1.0 (Online) — Cadence Training Services, Jun 2026',
    '• Cadence RTL-to-GDSII Flow v7.0 (Online) — Cadence Training Services, Jun 2026',
    '• Virtuoso Schematic Editor S1: Creating Design Schematics vIC25.1 (Online) — Cadence Training Services, Jul 2026'
  ];
  certsList.forEach(cert => {
    addWrappedText(cert, 7.8, false, 4);
    y -= 1;
  });
  y += 6;

  // Education
  addSectionHeader('Education');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('B.Tech, Electronics Engineering – VLSI Design & Technology – VIPS-TC', margin, y);
  doc.text('2024 – 2028', pageWidth - margin, y, { align: 'right' });
  y += 11;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('• GPA: 8.5 / 10 (till 4th Semester)', margin + 8, y);
  y += 11;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Class XII (Science Stream) – Vishal Bharti Sr. Sec. School', margin, y);
  doc.text('2012 – 2024', pageWidth - margin, y, { align: 'right' });
  y += 11;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('• Scored 80% (Physics, Mathematics, and Chemistry with Computer Science)', margin + 8, y);
  y += 14;

  // Leadership & Activities
  addSectionHeader('Leadership & Activities');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Technical Head – Cadence & Public Relations (PR) – Chip Crafters, Official Society of VSET', margin, y);
  doc.text('Aug 2025 – Sep 2026', pageWidth - margin, y, { align: 'right' });
  y += 11;
  addWrappedText('• Led Cadence Virtuoso workshops and hands-on IC design sessions; organized VLSI seminars and design challenges.', 8, false, 8);
  addWrappedText('• Handled society outreach and communication, coordinating promotion and participation for events.', 8, false, 8);
  y += 6;

  // Languages
  addSectionHeader('Languages');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('English – Professional Proficiency  •  Hindi – Native', margin, y);

  // Save the PDF directly
  doc.save('Sahil_Chhabra_VLSI_Resume.pdf');
};
