/**
 * PRIMELINE COMPONENTS PVT LTD (PLC)
 * Master Brand Data & Technical Specifications
 * Part of the Abhang Group — Pune, India
 */

export const COMPANY_DATA = {
  name: "Primeline Components Pvt. Ltd.",
  shortName: "PLC",
  group: "Abhang Group",
  tagline: "Precision Engineering & CNC Machining",
  positioning: "Precision is not a claim here — it's a certification.",
  heroSubtext: "Engineering-led CNC machining, vertical milling, sub-assemblies, and high-precision component manufacturing for global aerospace, defence, oil & gas, and automotive OEMs.",
  
  stats: [
    { value: 25, suffix: "+", label: "Years Collective Group Experience", sub: "Since 1996 foundation" },
    { value: 100, suffix: "+", label: "Advanced CNC & VMC Machines", sub: "Multi-axis fleet across Pune" },
    { value: 100, suffix: "+", label: "Qualified Engineers & Metrologists", sub: "Dedicated QA & shopfloor" },
    { value: 4, suffix: " Global", label: "Quality Certifications", sub: "ISO 9001, IATF, IAF, TUV" },
    { value: 2, prefix: "±", suffix: " µm", label: "Machining Tolerance Capability", sub: "Strict dimensional compliance" }
  ],

  certifications: [
    {
      id: "iso-9001",
      code: "ISO 9001:2015",
      title: "Quality Management Systems",
      issuer: "TUV Austria / IAF KAB Accredited",
      scope: "Manufacture and Supply of Precision Machined Components, Sub-Assemblies, and Plastic Moulded Parts.",
      validity: "Active & Verified",
      badge: "ISO 9001:2015 CERTIFIED"
    },
    {
      id: "iatf-16949",
      code: "IATF 16949 Compliant",
      title: "Automotive Quality Management",
      issuer: "Automotive OEM Standards",
      scope: "Precision powertrain, fuel injection bodies, transmission shafts, and safety-critical automotive parts.",
      validity: "Active & Audited",
      badge: "IATF AUTOMOTIVE CERTIFIED"
    },
    {
      id: "tuv-austria",
      code: "TUV AUSTRIA",
      title: "European Quality & Safety Standards",
      issuer: "TUV AUSTRIA CERT GMBH",
      scope: "High-pressure valve trim, oil & gas components, pressure testing, and hydrostatic integrity.",
      validity: "Active & Verified",
      badge: "TUV AUSTRIA APPROVED"
    },
    {
      id: "iaf-kab",
      code: "IAF & KAB Recognition",
      title: "International Accreditation Forum",
      issuer: "Multilateral Recognition Arrangement (MLA)",
      scope: "Global mutual recognition of metrology and conformity assessment standards.",
      validity: "Global Standard",
      badge: "IAF / KAB ACCREDITED"
    }
  ],

  heritageTimeline: [
    {
      year: "1996",
      title: "Raja Plastics & Engineering",
      subtitle: "Foundation of Precision Tooling",
      description: "Established in Pune's emerging industrial belt with specialized focus on high-tolerance plastic injection moulding and precision tool manufacturing for industrial switchgear and early automotive tier-1 suppliers.",
      highlight: "Inception of Group Manufacturing Excellence"
    },
    {
      year: "2010",
      title: "Abhang Engineering",
      subtitle: "Expansion into Heavy CNC & VMC Machining",
      description: "Scaled manufacturing infrastructure with multi-axis CNC turning centers and vertical machining centers (VMC). Expanded into high-pressure oil & gas valve components, hydraulic manifolds, and export-grade sub-assemblies.",
      highlight: "Entry into Oil & Gas and Global Export Supply"
    },
    {
      year: "2018",
      title: "Shivleela Engineering Works",
      subtitle: "Pioneering Women's Skilled-Employment Initiative",
      description: "Dedicated production facility and training academy created specifically to train and employ women engineers and machine operators in precision CNC programming, QA metrology, and high-precision assembly.",
      highlight: "Social Impact & Inclusive Precision Engineering"
    },
    {
      year: "2025",
      title: "Primeline Components Pvt Ltd (PLC)",
      subtitle: "Unified High-Precision Manufacturing Powerhouse",
      description: "Consolidated group strengths under Primeline Components Pvt Ltd to create a state-of-the-art integrated precision manufacturing campus across Chakan, Bhosari, and Talegaon MIDC with 100+ CNC machines and Tier-1 global certification readiness.",
      highlight: "Global Engineering-Led Tier-1 Supplier"
    }
  ],

  capabilities: [
    {
      id: "cnc-machining",
      title: "Precision CNC Machining",
      tagline: "Ultra-precision turning and multi-axis machining",
      tolerance: "±0.002 mm (2 microns)",
      materials: "Inconel 718/625, SS316L, Duplex 2205, Titanium Gr5, Brass, Alloy Steel 4140/4340",
      equipment: "5-Axis Turning Centers, Dual-Spindle CNC Lathes with Live Tooling, Swiss-Type Automatic Lathes",
      features: [
        "Simultaneous multi-axis complex geometry profiling",
        "High surface finish down to Ra 0.1 µm",
        "Bar capacity from Ø3mm up to Ø450mm",
        "Integrated high-pressure through-coolant tooling for deep bore accuracy",
        "100% in-process probe inspection integration"
      ],
      description: "Our high-precision CNC turning and machining centers are configured for zero-backlash, high-rigidity processing of refractory metals, exotic superalloys, and structural steels under stringent tolerances."
    },
    {
      id: "vmc-milling",
      title: "Vertical Machining Centers (VMC)",
      tagline: "High-speed 4-axis & 5-axis vertical milling",
      tolerance: "±0.005 mm (5 microns)",
      materials: "Aerospace Grade Aluminum 7075-T6, Tool Steels, Forged Steel, SS304/316, Cast Iron",
      equipment: "High-Speed BT40/BT50 VMC Fleet, 4th Axis Rotary Tables, Dual Pallet Changers",
      features: [
        "Travel envelopes up to X: 1200mm, Y: 600mm, Z: 650mm",
        "Rigid tapping and high-torque face milling for heavy valve manifolds",
        "High-RPM spindle (12,000 to 20,000 RPM) for mirror contour finishes",
        "Thermal compensation algorithms for uninterrupted 24/7 accuracy",
        "Precision multi-cavity tooling for aerospace structural brackets"
      ],
      description: "Equipped with high-rigidity BT-50 and high-speed BT-40 spindle configurations, our VMC division handles prismatic parts, multi-port hydraulic valve blocks, and complex defence housings with uncompromised repeatability."
    },
    {
      id: "special-processes",
      title: "Special Processes & Surface Engineering",
      tagline: "Engineered coatings, heat treatment & passivation",
      tolerance: "Micron-level coating thickness control",
      materials: "Electroless Nickel (ENP), Hard Anodizing, Black Oxide, Case Hardening, QPQ Nitriding",
      equipment: "Automated Plating Baths, Atmosphere-Controlled Heat Treat Furnaces, Ultrasonic Degreasing Lines",
      features: [
        "Electroless Nickel Plating (High Phosphorus / Medium Phosphorus)",
        "MIL-A-8625 Type III Hard Anodizing (Class 1 & 2)",
        "Induction hardening, vacuum hardening, and stress-relieving cycles",
        "Passivation per ASTM A967 for severe marine and chemical service",
        "NACE MR0175 compliant hardness control for sour gas oilfield service"
      ],
      description: "Qualified special processing ensuring high wear resistance, anti-galling properties, corrosion immunity in aggressive offshore environments, and certified hardness gradients."
    },
    {
      id: "sub-assemblies",
      title: "Sub-Assemblies & Precision Fabrication",
      tagline: "Integrated mechanical assembly, testing & kitting",
      tolerance: "100% functional leak-rate and torque verification",
      materials: "Full multi-material mechanical assemblies (Metals + Elastomers + Hardware)",
      equipment: "Torque-Controlled Assembly Benches, Cleanroom Assembly Zone, Hydrostatic Test Benches (up to 700 bar)",
      features: [
        "Sub-assembly of valve trims, hydraulic spools, and automotive actuators",
        "Precision orbital riveting, press-fitting, and laser tack welding",
        "Helium leak testing and hydrostatic pressure proofing",
        "Serialized assembly tracing with batch QR codes and test cert logs",
        "Direct-to-line kitting with VCI corrosion protective packaging"
      ],
      description: "Delivering fully verified sub-assemblies directly to OEM assembly lines, eliminating client-side assembly overhead, testing bottlenecks, and inventory complexities."
    },
    {
      id: "plastic-moulding",
      title: "Plastics Injection Moulding",
      tagline: "Engineering polymers & precision micro-moulding",
      tolerance: "±0.010 mm",
      materials: "PEEK, POM (Delrin), Glass-Filled Nylon (PA66-GF30), PPS, ABS, Polycarbonate",
      equipment: "All-Electric Precision Injection Moulding Machines (50T to 350T), Dehumidifying Dryers",
      features: [
        "Rooted in our 1996 Raja Plastics heritage",
        "Insert moulding and overmoulding with brass/steel threaded bushings",
        "High-temperature engineering polymers for automotive under-hood applications",
        "Precision multi-cavity hot-runner moulds built in-house",
        "Optical dimensional verification of polymer shrinkage and warpage"
      ],
      description: "Decades of polymer tooling expertise enable us to mould complex, dimensionally stable engineering plastic components with tight tolerance control and exceptional mechanical integrity."
    },
    {
      id: "rapid-prototyping",
      title: "Rapid Prototyping & R&D Machining",
      tagline: "Fast-turnaround pilot batches & DFM engineering",
      tolerance: "Direct-from-CAD pilot precision",
      materials: "Full range of production-intent alloys and polymers",
      equipment: "Dedicated Pilot R&D 5-Axis Machine Cells, 3D Optical Metrology Scanners",
      features: [
        "5 to 7-day turnaround for critical first-article samples",
        "Design for Manufacturability (DFM) optimization feedback reports",
        "Complete CMM inspection report & material test certificates (MTC 3.1)",
        "Pre-production PPAP Level 3 documentation support",
        "Zero minimum order quantity for engineering validation phases"
      ],
      description: "Bridging the gap between conceptual CAD design and mass production with agile R&D machining, metallurgical consultation, and tolerance feasibility validation."
    }
  ],

  productSegments: [
    {
      id: "oil-gas",
      title: "Oil & Gas (Valve Components)",
      badge: "High-Pressure / Offshore / API 6D",
      summary: "Critical flow-control components engineered for extreme temperatures, sour gas, and deepwater high-pressure environments.",
      tolerances: "±0.003 mm | Sphericity 0.002 mm",
      materials: "Inconel 625/718, Duplex 2205, Super Duplex 2507, SS316/316L, Monel 400, F6NM",
      parts: [
        "Ball Valve Balls (Hollow & Solid Spheres up to Ø350mm)",
        "Stem Shafts & Splined Drive Rods",
        "Trunnion Blocks & Upper/Lower Bearing Supports",
        "Metal-to-Metal Seat Rings with Stellite Hardfacing",
        "Choke Valve Trim Assemblies & Cages",
        "Flanged Bonnet Bodies & High-Pressure Glands"
      ],
      specs: {
        pressureRating: "Up to ANSI Class 2500 / API 10,000 PSI",
        finish: "Ra 0.05 µm mirror lap finish on ball seating faces",
        testing: "100% Hydrostatic Proof Testing + NDT Dye Penetrant / Ultrasonic",
        compliance: "NACE MR0175 / ISO 15156 Sour Service"
      }
    },
    {
      id: "defence",
      title: "Defence & Aerospace Parts",
      badge: "High-Integrity / Mission-Critical",
      summary: "Exacting structural, guidance, and optical mounting components manufactured under strict confidentiality and zero-tolerance quality gates.",
      tolerances: "±0.002 mm (2 microns)",
      materials: "Titanium Grade 5 (Ti-6Al-4V), Aerospace Aluminium 7075-T6/2024, Maraging Steels, 17-4PH",
      parts: [
        "Missile Guidance & Actuator Housings",
        "Precision Optical & Thermal Sensor Mounts",
        "Aerospace Structural Brackets & Titanium Fittings",
        "Fuse Bodies & High-Precision Mechanical Triggers",
        "Gimbal Rings & Gyroscope Mounting Enclosures",
        "Hermetic Electronic Enclosures & RF Filter Casing"
      ],
      specs: {
        certification: "Full Material Traceability (EN 10204 3.1 & 3.2)",
        inspection: "100% Zeiss CMM 3D Coordinate Verification",
        treatment: "Hard Anodizing MIL-A-8625 Type III + Chemical Conversion",
        standards: "MIL-STD-810 & Aerospace Conformance"
      }
    },
    {
      id: "automobile",
      title: "Automobile & EV Powertrain",
      badge: "IATF 16949 / High-Volume Precision",
      summary: "Safety-critical automotive powertrain, fuel injection, transmission, and braking components produced with statistical process capability (Cpk > 1.67).",
      tolerances: "±0.005 mm | Concentricity 0.004 mm",
      materials: "Forged Alloy Steel 8620/4140, Case-Hardening Steels, Aluminum ADC12, Free Cutting Steels",
      parts: [
        "Common Rail High-Pressure Injector Bodies",
        "Transmission Input & Counter Shafts",
        "Steering Column Linkages & Universal Joints",
        "EV Electric Motor Rotor Shafts & Housings",
        "Brake Master Cylinder Pistons & Manifolds",
        "Engine Turbocharger Bearing Housings"
      ],
      specs: {
        ppap: "PPAP Level 3, PSW, Control Plans, FMEA, MSA",
        spc: "Real-time SPC tracking with Cpk ≥ 1.67",
        volume: "Batch sizes from 1,000 to 500,000 pcs/year",
        cleanliness: "VDA 19 / ISO 16232 Millipore cleanliness testing"
      }
    },
    {
      id: "hydraulic",
      title: "Hydraulic & Fluid Power",
      badge: "Zero-Leakage / 700 Bar Rated",
      summary: "Precision-honed spool valves, hydraulic manifold blocks, and cylinder components engineered for smooth fluid modulation under extreme hydraulic shock.",
      tolerances: "±0.003 mm | Bore Cylindricity 0.002 mm",
      materials: "Hydraulic Grade Ductile Iron (EN-GJS-400/500), Carbon Steel, Brass CW614N, Aluminum 6061-T6",
      parts: [
        "Proportional Directional Spool Valve Bodies",
        "Integrated Hydraulic Manifold Blocks (Complex Internal Porting)",
        "High-Pressure Cylinder Glands & End Caps",
        "Hydraulic Pump Cartridges & Cam Rings",
        "Quick-Release Hydraulic Coupling Bodies",
        "Check Valve Poppets & Balanced Relief Trim"
      ],
      specs: {
        honing: "Precision micro-honing of spool bores (Ra 0.15 µm)",
        pressure: "Proof tested up to 700 bar hydraulic pressure",
        clearance: "Controlled radial clearance 3 - 6 microns between spool and bore",
        cleanliness: "ISO 4406 Oil Cleanliness Code Compliance"
      }
    },
    {
      id: "plastics",
      title: "Plastics Moulding Services",
      badge: "25+ Yrs Polymer Heritage / Raja Plastics",
      summary: "High-precision technical plastic injection moulding, insert moulding, and specialized engineered polymer parts for automotive, electronics, and industrial OEMs.",
      tolerances: "±0.010 mm",
      materials: "PEEK, POM (Delrin), Nylon 66 GF30, Polycarbonate (PC), PPS, PBT, ABS",
      parts: [
        "Automotive Under-the-Hood Sensor Housings",
        "Electrical Switchgear Housings & Contact Carriers",
        "Precision Polymer Gears & Anti-Backlash Bushings",
        "Brass-Inserted Industrial Connectors & Overmoulds",
        "Fluid Flowmeter Impellers & Water Meter Bodies",
        "Medical Device Structural Enclosures"
      ],
      specs: {
        machines: "All-electric 50T to 350T injection moulding presses",
        mouldmaking: "In-house tooling room with EDM wire-cut and CNC electrode milling",
        quality: "Optical profile projector & coordinate measurement of polymer shrinkage",
        heritage: "Originating from our 1996 Raja Plastics foundation"
      }
    }
  ],

  infrastructure: {
    overview: "Our precision manufacturing infrastructure is strategically situated across the Pune industrial belt (Chakan, Bhosari, and Talegaon MIDC) — the heart of India's automotive and heavy engineering manufacturing ecosystem.",
    facilities: [
      {
        name: "Plant 1 — Chakan MIDC",
        focus: "Heavy CNC Machining, VMC & High-Pressure Oil & Gas Component Center",
        area: "35,000+ sq. ft. Temperature-Controlled Machining Hall",
        fleet: "Multi-Axis CNC Lathes, BT50 VMCs, Heavy Horizontals, Hydrostatic Pressure Rig"
      },
      {
        name: "Plant 2 — Bhosari MIDC",
        focus: "High-Volume Automotive, Hydraulic Spools & Specialized Sub-Assemblies",
        area: "25,000+ sq. ft. Clean Shopfloor & Automated Kitting Line",
        fleet: "High-Speed Dual-Spindle CNCs, Swiss Lathes, Dedicated Cleanroom Assembly Zone"
      },
      {
        name: "Plant 3 — Talegaon / Shivleela Unit",
        focus: "Plastics Injection Moulding, Rapid Tooling & Women-Led Precision QA Center",
        area: "20,000+ sq. ft. Toolroom & Metrology Center",
        fleet: "Electric Injection Presses (50T - 350T), EDM Wire-cut, Optical Metrology Suites"
      }
    ],
    qualityLab: {
      headline: "In-House Metrology & Quality Assurance Laboratory",
      description: "Our Class-10,000 temperature-controlled metrology laboratory (20°C ±0.5°C) operates under strict calibration regimes traceable to national and international standards.",
      instruments: [
        {
          name: "Zeiss 3D Coordinate Measuring Machine (CMM)",
          metric: "Accuracy: 0.9 µm + L/350",
          purpose: "Full 3D volumetric geometric dimensioning and tolerancing (GD&T) verification"
        },
        {
          name: "Optical Profile Projector & Vision Measuring System",
          metric: "Magnification: 10x to 100x",
          purpose: "Non-contact micro-feature inspection, thread profiles, and radii contours"
        },
        {
          name: "Mitutoyo Surface Roughness Tester (Surftest)",
          metric: "Resolution: Ra 0.01 µm",
          purpose: "Critical surface finish validation on sealing faces, bores, and spools"
        },
        {
          name: "Trimos Digital 2D Height Gauges",
          metric: "Repeatability: 1 µm",
          purpose: "Rapid precision shopfloor and in-process height and step measurement"
        },
        {
          name: "Optical Emission Spectrometer & Hardness Testers",
          metric: "Rockwell HRC, Brinell HB, Vickers HV",
          purpose: "100% positive material identification (PMI) and core/case hardness confirmation"
        },
        {
          name: "Hydrostatic & Pneumatic Test Rig",
          metric: "Pressure capability: Up to 700 Bar (10,150 PSI)",
          purpose: "Proof pressure and bubble-tight zero-leakage testing for oil & gas and hydraulic trims"
        }
      ]
    },
    qaWorkflow: [
      {
        step: "01",
        title: "IQC — Incoming Material Quality Control",
        desc: "100% Positive Material Identification (PMI Spectrometry), ultrasonic flaw detection, and verification of Mill Test Certificates (MTC EN 10204 3.1)."
      },
      {
        step: "02",
        title: "IPQC — In-Process Statistical Control",
        desc: "First-piece signoff, continuous shopfloor inspection every 30 minutes, digital vernier wireless data logging, and real-time SPC Cpk monitoring."
      },
      {
        step: "03",
        title: "Metrology Lab 3D GD&T Validation",
        desc: "100% Zeiss CMM verification for critical datum alignments, roundness, cylindricity, perpendicularity, and true position."
      },
      {
        step: "04",
        title: "FQC & Hydrostatic / Functional Testing",
        desc: "Surface roughness (Ra), coating thickness measurement, pressure proof testing, and final visual inspection under 500-lux magnification."
      },
      {
        step: "05",
        title: "VCI Packaging & Certificate Dispatch",
        desc: "Ultrasonic cleaning, VCI anti-corrosion barrier wrapping, custom foam-cushioned crates, and dispatch with serialized inspection documentation."
      }
    ]
  },

  valueAddition: [
    {
      title: "DFM & Value Engineering Consultation",
      desc: "Our senior tooling and machining engineers review your 3D CAD models to recommend geometric optimizations, reduce cycle times, eliminate tight-tolerance cost drivers, and optimize raw material yields."
    },
    {
      title: "Mechanical Sub-Assembly & Precision Kitting",
      desc: "We supply complete multi-component kits and tested sub-assemblies (bearings, seals, fasteners, springs, and machined blocks) ready for direct integration into your final product lines."
    },
    {
      title: "JIT Delivery & Buffer Stocking for Tier-1 OEMs",
      desc: "We offer KanBan pull systems, vendor-managed inventory (VMI), and strategic buffer stocks at our Pune facilities to ensure zero assembly downtime for domestic and export partners."
    },
    {
      title: "Export-Grade VCI Packaging & Sea-Worthy Crating",
      desc: "Specialized ultrasonic wash and degreasing followed by multi-layer Volatile Corrosion Inhibitor (VCI) sealed packaging and moisture-sealed sea-worthy wooden crating for rust-free overseas transit."
    },
    {
      title: "Rapid Tooling & Prototype-to-Production Ramp",
      desc: "Integrated tooling design room allows us to turn around prototype tooling in 7-10 days, followed by structured APQP/PPAP Level 3 submission for high-volume production approval."
    }
  ],

  careers: {
    headline: "Engineered by Masters. Driven by Purpose.",
    intro: "At Primeline Components (PLC), precision engineering is a discipline and a craft. As part of the Abhang Group, we foster a culture of technical rigor, continuous apprenticeship, and equal opportunity.",
    shivleelaStory: "Through our Shivleela Engineering initiative, we take deep pride in pioneering specialized CNC training and skilled shopfloor employment for women engineers, CMM programmers, and metrology technicians across the Pune industrial belt.",
    openRoles: [
      {
        id: "cnc-vmc-programmer",
        title: "Senior CNC & 5-Axis VMC Programmer",
        department: "Production & CAM Engineering",
        location: "Chakan MIDC, Pune",
        experience: "5 - 8 Years",
        skills: "Mastercam, Siemens NX, Fanuc / Heidenhain controls, multi-axis fixture design",
        description: "Develop optimized toolpaths, reduce cycle times, design custom fixtures, and lead zero-defect machining for aerospace and oil & gas valve components."
      },
      {
        id: "cmm-qa-lead",
        title: "Quality Assurance Lead & Zeiss CMM Metrologist",
        department: "Quality & Metrology Lab",
        location: "Chakan / Bhosari MIDC, Pune",
        experience: "4 - 7 Years",
        skills: "Zeiss Calypso software, GD&T ASME Y14.5, MSA, SPC, PPAP Level 3",
        description: "Lead metrology lab inspection schedules, program automated CMM inspection routines, manage calibration registers, and interface directly with OEM auditors."
      },
      {
        id: "tooling-die-engineer",
        title: "Plastics Injection Mould & Tooling Engineer",
        department: "Toolroom & Polymers (Raja Plastics Division)",
        location: "Talegaon MIDC, Pune",
        experience: "3 - 6 Years",
        skills: "Mould design, SolidWorks, EDM wire-cut programming, polymer shrinkage analysis",
        description: "Design and maintain high-precision multi-cavity injection moulds for automotive sensors and high-performance engineering plastics (PEEK/POM)."
      },
      {
        id: "graduate-trainee-shivleela",
        title: "Graduate Engineer Trainee (GET) — Precision Machining & QA",
        department: "Shivleela Women's Skilled Engineering Initiative",
        location: "Pune (All Units)",
        experience: "Freshers / 0 - 2 Years (B.E. / B.Tech / Diploma in Mechanical)",
        skills: "Engineering drawing reading, vernier/micrometer handling, enthusiasm for precision manufacturing",
        description: "Comprehensive 12-month hands-on apprenticeship covering CNC machine operation, metrology lab measurement, CAD/CAM fundamentals, and ISO/IATF quality systems."
      }
    ]
  },

  leadership: {
    message: "When you build components for a subsea valve, an aerospace guidance system, or a high-pressure common rail engine, precision is not a talking point. A deviation of two microns is the difference between seamless operation and catastrophic failure. At Primeline Components and across the Abhang Group, our entire culture — from our machine operators and CMM metrologists to our executive management — is built around uncompromising manufacturing discipline. We have invested in the finest multi-axis machinery, world-class Zeiss metrology, and a proud heritage dating back to 1996 to serve as the most trusted manufacturing partner to global OEMs.",
    messageAuthor: "Executive Board & Managing Leadership",
    messageRole: "Primeline Components Pvt. Ltd. (Abhang Group)",
    pillars: [
      { title: "Zero Defect Philosophy", desc: "Instilling error-proofing (Poka-Yoke) and statistical process control across every single stage of production." },
      { title: "Engineering-First Mindset", desc: "Led by engineers who understand metallurgy, cutting dynamics, and GD&T inside out." },
      { title: "Social Empowerment", desc: "Championing women in precision manufacturing through the Shivleela Engineering Works initiative." },
      { title: "Make in India Global Ambition", desc: "Delivering world-class precision machined parts from Pune to Tier-1 OEMs across Europe, North America, and Asia." }
    ]
  },

  contact: {
    email: "sales@primelinecomponents.in",
    supportEmail: "info@primelinecomponents.in",
    phones: [
      { number: "+91 9130303006", label: "Direct Sales & Engineering RFQ" },
      { number: "+91 8956462142", label: "Plant Operations & Technical Support" }
    ],
    locations: [
      {
        name: "Head Office & Machining Plant",
        address: "Plot No. C-18, Chakan Industrial Area, Phase II, MIDC, Pune - 410501, Maharashtra, India",
        type: "Heavy CNC / VMC & Metrology Center"
      },
      {
        name: "Bhosari Unit",
        address: "Sector 10, PCNTDA, Bhosari MIDC, Pune - 411026, Maharashtra, India",
        type: "Automotive Precision & Sub-Assemblies"
      },
      {
        name: "Talegaon & Shivleela Unit",
        address: "Talegaon Industrial Area, MIDC, Pune - 410507, Maharashtra, India",
        type: "Plastics Moulding & Skilled Training Center"
      }
    ],
    hours: "Monday - Saturday: 08:30 - 18:30 IST (Plant operates 24/7 in 3 Shifts)",
    makeInIndia: true
  }
};
