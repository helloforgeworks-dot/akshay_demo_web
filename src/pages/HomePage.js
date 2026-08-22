import { COMPANY_DATA } from '../data/companyData.js';

export function renderHomePage() {
  return `
    <main class="page-content">
      <!-- 1. HERO SECTION (WHITE & BLUE PRECISION ENGINEERING SPLIT) -->
      <section class="hero-white-blue">
        <div class="hero-cad-grid"></div>

        <div class="container">
          <div class="hero-split-grid">
            <!-- Left Column: Editorial Information Layer -->
            <div>
              <!-- Eyebrow -->
              <div class="hero-eyebrow">
                <span class="hero-eyebrow-top">PUNE, INDIA</span>
                <span class="hero-eyebrow-sub">PRECISION ENGINEERING / CNC MANUFACTURING</span>
              </div>

              <!-- Headline -->
              <h1 class="hero-headline">
                PRECISION<br />
                IS NOT A CLAIM.<br />
                <span class="headline-blue">IT'S A CERTIFICATION.</span>
              </h1>

              <!-- Description -->
              <p class="hero-description">
                Engineering-led CNC machining, precision components and sub-assemblies for demanding automotive, defence, oil & gas and hydraulic applications.
              </p>

              <!-- Rectangular Action Buttons -->
              <div class="hero-cta-group">
                <button type="button" class="btn btn-primary btn-lg trigger-rfq-modal">
                  <span>REQUEST A QUOTE</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>

                <a href="/capabilities" class="btn btn-secondary btn-lg nav-route" data-path="/capabilities">
                  <span>EXPLORE OUR CAPABILITIES</span>
                </a>
              </div>

              <!-- Technical Specification Pill -->
              <div class="hero-meta-strip">
                <div class="hero-meta-item">
                  <span class="pulse-dot"></span>
                  <span>TOLERANCE: <strong>±0.002 MM</strong></span>
                </div>
                <div class="hero-meta-item">
                  <span>METROLOGY: <strong>ZEISS 3D CMM</strong></span>
                </div>
                <div class="hero-meta-item">
                  <span>AUDIT: <strong>IATF & TUV CERTIFIED</strong></span>
                </div>
              </div>
            </div>

            <!-- Right Column: Premium Industrial Photography Showcase -->
            <div>
              <div class="hero-media-frame">
                <img 
                  src="/images/hero_cnc_spindle.jpg" 
                  alt="Primeline Components Multi-Axis Precision CNC Machining Spindle Pune" 
                  class="hero-media-img"
                />
                <div class="hero-media-caption">
                  <div>
                    <div style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--brand-blue); text-transform: uppercase; letter-spacing: 0.1em;">
                      MULTI-AXIS PRECISION MACHINING
                    </div>
                    <div style="font-size: 0.72rem; color: var(--text-secondary);">
                      CHAKAN & BHOSARI MIDC PLANTS · PUNE, INDIA
                    </div>
                  </div>
                  <div style="font-family: var(--font-mono); font-size: 0.7rem; font-weight: 700; color: var(--status-green);">
                    ● ACTIVE PRODUCTION
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. ENGINEERING DATA STRIP (WHITE SPECIFICATION SHEET) -->
      <section class="data-strip-section">
        <div class="container">
          <div class="data-strip-grid">
            <div class="data-strip-item">
              <div class="data-strip-val">
                <span class="counter-number" data-target="25">25</span><span>+</span>
              </div>
              <div class="data-strip-label">YEARS GROUP EXPERIENCE</div>
              <div class="data-strip-sub">Abhang Group Foundation Since 1996</div>
            </div>

            <div class="data-strip-item">
              <div class="data-strip-val">
                <span class="counter-number" data-target="100">100</span><span>+</span>
              </div>
              <div class="data-strip-label">ADVANCED MACHINES</div>
              <div class="data-strip-sub">Multi-Axis CNC & VMC Fleets in Pune</div>
            </div>

            <div class="data-strip-item">
              <div class="data-strip-val">
                <span class="counter-number" data-target="100">100</span><span>+</span>
              </div>
              <div class="data-strip-label">QUALIFIED ENGINEERS</div>
              <div class="data-strip-sub">Dedicated Metrologists & Shopfloor Specialists</div>
            </div>

            <div class="data-strip-item">
              <div class="data-strip-val" style="font-size: clamp(1.5rem, 2.2vw, 2.1rem);">
                ISO 9001:2015
              </div>
              <div class="data-strip-label">CERTIFIED QUALITY SYSTEM</div>
              <div class="data-strip-sub">TUV Austria / IAF KAB / IATF Compliant</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. INTRODUCTION: "BUILT FOR PRECISION" SECTION -->
      <section class="section-py" style="background: #FFFFFF;">
        <div class="container">
          <div class="intro-split-grid">
            <!-- Left Column: Manifesto & Specifications -->
            <div>
              <div class="tech-tag" style="margin-bottom: 1.25rem;">
                ENGINEERING-LED MANUFACTURING
              </div>
              
              <h2 class="intro-statement">
                BUILT FOR PRECISION.<br />
                <span style="color: var(--brand-blue);">ENGINEERED FOR PERFORMANCE.</span>
              </h2>
              
              <p class="intro-narrative">
                Primeline Components combines precision machining, advanced manufacturing infrastructure and disciplined quality systems to deliver critical components for demanding OEM applications.
              </p>
              
              <p class="intro-narrative-sub">
                Our manufacturing process begins with deep Design for Manufacturability (DFM) audits, cutting-force simulation, and metallurgical validation. When machining Inconel valve trims or titanium guidance mounts, there is no margin for thermal drift.
              </p>

              <div class="intro-spec-pills">
                <div class="intro-pill">
                  <div class="intro-pill-key">DIMENSIONAL TOLERANCE</div>
                  <div class="intro-pill-val">±0.002 mm</div>
                  <div class="intro-pill-sub">Zeiss 3D CMM Volumetric Verified</div>
                </div>

                <div class="intro-pill">
                  <div class="intro-pill-key">PROCESS CAPABILITY</div>
                  <div class="intro-pill-val">Cpk ≥ 1.67</div>
                  <div class="intro-pill-sub">Real-Time Shopfloor SPC Tracking</div>
                </div>
              </div>
            </div>

            <!-- Right Column: Precision Component Feature -->
            <div>
              <div class="intro-photo-frame">
                <img 
                  src="/images/precision_machined_flange.jpg" 
                  alt="Precision Machined High Pressure Flange Component Primeline Pune" 
                  class="intro-photo-img"
                />
                <div style="padding: 1.25rem; display: flex; justify-content: space-between; align-items: center; background: #FFFFFF; border-top: 1px solid var(--border-color);">
                  <div>
                    <strong style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--brand-blue); text-transform: uppercase;">
                      PRECISION VALVE TRIM MACHINING
                    </strong>
                    <div style="font-size: 0.72rem; color: var(--text-secondary);">
                      INCONEL 718 / DUPLEX 2205 / ASTM A182
                    </div>
                  </div>
                  <span class="tech-tag" style="font-size: 0.65rem;">RA 0.05 µm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. CAPABILITIES SECTION (LIGHT BLUE-GREY #F4F7FA) -->
      <section class="section-py" style="background: #F4F7FA; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
        <div class="container">
          <div class="section-header">
            <div class="tech-tag" style="margin-bottom: 0.75rem;">MANUFACTURING DIVISIONS</div>
            <h2 class="section-title">ENGINEERING CAPABILITIES</h2>
            <p class="section-desc">
              Six synchronized precision manufacturing divisions operating across Pune's premier industrial corridors.
            </p>
          </div>

          <div class="cap-horizontal-container">
            <!-- Left List (01 to 06) -->
            <div class="cap-list-wrap" id="capability-list">
              <div class="cap-item-row active" data-cap-index="0">
                <div class="cap-item-title-group">
                  <span class="cap-index-num">01</span>
                  <span class="cap-title-text">PRECISION CNC MACHINING</span>
                </div>
                <span class="cap-tag-tolerance">±0.002 MM</span>
              </div>

              <div class="cap-item-row" data-cap-index="1">
                <div class="cap-item-title-group">
                  <span class="cap-index-num">02</span>
                  <span class="cap-title-text">VMC MACHINING</span>
                </div>
                <span class="cap-tag-tolerance">BT50 / 5-AXIS</span>
              </div>

              <div class="cap-item-row" data-cap-index="2">
                <div class="cap-item-title-group">
                  <span class="cap-index-num">03</span>
                  <span class="cap-title-text">SPECIAL PROCESSES</span>
                </div>
                <span class="cap-tag-tolerance">ENP & QPQ</span>
              </div>

              <div class="cap-item-row" data-cap-index="3">
                <div class="cap-item-title-group">
                  <span class="cap-index-num">04</span>
                  <span class="cap-title-text">SUB-ASSEMBLIES & FABRICATION</span>
                </div>
                <span class="cap-tag-tolerance">700 BAR PROOF</span>
              </div>

              <div class="cap-item-row" data-cap-index="4">
                <div class="cap-item-title-group">
                  <span class="cap-index-num">05</span>
                  <span class="cap-title-text">PLASTICS INJECTION MOULDING</span>
                </div>
                <span class="cap-tag-tolerance">50T - 350T</span>
              </div>

              <div class="cap-item-row" data-cap-index="5">
                <div class="cap-item-title-group">
                  <span class="cap-index-num">06</span>
                  <span class="cap-title-text">RAPID PROTOTYPING</span>
                </div>
                <span class="cap-tag-tolerance">5-7 DAY RAMP</span>
              </div>
            </div>

            <!-- Right Interactive Dynamic Preview Stage -->
            <div class="cap-preview-stage" id="capability-preview-stage">
              <div class="cap-preview-img-frame">
                <img 
                  id="cap-preview-img" 
                  src="/images/hero_cnc_spindle.jpg" 
                  alt="Capability Machining Operation" 
                  class="cap-preview-img"
                />
              </div>

              <div class="cap-preview-details">
                <h3 id="cap-preview-title" style="font-size: 1.25rem; font-weight: 800; color: var(--brand-blue);">
                  01 — Precision CNC Machining
                </h3>
                <p id="cap-preview-desc" class="cap-preview-desc">
                  Ultra-precision turning and multi-axis machining for Inconel 718/625, SS316L, Duplex 2205, and Titanium Gr5 under stringent ±0.002 mm dimensional compliance.
                </p>

                <div class="cap-preview-specs">
                  <div><strong style="color: var(--text-primary);">TOLERANCE:</strong> <span id="cap-preview-tol" style="color: var(--brand-blue); font-weight: 700;">±0.002 mm (2 microns)</span></div>
                  <div><strong style="color: var(--text-primary);">EQUIPMENT:</strong> <span id="cap-preview-equip" style="color: var(--text-secondary);">5-Axis Turning Centers, Dual-Spindle CNC Lathes with Live Tooling</span></div>
                </div>

                <div style="margin-top: 0.5rem;">
                  <a href="/capabilities" class="btn btn-secondary btn-sm nav-route" data-path="/capabilities">
                    <span>EXPLORE TECHNICAL SPECS →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. INDUSTRIES SECTION (WHITE BACKGROUND #FFFFFF) -->
      <section class="section-py" style="background: #FFFFFF;">
        <div class="container">
          <div class="section-header">
            <div class="tech-tag" style="margin-bottom: 0.75rem;">SECTOR EXCELLENCE</div>
            <h2 class="section-title">PRECISION ACROSS CRITICAL INDUSTRIES</h2>
            <p class="section-desc">
              Zero tolerance for failure. Our manufactured parts power subsea flow control, defence guidance, automotive fuel injection, and heavy fluid power systems.
            </p>
          </div>

          <div class="industry-grid">
            <!-- 01: AUTOMOTIVE -->
            <div class="industry-tile">
              <div class="industry-tile-media">
                <img src="/images/milled_metal_block.jpg" alt="Automotive Precision Machining" class="industry-tile-img" />
                <div class="industry-badge-float">IATF 16949 / HIGH VOLUME</div>
              </div>
              <div class="industry-tile-body">
                <h3 class="industry-tile-title">AUTOMOTIVE & EV</h3>
                <p class="industry-tile-summary">
                  Safety-critical powertrain, common rail injector bodies, EV motor shafts, and steering linkages with statistical process capability Cpk ≥ 1.67.
                </p>
                <div class="industry-components-list">
                  <div class="industry-list-title">PRECISION PARTS:</div>
                  <ul class="industry-parts-ul">
                    <li>Common Rail High-Pressure Injectors</li>
                    <li>EV Rotor Shafts & Differential Housings</li>
                    <li>Brake Master Cylinder Pistons</li>
                  </ul>
                </div>
                <div class="industry-tile-footer">
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">TOL: ±0.005 MM</span>
                  <a href="/products" class="industry-link-action nav-route" data-path="/products">
                    <span>EXPLORE SEGMENT →</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- 02: OIL & GAS -->
            <div class="industry-tile">
              <div class="industry-tile-media">
                <img src="/images/precision_machined_flange.jpg" alt="Oil and Gas Valve Components Machining" class="industry-tile-img" />
                <div class="industry-badge-float">API 6D / 10,000 PSI</div>
              </div>
              <div class="industry-tile-body">
                <h3 class="industry-tile-title">OIL & GAS (VALVES)</h3>
                <p class="industry-tile-summary">
                  Critical flow-control valve components engineered in Inconel 625/718 and Duplex steels for extreme sour gas, subsea, and offshore service.
                </p>
                <div class="industry-components-list">
                  <div class="industry-list-title">PRECISION PARTS:</div>
                  <ul class="industry-parts-ul">
                    <li>Ball Valve Spheres (Up to Ø350mm)</li>
                    <li>Splined Stem Shafts & Trunnion Blocks</li>
                    <li>Stellite Seat Rings & Choke Trims</li>
                  </ul>
                </div>
                <div class="industry-tile-footer">
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">SPHERICITY: 0.002 MM</span>
                  <a href="/products" class="industry-link-action nav-route" data-path="/products">
                    <span>EXPLORE SEGMENT →</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- 03: DEFENCE & AEROSPACE -->
            <div class="industry-tile">
              <div class="industry-tile-media">
                <img src="/images/hero_cnc_spindle.jpg" alt="Defence Titanium Machining" class="industry-tile-img" />
                <div class="industry-badge-float">MISSION CRITICAL</div>
              </div>
              <div class="industry-tile-body">
                <h3 class="industry-tile-title">DEFENCE & AEROSPACE</h3>
                <p class="industry-tile-summary">
                  High-integrity structural brackets, missile guidance housings, and optical sensor mounts machined from Titanium Grade 5 and Aerospace Aluminium 7075-T6.
                </p>
                <div class="industry-components-list">
                  <div class="industry-list-title">PRECISION PARTS:</div>
                  <ul class="industry-parts-ul">
                    <li>Missile Actuator Housings & Triggers</li>
                    <li>Optical Gimbal Rings & Enclosures</li>
                    <li>Aerospace Structural Brackets</li>
                  </ul>
                </div>
                <div class="industry-tile-footer">
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">TOL: ±0.002 MM</span>
                  <a href="/products" class="industry-link-action nav-route" data-path="/products">
                    <span>EXPLORE SEGMENT →</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- 04: HYDRAULICS -->
            <div class="industry-tile">
              <div class="industry-tile-media">
                <img src="/images/vmc_coolant_spray.jpg" alt="Hydraulic Valve Block Machining" class="industry-tile-img" />
                <div class="industry-badge-float">700 BAR RATED</div>
              </div>
              <div class="industry-tile-body">
                <h3 class="industry-tile-title">HYDRAULICS & FLUID POWER</h3>
                <p class="industry-tile-summary">
                  Precision-honed spool valve bodies, integrated manifold blocks, and pump cartridges built for zero-leakage fluid modulation under hydraulic shock.
                </p>
                <div class="industry-components-list">
                  <div class="industry-list-title">PRECISION PARTS:</div>
                  <ul class="industry-parts-ul">
                    <li>Directional Spool Valve Bodies</li>
                    <li>Complex Multi-Port Manifold Blocks</li>
                    <li>High-Pressure Cylinder Glands</li>
                  </ul>
                </div>
                <div class="industry-tile-footer">
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">CYLINDRICITY: 0.002 MM</span>
                  <a href="/products" class="industry-link-action nav-route" data-path="/products">
                    <span>EXPLORE SEGMENT →</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- 05: TECHNICAL PLASTICS -->
            <div class="industry-tile">
              <div class="industry-tile-media">
                <img src="/images/industrial_spark_cutting.jpg" alt="Technical Plastics Injection Moulding" class="industry-tile-img" />
                <div class="industry-badge-float">25+ YRS POLYMER HERITAGE</div>
              </div>
              <div class="industry-tile-body">
                <h3 class="industry-tile-title">PLASTICS MOULDING</h3>
                <p class="industry-tile-summary">
                  Rooted in our 1996 Raja Plastics foundation, moulding high-performance PEEK, POM (Delrin), Nylon 66 GF30, and brass-inserted sensor enclosures.
                </p>
                <div class="industry-components-list">
                  <div class="industry-list-title">PRECISION PARTS:</div>
                  <ul class="industry-parts-ul">
                    <li>Under-the-Hood Sensor Housings</li>
                    <li>Polymer Gears & Anti-Backlash Bushings</li>
                    <li>Brass-Inserted Connectors & Overmoulds</li>
                  </ul>
                </div>
                <div class="industry-tile-footer">
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">TOL: ±0.010 MM</span>
                  <a href="/products" class="industry-link-action nav-route" data-path="/products">
                    <span>EXPLORE SEGMENT →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. INFRASTRUCTURE SECTION (WHITE + DEEP BLUE PANEL #0B3A66) -->
      <section class="section-py" style="background: #F4F7FA; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
        <div class="container">
          <div class="infra-white-blue-wrap">
            <!-- Left White Column: Narrative & Overview -->
            <div class="infra-white-col">
              <div class="tech-tag" style="margin-bottom: 1.25rem;">
                PRECISION MANUFACTURING CAMPUS
              </div>
              <h2 class="infra-headline">
                100+ MACHINES.<br />
                <span style="color: var(--brand-blue);">ONE ENGINEERING STANDARD.</span>
              </h2>
              
              <p style="font-size: 0.98rem; color: var(--text-secondary); line-height: 1.75; margin-bottom: 2rem; max-width: 540px;">
                Strategically distributed across 80,000+ sq. ft. of climate-controlled shopfloors in Pune — featuring 5-axis turning centers, heavy horizontal boring, automated cleanroom assembly, and a Class-10,000 Zeiss metrology laboratory.
              </p>

              <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
                <a href="/infrastructure" class="btn btn-primary nav-route" data-path="/infrastructure">
                  <span>EXPLORE INFRASTRUCTURE →</span>
                </a>
                <button type="button" class="btn btn-secondary trigger-tour-modal">
                  <span>BOOK A FACILITY VISIT</span>
                </button>
              </div>
            </div>

            <!-- Right Deep Blue Panel: Plant Specifications -->
            <div class="infra-blue-panel">
              <div class="infra-locations-strip">
                <div class="infra-location-chip"><span class="marker">●</span> CHAKAN MIDC</div>
                <div class="infra-location-chip"><span class="marker">●</span> BHOSARI MIDC</div>
                <div class="infra-location-chip"><span class="marker">●</span> TALEGAON MIDC</div>
                <div class="infra-location-chip"><span class="marker">●</span> PUNE BELT</div>
              </div>

              <div class="infra-plant-cards">
                <div class="infra-plant-item">
                  <div class="infra-plant-name">Plant 1 — Chakan MIDC (35,000 sq. ft.)</div>
                  <div class="infra-plant-details">Heavy multi-axis CNC lathes, BT50 VMCs, Inconel machining bay, and 700-bar hydrostatic pressure proofing rig.</div>
                </div>

                <div class="infra-plant-item">
                  <div class="infra-plant-name">Plant 2 — Bhosari MIDC (25,000 sq. ft.)</div>
                  <div class="infra-plant-details">High-volume automotive common rail injector lines, hydraulic spool micro-honing cells, and cleanroom sub-assembly.</div>
                </div>

                <div class="infra-plant-item">
                  <div class="infra-plant-name">Plant 3 — Talegaon & Shivleela (20,000 sq. ft.)</div>
                  <div class="infra-plant-details">Precision plastics mouldroom, EDM wire-cut division, and our pioneering women-led metrology and QA training academy.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. QUALITY / CERTIFICATION SECTION (CLEAN WHITE) -->
      <section class="section-py" style="background: #FFFFFF;">
        <div class="container">
          <div class="section-header center">
            <div class="tech-tag" style="margin-bottom: 0.75rem;">QUALITY ARCHITECTURE</div>
            <h2 class="section-title">PRECISION, VERIFIED.</h2>
            <p class="section-desc">
              Inspection and testing systems integrated directly into our manufacturing workflow. Every batch is certified with full metallurgical and 3D coordinate traceability.
            </p>
          </div>

          <div class="quality-cert-grid">
            <div class="cert-institution-card">
              <div class="cert-badge-mark">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 class="cert-code-title">ISO 9001:2015</h3>
              <p class="cert-scope-text">
                Certified Quality Management for CNC turning, VMC milling, and plastic moulded sub-assemblies.
              </p>
              <div class="cert-status-tag">● TUV AUSTRIA AUDITED</div>
            </div>

            <div class="cert-institution-card">
              <div class="cert-badge-mark">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 class="cert-code-title">IATF 16949</h3>
              <p class="cert-scope-text">
                Automotive OEM compliance for safety-critical powertrain, fuel delivery, and precision transmission parts.
              </p>
              <div class="cert-status-tag">● CPK ≥ 1.67 COMPLIANT</div>
            </div>

            <div class="cert-institution-card">
              <div class="cert-badge-mark">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 class="cert-code-title">IAF & KAB</h3>
              <p class="cert-scope-text">
                International Accreditation Forum recognition ensuring global validity of calibration and QA conformity.
              </p>
              <div class="cert-status-tag">● GLOBAL RECOGNITION</div>
            </div>

            <div class="cert-institution-card">
              <div class="cert-badge-mark">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 class="cert-code-title">TUV AUSTRIA</h3>
              <p class="cert-scope-text">
                Rigorous European safety compliance, pressure vessel integrity proofing, and metallurgical certification.
              </p>
              <div class="cert-status-tag">● ACTIVE & VERIFIED</div>
            </div>
          </div>

          <div style="text-align: center; margin-top: 3rem;">
            <a href="/infrastructure" class="btn btn-secondary btn-lg nav-route" data-path="/infrastructure">
              <span>EXPLORE QUALITY & METROLOGY LAB →</span>
            </a>
          </div>
        </div>
      </section>

      <!-- 8. VALUE ADDITION SECTION (LIGHT BLUE BACKGROUND #E8F1F8) -->
      <section class="section-py" style="background: var(--bg-light-blue); border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
        <div class="container">
          <div class="section-header center">
            <div class="tech-tag" style="margin-bottom: 0.75rem; background: #FFFFFF;">VALUE ADDITION</div>
            <h2 class="section-title">INTEGRATED MANUFACTURING SERVICES</h2>
            <p class="section-desc">
              From early DFM engineering consultation to certified direct-to-line kitting and buffer stocking.
            </p>
          </div>

          <div class="value-add-grid">
            <div class="value-add-card">
              <div class="value-add-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <h3 class="value-add-title">Assembly & Kitting</h3>
              <p class="value-add-desc">Sub-assemblies tested and packed ready for direct OEM production lines.</p>
            </div>

            <div class="value-add-card">
              <div class="value-add-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 class="value-add-title">JIT Delivery</h3>
              <p class="value-add-desc">KanBan pull systems and managed inventory at our Pune facilities.</p>
            </div>

            <div class="value-add-card">
              <div class="value-add-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
              <h3 class="value-add-title">Logistics & VCI</h3>
              <p class="value-add-desc">Multi-layer anti-corrosion barrier packing for rust-free export transit.</p>
            </div>

            <div class="value-add-card">
              <div class="value-add-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3 class="value-add-title">DFM Support</h3>
              <p class="value-add-desc">3D CAD design review to optimize cycle times and material yields.</p>
            </div>

            <div class="value-add-card">
              <div class="value-add-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 class="value-add-title">R&D Machining</h3>
              <p class="value-add-desc">Fast 5 to 7-day turnaround for critical first-article samples.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 9. FINAL CTA SECTION (DEEP ENGINEERING BLUE #0B3A66) -->
      <section class="final-cta-section">
        <div class="final-cta-cad-lines"></div>

        <div class="container">
          <div class="final-cta-content">
            <div class="tech-tag" style="margin-bottom: 1.25rem; background: rgba(255, 255, 255, 0.12); border-color: rgba(255, 255, 255, 0.25); color: #FFFFFF;">
              START TECHNICAL COLLABORATION
            </div>
            
            <h2 class="final-cta-headline">
              READY TO ENGINEER<br />
              THE NEXT COMPONENT?
            </h2>

            <p class="final-cta-desc">
              Talk to our engineering team about your next precision manufacturing requirement. Send your 2D/3D drawings for confidential DFM review and detailed commercial quotation within 24 hours.
            </p>

            <div style="display: flex; flex-wrap: wrap; gap: 1.25rem; align-items: center;">
              <button type="button" class="btn btn-white btn-lg trigger-rfq-modal">
                <span>REQUEST A QUOTE</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>

              <a href="tel:+919130303006" class="btn btn-white-outline btn-lg">
                <span>TALK TO OUR ENGINEERS →</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}
