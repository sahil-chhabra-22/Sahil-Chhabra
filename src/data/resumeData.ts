export interface Project {
  id: string;
  title: string;
  shortOverview: string;
  category: 'analog' | 'memory' | 'low-power' | 'digital' | 'layout';
  problem: string;
  architecture: string;
  methodology: string[];
  toolsUsed: string[];
  stages: {
    name: string;
    description: string;
  }[];
  verifiedResults: {
    metric: string;
    value: string;
    condition: string;
  }[];
  designDecisions: string[];
  limitations: string;
  tags: string[];
  semester?: string;
  affiliation?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  status: 'Published' | 'Submitted';
  venue: string;
  date: string;
  index: string;
  abstract: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: 'Cadence' | 'IEEE' | 'Academic' | 'Industry';
  credentialId?: string;
  topics: string[];
}

export const RESUME_DATA = {
  personal: {
    name: "Sahil Chhabra",
    headline: "Analog & Mixed-Signal IC Design Engineer",
    subheadline: "B.Tech Electronics Engineering (VLSI Design & Technology) · IIT Roorkee Research Intern",
    institution: "Vivekananda Institute of Professional Studies – Technical Campus (VIPS-TC)",
    location: "Delhi, India",
    email: "sahilchhabra2712@gmail.com",
    linkedin: "https://linkedin.com/in/sahilchhabra2712",
    github: "https://github.com/sahilchhabra2712",
    status: "Seeking Both Off-Campus & On-Campus · Open to Internships & Job Opportunities",
    batch: "2024–2028",
    gpa: "8.5 / 10 (till 4th Semester)",
  },
  summary: `Electronics Engineering undergraduate specializing in analog and mixed-signal IC design, with hands-on full-custom layout, schematic, and SPICE-level verification experience in Cadence Virtuoso. Built and DRC/LVS-verified layouts for a buck converter, transconductance amplifier, and 6T SRAM cell, and designed low-power adiabatic-logic ALUs verified through PVT analysis across voltage variation, a wide temperature range, and all major process corners. Authored a published, IEEE-presented paper on a temperature-robust ALU for Quantum-inspired computation architectures and a submitted journal paper on a PVT-insensitive energy-recovering ALU for different Microcontrollers and Microprocessors; currently working on PLL design. Complements analog design skills with a full RTL-to-GDSII digital flow background.`,

  internship: {
    role: "Research Intern",
    department: "Dept. of Electronics & Communication Engineering",
    institution: "IIT Roorkee",
    supervisor: "Prof. Sudeb Dasgupta",
    period: "Jun 2026 – Jul 2026",
    title: "Unsigned 8-Bit MAC Operation Built on 6T SRAM in the Digital Domain",
    description: "Simulated and characterized an unsigned 8-bit Multiply-Accumulate (MAC) operation built on a 6T SRAM-based architecture in the digital domain, evaluating computational accuracy and hardware performance across varying operating conditions and benchmarking efficiency against conventional digital MAC implementations.",
    metrics: [
      { label: "Architecture", value: "6T SRAM-Integrated MAC" },
      { label: "Operand Width", value: "8-bit Unsigned" },
      { label: "Target Application", value: "Compute-in-Memory / DSP" },
      { label: "Verification Scope", value: "Functional Accuracy & Timing" }
    ]
  },

  skills: [
    {
      category: "VLSI / IC Design",
      items: [
        { name: "Analog & Mixed-Signal IC Design", context: "Op-amps, OTAs, bandgap reference biasing, Schmitt triggers" },
        { name: "Full-Custom Layout Design", context: "Virtuoso Layout XL, DRC/LVS clean, guard rings & matching" },
        { name: "Noise Margin & SNM Analysis", context: "Static Noise Margin (Hold, Read, Write SNM) butterfly-curve characterization for robust SRAM bitcells and Schmitt triggers" },
        { name: "Low-Power / Adiabatic Logic", context: "Transmission gate energy-recovery circuits, adiabatic ALUs" },
        { name: "Memory (SRAM) Architecture Design", context: "6T SRAM bitcell, butterfly SNM analysis, hold/read/write" },
        { name: "PLL Architecture", context: "Resettable D flip-flop PFD, charge pump, loop filter design" },
        { name: "Digital Design & Verification", context: "Verilog RTL, testbench creation, synthesis, static timing analysis" }
      ]
    },
    {
      category: "EDA Tools & Suites",
      items: [
        { name: "Cadence Virtuoso (ADE L / ADE XL / Layout XL)", context: "Schematic entry, simulation, full-custom layout" },
        { name: "Cadence Genus Synthesis Solution", context: "RTL synthesis and area/timing optimization" },
        { name: "Cadence Innovus Implementation System", context: "Floorplanning, placement, clock tree synthesis, routing" },
        { name: "Cadence Xcelium", context: "Logic simulation and functional verification" },
        { name: "AMD Xilinx Vivado", context: "FPGA simulation, synthesis, and bitstream verification" }
      ]
    },
    {
      category: "Verification & Physical Verification",
      items: [
        { name: "Design Rule Check (DRC)", context: "Manufacturing rule verification in Cadence Assura/PVS" },
        { name: "Layout Versus Schematic (LVS)", context: "Netlist and topology equivalence extraction" },
        { name: "Noise Margin / SNM (Butterfly Curve) Analysis", context: "Static noise margin extraction for 6T SRAM bitcells" },
        { name: "PVT Corner Analysis", context: "Voltage ±5%, -40°C to 100°C, SS/FS/SF/TT/FF major corners" },
        { name: "Process-Corner Analysis (SS, FS, SF, TT, FF)", context: "Transistor speed skew validation across NMOS/PMOS" },
        { name: "Monte Carlo & Statistical Analysis", context: "Threshold voltage mismatch and process variance impact" },
        { name: "Power Spectral Density (PSD) Analysis", context: "Signal noise analysis and frequency domain stability" },
        { name: "Static Timing Analysis (STA)", context: "Setup/hold time verification, critical path identification" }
      ]
    },
    {
      category: "HDL & Programming Languages",
      items: [
        { name: "Verilog HDL", context: "RTL modeling of ALUs, state machines, MAC units" },
        { name: "C Programming", context: "Low-level algorithm modeling and test automation" },
        { name: "Python", context: "Data parsing, SPICE raw wave parsing, automation" },
        { name: "MATLAB", context: "System-level mathematical modeling and filter analysis" },
        { name: "EMU8086 & Keil", context: "Microprocessor assembly & embedded architecture testing" },
        { name: "SQL", context: "Relational database querying for design verification metrics" }
      ]
    },
    {
      category: "Operating Systems & Platforms",
      items: [
        { name: "Red Hat Enterprise Linux (RHEL)", context: "Primary Cadence EDA production deployment environment" },
        { name: "Ubuntu Linux", context: "Open-source EDA toolchains and scripting" },
        { name: "Windows 11", context: "Embedded tooling, Keil, EMU8086, general engineering" }
      ]
    }
  ],

  projects: ([
    {
      id: "thermastable-ota",
      title: "ThermaStable: Temperature-Resilient OTA for EV BMS",
      shortOverview: "Co-designed a temperature- and voltage-insensitive Operational Transconductance Amplifier (OTA) in 180nm CMOS at 1.8V supply for EV battery management system analog front-ends.",
      category: "analog",
      semester: "Hackathon 2026",
      affiliation: "Chip to Future (C2F) National Hackathon – SoC Track (Team of 2 with Abhinav Sharma)",
      problem: "Battery Management Systems (BMS) in electric vehicles experience severe thermal excursions (-40°C to +85°C) and battery supply fluctuations. Conventional OTAs suffer severe transconductance (gm) and gain drift, introducing unacceptable telemetry error into battery cell voltage monitoring.",
      architecture: "Two-stage CMOS Operational Transconductance Amplifier with an integrated bandgap-based PTAT/CTAT compensation bias generator co-optimized directly with the differential input pair and active load to cancel transconductance drift at the physical circuit level.",
      methodology: [
        "Bandgap-derived bias generation stage calibrated for zero-temperature-coefficient current point.",
        "Differential amplification pair sized for deep saturation across all PVT conditions.",
        "Full-custom physical layout executed in Cadence Layout XL with common-centroid differential pair routing and dummy fingers to mitigate edge oxide gradients.",
        "Parasitic extraction (PEX) followed by post-layout transient, AC, and DC simulations in Cadence ADE XL."
      ],
      toolsUsed: ["Cadence Virtuoso", "ADE L / ADE XL", "Layout XL", "180nm CMOS PDK (1.8V)", "Assura DRC/LVS", "PEX"],
      stages: [
        { name: "Specification", description: "Targeted 180nm CMOS, VDD=1.8V, gain drift <3% over -40°C to +50°C, and rail-to-rail stability." },
        { name: "Circuit Design", description: "Designed self-compensating bias generator driving differential stage with Miller compensation." },
        { name: "Layout XL Implementation", description: "Interdigitated common-centroid layout with protective guard rings and matched metal fill." },
        { name: "Physical Verification", description: "Achieved 100% clean DRC and zero-discrepancy LVS netlist match." },
        { name: "Post-Layout Characterization", description: "Simulated AC open-loop gain and phase margin across PVT corners with extracted parasitics." }
      ],
      verifiedResults: [
        { metric: "Gain Error (+25°C to +50°C)", value: "1.18%", condition: "180nm CMOS, 1.8V VDD" },
        { metric: "Gain Error (+25°C to -40°C)", value: "2.23%", condition: "180nm CMOS, 1.8V VDD" },
        { metric: "Transistor Saturation", value: "100%", condition: "All transistors held in saturation across range" },
        { metric: "Physical Verification", value: "Clean DRC & LVS", condition: "Cadence Layout XL with PEX" }
      ],
      designDecisions: [
        "Selected 180nm standard CMOS node at 1.8V supply to maximize analog voltage headroom while remaining compatible with high-voltage BMS front-end isolation.",
        "Employed common-centroid placement for input differential pairs to eliminate threshold voltage (Vth) mismatch from thermal gradients.",
        "Designed bias generator with positive and negative temperature coefficient current summation to counteract gm temperature degradation."
      ],
      limitations: "Tested with simulated parasitic extraction; physical tape-out silicon pending fabrication via foundry shuttle run.",
      tags: ["180nm CMOS", "Cadence Virtuoso", "BMS", "OTA", "Bandgap Bias", "DRC/LVS", "PEX"]
    },
    {
      id: "iit-roorkee-mac",
      title: "Unsigned 8-Bit MAC Operation Using 6T SRAM in Digital Domain",
      shortOverview: "Research internship project at IIT Roorkee supervised by Prof. Sudeb Dasgupta, evaluating computational accuracy and hardware efficiency of a 6T SRAM-integrated MAC architecture.",
      category: "memory",
      semester: "Research Internship",
      affiliation: "IIT Roorkee – Dept. of ECE (under Prof. Sudeb Dasgupta)",
      problem: "Traditional Von Neumann computing architectures suffer from the memory wall bottleneck where data shuffling between memory and arithmetic logic units dominates total power dissipation during intensive Multiply-Accumulate (MAC) workloads in machine learning and DSP.",
      architecture: "8-bit Unsigned Multiply-Accumulate (MAC) pipeline implemented directly using a modified 6T SRAM bitcell array in the digital domain to achieve tight coupling between storage and arithmetic processing.",
      methodology: [
        "Configured 6T SRAM bitcells for dual-role operand storage and concurrent bitwise accumulation.",
        "Benchmarked hardware complexity against conventional digital Wallace-tree / booth multiplier MAC units.",
        "Characterized bitcell read disturbances, hold stability, and dynamic power consumption during consecutive multiply-accumulate cycles across supply and temperature."
      ],
      toolsUsed: ["Cadence Virtuoso", "Cadence Xcelium", "SPICE Simulation", "Verilog HDL"],
      stages: [
        { name: "Architecture Definition", description: "Defined memory-mapped accumulator interface with 8-bit unsigned dynamic range." },
        { name: "Transistor-Level Design", description: "Implemented 6T SRAM cell matrices with bitline precharge and sense amplifier stages." },
        { name: "Simulation & Benchmarking", description: "Simulated complete MAC execution cycles across voltage scaling." },
        { name: "Performance Evaluation", description: "Benchmarked latency and throughput against standard digital register-file MACs." }
      ],
      verifiedResults: [
        { metric: "Operand Precision", value: "8-bit Unsigned", condition: "Integer MAC operations" },
        { metric: "Functional Correctness", value: "100% Validated", condition: "Verified across multiple operating conditions" },
        { metric: "Memory Topology", value: "6T SRAM Bitcell", condition: "Digital domain read/accumulate sequencing" }
      ],
      designDecisions: [
        "Retained standard 6T SRAM cell topology to preserve high density and compatibility with standard logic CMOS fabrication processes without requiring specialized dual-gate or floating-gate devices.",
        "Structured digital-domain sequencing to minimize read-disturb vulnerability on the internal storage nodes."
      ],
      limitations: "Evaluated in digital-domain SPICE testbenches; full high-density macro layout scaling remains ongoing.",
      tags: ["IIT Roorkee", "6T SRAM", "Compute-in-Memory", "MAC Unit", "Cadence Virtuoso", "DSP"]
    },
    {
      id: "adiabatic-alu-low-power",
      title: "Low-Power 8-Bit ALU Using Adiabatic Logic (Transmission Gates)",
      shortOverview: "Designed an energy-recovering 8-bit Arithmetic Logic Unit using adiabatic transmission-gate logic, rigorously verified via PVT corner analysis across voltage and temperature.",
      category: "low-power",
      semester: "4th Semester",
      problem: "Conventional static CMOS logic dissipates CV² energy per transition to ground. In quantum-inspired and ultra-low-power edge computing systems, this thermal dissipation limits packing density and causes unacceptable thermal noise.",
      architecture: "8-bit Arithmetic Logic Unit utilizing adiabatic energy-recovery transmission-gate topologies driven by multi-phase pulsed/trapezoidal power clocks to recycle charge stored in nodal capacitances back to the supply.",
      methodology: [
        "Designed adiabatic transmission-gate logic gates (AND, NAND, XOR, Half Adder) with symmetric charge transfer.",
        "Extended topology into an 8-bit arithmetic logic architecture capable of standard arithmetic and logic operations.",
        "Subjected the entire ALU to exhaustive PVT corner analysis: ±5% VDD variation, -40°C to 100°C temperature sweep, and all major process corners (SS, FS, SF, TT, FF)."
      ],
      toolsUsed: ["Cadence Virtuoso", "ADE L", "Spectre", "Verilog HDL", "PVT Corner Analysis"],
      stages: [
        { name: "Gate Sizing & Topology", description: "Engineered transmission-gate adiabatic logic gates to minimize non-adiabatic dissipation during switching." },
        { name: "8-Bit ALU Integration", description: "Structured modular 8-bit arithmetic and logic core with carry-propagation optimization." },
        { name: "PVT Corner Sweep", description: "Simulated over SS, FS, SF, TT, FF corners from -40°C to 100°C with ±5% supply fluctuation." },
        { name: "Energy Recovery Audit", description: "Measured net dissipated energy per operation compared to static CMOS baselines." }
      ],
      verifiedResults: [
        { metric: "Temperature Robustness", value: "<1% Variation", condition: "-40°C to 100°C" },
        { metric: "Process Corner Robustness", value: "<4% Error Margin", condition: "SS, FS, SF, TT, FF corners" },
        { metric: "Voltage Tolerance", value: "±5% VDD", condition: "Maintains full functional output levels" },
        { metric: "Conference Publication", value: "IEEE ICVCS 2026", condition: "Presented & published on IEEE Xplore" }
      ],
      designDecisions: [
        "Used transmission-gate switches instead of diode-configured transistors to avoid diode threshold voltage drop penalties and maximize energy recovery efficiency.",
        "Optimized power-clock ramp rates to maintain adiabatic operation without introducing excessive cycle latency."
      ],
      limitations: "Requires synchronized multi-phase power clock generation circuitry for full-chip integration.",
      tags: ["Adiabatic Logic", "Low-Power", "IEEE Published", "PVT Analysis", "Transmission Gates", "Cadence"]
    },
    {
      id: "sram-snm-analysis",
      title: "6T SRAM Bitcell with Static Noise Margin (SNM) Butterfly Analysis",
      shortOverview: "Designed a 6T SRAM bitcell and characterized stability across hold, read, and write operations via butterfly-curve Static Noise Margin (SNM) analysis under process and voltage variations.",
      category: "memory",
      semester: "2nd Semester",
      problem: "Scaling transistor dimensions in SRAM introduces threshold voltage fluctuations and degrades bitcell stability, increasing susceptibility to soft errors and read disturbs.",
      architecture: "Classic 6-Transistor SRAM cell comprising two cross-coupled CMOS inverters and two NMOS access transistors controlled by a common Wordline (WL).",
      methodology: [
        "Transistor sizing based on Cell Ratio (CR = W_driver / W_access >= 1.5) and Pull-Up Ratio (PR = W_load / W_access) for optimal read stability and writeability.",
        "Simulated Voltage Transfer Characteristics (VTC) of the paired inverters to generate the iconic 'butterfly curve'.",
        "Extracted Hold SNM, Read SNM, and Write Margin across voltage scaling and major process corners."
      ],
      toolsUsed: ["Cadence Virtuoso", "Spectre", "ADE L", "Butterfly SNM Scripting"],
      stages: [
        { name: "Bitcell Schematic", description: "Constructed 6T cell with balanced access, driver, and load transistors." },
        { name: "Butterfly SNM Extraction", description: "Inverted and mirrored VTCs to calculate maximum embedded square size in the butterfly lobes." },
        { name: "Read/Write Verification", description: "Simulated dynamic read access with bitline discharge and write cycle transition times." },
        { name: "Corner & Mismatch Analysis", description: "Evaluated stability degradation across process skew." }
      ],
      verifiedResults: [
        { metric: "Cell Architecture", value: "Standard 6T CMOS", condition: "Cross-coupled CMOS inverters with NMOS access" },
        { metric: "Analysis Protocol", value: "Butterfly-Curve SNM", condition: "Hold, Read, and Write modes characterized" },
        { metric: "Verification Scope", value: "Process & Voltage Variation", condition: "Evaluated under PVT perturbations" }
      ],
      designDecisions: [
        "Enforced strict Cell Ratio >= 1.5 to prevent node flipping during wordline activation when bitlines are precharged to VDD.",
        "Engineered pull-up PMOS width to ensure writeability margin without compromising data retention during standby."
      ],
      limitations: "Full memory compiler macro routing not generated; analyzed at single bitcell and small-array load level.",
      tags: ["6T SRAM", "SNM Analysis", "Butterfly Curve", "Cadence Virtuoso", "Memory Stability"]
    },
    {
      id: "pll-pfd-charge-pump",
      title: "Phase-Frequency Detector (PFD) & Charge Pump for High-Speed PLL",
      shortOverview: "Designed and verified a Phase-Frequency Detector built from resettable D flip-flops and an analog charge pump for high-speed clock generation in Phase-Locked Loops.",
      category: "analog",
      semester: "5th Semester",
      problem: "Clock jitter and reference phase mismatch in high-speed microprocessors degrade timing margins. Standard PFD designs suffer from a dead-zone around zero phase error, causing excessive phase noise.",
      architecture: "Resettable D flip-flop architecture with deliberate reset delay insertion to eliminate the PFD dead-zone, driving a balanced current-steering analog charge pump with UP and DOWN control currents.",
      methodology: [
        "Implemented high-speed true single-phase clock (TSPC) / resettable D flip-flops for reference and feedback comparison.",
        "Engineered reset path delay to guarantee complete current steering before reset assertion.",
        "Simulated phase-frequency error detection, acquisition range, and lock behavior under transient excitation."
      ],
      toolsUsed: ["Cadence Virtuoso", "Spectre", "ADE L", "Analog Mixed-Signal"],
      stages: [
        { name: "PFD Logic Design", description: "Schematic implementation of resettable DFFs with minimal internal gate propagation delay." },
        { name: "Charge Pump Matching", description: "Current-mirror biased UP/DOWN current sinks calibrated for zero current mismatch." },
        { name: "Dead-Zone Elimination", description: "Tuned delay inverter chain in reset path to achieve linear gain through zero phase delta." },
        { name: "Lock Simulation", description: "Verified frequency acquisition and phase alignment across frequency offsets." }
      ],
      verifiedResults: [
        { metric: "Dead-Zone", value: "Eliminated", condition: "Calibrated reset delay buffer" },
        { metric: "Functionality", value: "Phase & Frequency Error Lock", condition: "Verified under varying reference clock phase" },
        { metric: "Target Application", value: "High-Speed PLL SoC", condition: "Clock synthesis analog front-end" }
      ],
      designDecisions: [
        "Selected transmission-gate / custom dynamic DFF topology for minimal propagation delay and symmetrical UP/DOWN pulse generation.",
        "Added dummy transistors in charge pump current mirrors to suppress charge injection and clock feedthrough artifacts on the control voltage node."
      ],
      limitations: "VCO and loop filter currently in design phase; PFD and charge pump stages completed and verified.",
      tags: ["PLL", "PFD", "Charge Pump", "Cadence Virtuoso", "Clock Generation", "Analog IC"]
    },
    {
      id: "buck-converter-ota-layout",
      title: "Full-Custom Layout of Buck Converter & Transconductance Amplifier",
      shortOverview: "Designed full-custom layouts in Cadence Virtuoso for an integrated buck converter power stage and a transconductance amplifier; verified manufacturability with DRC and LVS.",
      category: "layout",
      semester: "4th Semester",
      problem: "Power management ICs and analog amplifiers suffer severe performance degradation from layout parasitics, electromigration, and substrate noise coupling if physical design rules are not meticulously observed.",
      architecture: "Power stage switching layout for a DC-DC buck converter paired with a high-gain transconductance amplifier, featuring wide power routing meshes, guard ring isolation, and matched passive placement.",
      methodology: [
        "Constructed schematic hierarchy and matched transistor sizing in Virtuoso Schematic Editor.",
        "Transitioned to Virtuoso Layout XL with automated pin placement, connectivity binding, and design rule checking.",
        "Applied multi-finger layout techniques, interdigitation, and low-resistance top-metal routing for high current paths.",
        "Executed full DRC and LVS rule decks in Cadence Assura."
      ],
      toolsUsed: ["Cadence Virtuoso Layout XL", "Virtuoso Schematic Editor", "Assura DRC", "Assura LVS"],
      stages: [
        { name: "Schematic Hierarchy", description: "Finalized schematics with assigned physical instances and matching pins." },
        { name: "Floorplanning", description: "Separated sensitive small-signal analog inputs from high-dI/dt power switching nodes." },
        { name: "Routing & Metal Stacks", description: "Used thick top metals for supply lines and common-centroid routing for differential pairs." },
        { name: "DRC & LVS Signoff", description: "Resolved all manufacturing design rule violations and verified netlist equivalence." }
      ],
      verifiedResults: [
        { metric: "DRC Status", value: "100% Clean", condition: "Zero design rule violations in Assura" },
        { metric: "LVS Status", value: "Equivalence Matched", condition: "Zero net/device discrepancies" },
        { metric: "Layout Tool", value: "Cadence Layout XL", condition: "Full-custom physical design" }
      ],
      designDecisions: [
        "Surrounded sensitive transconductance amplifier input stages with continuous substrate tap guard rings to isolate power stage ground bounce.",
        "Sized power MOSFET routing traces to strictly adhere to metal electromigration limits under peak load current."
      ],
      limitations: "Demonstrated at block layout level; integration into full chip pad ring planned for subsequent design cycle.",
      tags: ["Full-Custom Layout", "Cadence Layout XL", "Buck Converter", "OTA", "DRC", "LVS"]
    },
    {
      id: "rtl-to-gds-half-adder",
      title: "RTL-to-GDSII Implementation of a Half Adder",
      shortOverview: "Executed the complete Cadence digital ASIC flow (logic synthesis, floorplanning, placement, clock tree synthesis, routing) for an arithmetic half adder, verified with signoff DRC/LVS.",
      category: "digital",
      semester: "4th Semester",
      problem: "Bridging the gap between behavioral HDL descriptions and physical silicon tape-out requires rigorous understanding of standard cell libraries, timing constraints, and physical layout synthesis flows.",
      architecture: "Full standard cell digital ASIC flow taking Verilog RTL through Cadence Genus synthesis, constraint mapping, and Cadence Innovus physical implementation.",
      methodology: [
        "Wrote Verilog RTL and verified functional logic through simulation testbenches.",
        "Synthesized logic using Cadence Genus targeting foundry standard cell library.",
        "Imported gate-level netlist into Cadence Innovus for floorplanning, power grid creation, standard cell placement, and detailed routing.",
        "Extracted layout parasitics and ran physical verification DRC/LVS."
      ],
      toolsUsed: ["Cadence Genus", "Cadence Innovus", "Cadence Virtuoso", "Verilog HDL"],
      stages: [
        { name: "Verilog Modeling", description: "RTL model with exhaustive truth-table testbench." },
        { name: "Logic Synthesis", description: "Cadence Genus mapped RTL to target gate library." },
        { name: "Innovus P&R", description: "Floorplan, power ring routing, placement, NanoRoute detailed routing." },
        { name: "Signoff Verification", description: "Streamed out GDSII and verified DRC and LVS." }
      ],
      verifiedResults: [
        { metric: "Flow Completeness", value: "Full RTL-to-GDSII", condition: "Synthesis, P&R, DRC/LVS" },
        { metric: "Signoff Status", value: "DRC & LVS Clean", condition: "Cadence Innovus & Virtuoso" },
        { metric: "Target Toolchain", value: "Cadence Genus & Innovus", condition: "Industry-standard digital EDA suite" }
      ],
      designDecisions: [
        "Maintained structured power ring and stripe density to prevent IR drop across core area.",
        "Validated gate-level netlist post-synthesis against behavioral RTL testbenches before starting physical floorplanning."
      ],
      limitations: "Half adder is a foundational proof-of-flow design demonstrating end-to-end toolchain mastery.",
      tags: ["RTL-to-GDSII", "Cadence Genus", "Cadence Innovus", "Synthesis", "P&R", "Digital ASIC"]
    },
    {
      id: "ring-oscillator-7-stage",
      title: "7-Stage Inverter Ring Oscillator",
      shortOverview: "Designed and simulated a 7-stage inverter-based ring oscillator in Cadence Virtuoso, analyzing oscillation frequency, phase noise, and output signal stability.",
      category: "analog",
      semester: "5th Semester",
      problem: "On-chip clock generation and process monitor circuits require reliable self-starting oscillation with characterizable frequency dependence on supply voltage and process variation.",
      architecture: "Closed-loop odd-stage inverter ring configuration (N=7 stages) providing 360-degree total phase shift at the natural oscillation frequency (f = 1 / (2 * N * t_pd)).",
      methodology: [
        "Sized inverter stages with balanced PMOS and NMOS drive strengths for symmetrical rise and fall times.",
        "Analyzed propagation delay per stage (t_pd) and verified barkhausen criteria for sustained oscillation.",
        "Evaluated oscillation frequency sensitivity against supply voltage variations and temperature swings."
      ],
      toolsUsed: ["Cadence Virtuoso", "Spectre", "ADE L"],
      stages: [
        { name: "Stage Sizing", description: "Optimized (W/L) ratios for PMOS and NMOS inverters." },
        { name: "Transient Analysis", description: "Simulated start-up condition and measured steady-state frequency." },
        { name: "Corner Characterization", description: "Observed frequency shift across temperature range and supply rail." }
      ],
      verifiedResults: [
        { metric: "Stage Count", value: "7 Stages", condition: "Odd inverter topology" },
        { metric: "Oscillation Behavior", value: "Stable Self-Sustained", condition: "Verified in Cadence Spectre" },
        { metric: "Signal Integrity", value: "Full Rail-to-Rail Swing", condition: "1.8V peak-to-peak output" }
      ],
      designDecisions: [
        "Added output buffer stages to isolate the sensitive oscillating core from external capacitive loading effects.",
        "Ensured symmetric rise and fall propagation delays to minimize duty cycle distortion."
      ],
      limitations: "Studied as clock reference and process monitor; integrated PLL loop testing ongoing.",
      tags: ["Ring Oscillator", "Cadence Virtuoso", "Clock Generation", "Phase Stability"]
    },
    {
      id: "schmitt-trigger-analysis",
      title: "CMOS Schmitt Trigger Design & Hysteresis Analysis",
      shortOverview: "Designed and simulated a CMOS Schmitt trigger in Cadence Virtuoso, analyzing hysteresis width, upper/lower switching thresholds, and noise immunity.",
      category: "analog",
      semester: "2nd Semester",
      problem: "Slowly changing or noisy input signals in digital interfaces cause spurious multiple transitions and excessive short-circuit power dissipation in standard CMOS inverters.",
      architecture: "Six-transistor CMOS Schmitt trigger using positive feedback feedback paths to modulate the effective threshold voltages V_M+ and V_M-.",
      methodology: [
        "Engineered positive feedback transistor ratios to set defined upper and lower switching trip points.",
        "Performed DC sweeps to plot hysteresis curves and quantify noise margin enhancement.",
        "Subjected circuit to noisy analog input ramps to verify clean single-edge digital output transitions."
      ],
      toolsUsed: ["Cadence Virtuoso", "Spectre", "ADE L"],
      stages: [
        { name: "Circuit Design", description: "Implemented 6T feedback topology with tunable threshold ratios." },
        { name: "Hysteresis Plotting", description: "Extracted V_TH+ and V_TH- via forward and reverse DC voltage sweeps." },
        { name: "Noise Immunity Test", description: "Injected AC noise ripples on the input signal to evaluate false-trigger immunity." }
      ],
      verifiedResults: [
        { metric: "Topology", value: "6T CMOS Schmitt Trigger", condition: "Internal feedback modulation" },
        { metric: "Hysteresis Window", value: "Clearly Defined Window", condition: "Separated upper & lower switching thresholds" },
        { metric: "Noise Immunity", value: "Validated", condition: "Zero spurious output transitions on noisy ramp inputs" }
      ],
      designDecisions: [
        "Sized feedback transistors to maintain wide noise margins without severely degrading propagation speed.",
        "Optimized supply current path to minimize power draw during threshold crossing."
      ],
      limitations: "Operates as a sub-block in mixed-signal interface front-ends.",
      tags: ["Schmitt Trigger", "Hysteresis", "Noise Immunity", "Cadence Virtuoso", "Analog IC"]
    }
  ] as Project[]),

  publications: [
    {
      id: "icvcs-2026-paper",
      title: "Low-Temperature Power-Efficient Design of an 8-Bit ALU for Quantum-Inspired Computational Architectures",
      authors: ["Sahil Chhabra", "Abhinav Sharma", "Nishtha Kansal"],
      status: "Published",
      venue: "1st International Conference on VLSI Circuits and Systems (ICVCS 2026), IEEE CAS Kolkata Section",
      date: "Jul 2026",
      index: "Presented & published on IEEE Xplore",
      abstract: "Presents the transistor-level design of an 8-bit CMOS Arithmetic Logic Unit integrating adiabatic energy-recovery logic tailored for quantum-inspired and cryogenic/low-temperature computing architectures. The design is characterized extensively across a wide thermal operating range and subjected to process and voltage variations.",
      highlights: [
        "Characterized thermal stability from -40°C to 100°C with less than 1% performance variation.",
        "Validated robustness across all major process corners (SS, FS, SF, TT, FF) and voltage fluctuations with under 4% error margin.",
        "Demonstrated substantial energy savings through adiabatic transmission-gate charge recovery."
      ]
    },
    {
      id: "journal-submitted-paper",
      title: "PVT Insensitive Energy-Recovering ALU Architecture for Low-Power Microprocessor and Microcontroller Applications",
      authors: ["Sahil Chhabra", "Abhinav Sharma", "Nishtha Kansal"],
      status: "Submitted",
      venue: "Manuscript submitted to a peer-reviewed journal",
      date: "2026",
      index: "Under Peer Review",
      abstract: "Develops an energy-recovering ALU architecture engineered specifically for PVT-insensitive operation across varying environmental conditions in embedded microcontrollers and microprocessors.",
      highlights: [
        "Validated across ±5% supply voltage variation.",
        "Demonstrated consistent operational fidelity across -40°C to 100°C temperature span.",
        "Exhaustively tested across SS, FS, SF, TT, and FF process corners."
      ]
    }
  ],

  certifications: [
    {
      id: "cert-virtuoso-s1",
      title: "Virtuoso Schematic Editor S1: Creating Design Schematics vIC25.1",
      issuer: "Cadence Training Services",
      date: "Jul 2026",
      type: "Cadence",
      topics: ["Schematic entry", "Hierarchy management", "Design rules", "Symbol creation", "Virtuoso vIC25.1"]
    },
    {
      id: "cert-rtl-gds",
      title: "Cadence RTL-to-GDSII Flow v7.0",
      issuer: "Cadence Training Services",
      date: "Jun 2026",
      type: "Cadence",
      topics: ["Genus synthesis", "Innovus P&R", "Floorplanning", "CTS", "Physical verification signoff"]
    },
    {
      id: "cert-analog-ic",
      title: "Analog IC Design Implementation and Verification v1.0",
      issuer: "Cadence Training Services",
      date: "Jun 2026",
      type: "Cadence",
      topics: ["ADE L / ADE XL", "Spectre SPICE simulation", "PVT corner analysis", "Monte Carlo", "Noise analysis"]
    },
    {
      id: "cert-digital-design",
      title: "Digital Design and Verification v1.0",
      issuer: "Cadence Training Services",
      date: "Jun 2026",
      type: "Cadence",
      topics: ["Verilog HDL", "Xcelium simulation", "Testbench architecture", "Timing verification"]
    },
    {
      id: "cert-ieee-presentation",
      title: "Certificate of Presentation — ICVCS 2026",
      issuer: "IEEE CAS Kolkata Section",
      date: "Jul 2026",
      type: "IEEE",
      topics: ["Oral presentation of research paper on quantum-inspired adiabatic ALU architectures"]
    },
    {
      id: "cert-ieee-author",
      title: "Author Certificate — ICVCS 2026",
      issuer: "IEEE CAS Kolkata Section",
      date: "Jul 2026",
      type: "IEEE",
      topics: ["Authorship recognition for peer-reviewed IEEE conference proceedings publication"]
    },
    {
      id: "cert-chipxpert",
      title: "Two-Day Workshop on VLSI Design and Semiconductor Industry",
      issuer: "ChipXpert Technologies Pvt. Ltd.",
      date: "Apr 2026",
      type: "Industry",
      topics: ["Industry fabrication trends", "ASIC design life-cycle", "Tape-out procedures"]
    },
    {
      id: "cert-vlsi-soc-verilog",
      title: "VLSI SoC Design using Verilog HDL (Seminar)",
      issuer: "VLSI For All, with VIPS-TC",
      date: "Apr 2026",
      type: "Academic",
      topics: ["SoC interconnects", "Verilog IP core integration", "Bus protocols"]
    },
    {
      id: "cert-cadence-vac",
      title: "Value Added Course (VAC): Cadence-Powered Circuit Design",
      issuer: "VIPS-TC",
      date: "2025",
      type: "Academic",
      topics: ["Full-custom analog layout", "DRC/LVS verification", "Cadence EDA flow"]
    },
    {
      id: "cert-winter-school",
      title: "Winter School of Electronics",
      issuer: "VIPS-TC",
      date: "2025",
      type: "Academic",
      topics: ["Semiconductor device physics", "CMOS fundamentals", "Circuit simulation"]
    }
  ],

  education: [
    {
      institution: "Vivekananda Institute of Professional Studies – Technical Campus (VIPS-TC)",
      degree: "B.Tech, Electronics Engineering – VLSI Design & Technology",
      period: "2024 – 2028",
      score: "GPA: 8.5 / 10 (till 4th Semester)",
      highlights: [
        "Specializing in Analog and Mixed-Signal IC Design, CMOS transistor-level layout, and low-power architectures.",
        "Consistently maintained high academic standing in core semiconductor and circuit design coursework."
      ]
    },
    {
      institution: "Vishal Bharti Sr. Sec. School",
      degree: "Class XII (Science Stream)",
      period: "2012 – 2024",
      score: "Scored 80%",
      highlights: ["Physics, Mathematics, Chemistry, and Computer Science."]
    }
  ],

  leadership: {
    role: "Technical Head – Cadence & Public Relations (PR)",
    organization: "Chip Crafters, Official Society of VSET",
    period: "Aug 2025 – Sep 2026",
    achievements: [
      "Led Cadence Virtuoso workshops and hands-on IC design sessions for fellow engineering students.",
      "Organized technical VLSI seminars, IC design competitions, and chip layout hackathons.",
      "Handled official society PR and industry outreach, promoting active student participation in semiconductor activities."
    ]
  },

  hackathon: {
    name: "Chip to Future (C2F) National Hackathon – SoC Track",
    affiliation: "VIPS-TC · Team of 2 (with Abhinav Sharma)",
    year: "2026",
    achievement: "Co-designed ThermaStable, a temperature- and voltage-stable Operational Transconductance Amplifier (OTA) in 180nm CMOS for EV Battery Management Systems."
  },

  languages: [
    { name: "English", level: "Professional Proficiency" },
    { name: "Hindi", level: "Native" }
  ]
};
