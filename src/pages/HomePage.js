import { COMPANY_DATA } from '../data/companyData.js';

export function renderHomePage() {
  return `
    <main class="page-content">
      <!-- 1. LUXURY HERO SECTION -->
      <section class="hero-section" style="position: relative; min-height: 92vh; display: flex; align-items: center; overflow: hidden; border-bottom: 1px solid var(--steel-border);">
        <canvas id="hero-tech-canvas" style="position: absolute; inset: 0; width: 100%; height: 100%; z-index: 1;"></canvas>
        <div class="grid-bg-overlay"></div>

        <div class="container" style="position: relative; z-index: 2; padding-top: 3rem; padding-bottom: 3rem;">
          <div style="max-width: 920px;">
            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; margin-bottom: 1.5rem;">
              <div class="tech-tag">
                <span class="pulse-dot"></span> PUNE PRECISION MANUFACTURING HUB
              </div>
              <div class="tech-tag neutral">
                ABHANG GROUP · 25+ YEARS HERITAGE
              </div>
              <div class="tech-tag success">
                ±0.002 MM TOLERANCE CERTIFIED
              </div>
            </div>

            <h1 style="font-size: clamp(2.6rem, 5.8vw, 4.8rem); line-height: 1.06; margin-bottom: 1.5rem; text-transform: uppercase;">
              Precision is not a claim here — <span style="color: var(--accent-bronze); font-style: normal;">it's a certification.</span>
            </h1>

            <p style="font-size: clamp(1.05rem, 1.6vw, 1.25rem); color: var(--text-secondary); max-width: 740px; margin-bottom: 2.5rem; line-height: 1.7;">
              ${COMPANY_DATA.heroSubtext}
            </p>

            <div style="display: flex; flex-wrap: wrap; gap: 1.25rem; align-items: center; margin-bottom: 3.5rem;">
              <button type="button" class="btn btn-primary btn-lg trigger-rfq-modal">
                <span>Request a Quote</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>

              <button type="button" class="btn btn-secondary btn-lg trigger-profile-modal">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Company Profile</span>
              </button>

              <a href="tel:+919130303006" class="btn btn-outline-bronze btn-lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 9130303006</span>
              </a>
            </div>

            <!-- Live Spindle Metrology Feed -->
            <div style="background: rgba(16, 18, 22, 0.8); border: 1px solid var(--steel-border); padding: 1rem 1.5rem; display: flex; flex-wrap: wrap; gap: 2rem; align-items: center;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span class="pulse-dot"></span>
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">ACTIVE QA CALIBRATION:</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-primary); font-weight: 600;">ZEISS CMM ACCURACY 0.9µm</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">PLANT FLEET:</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-bronze); font-weight: 600;">100+ CNC/VMC SPINDLES</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">LOCATION:</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-primary);">CHAKAN & BHOSARI MIDC, PUNE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. "ENGINEERING-LED" POSITIONING SECTION -->
      <section class="section-py" style="background: #0C0E12;">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1.1fr 1fr; gap: clamp(2.5rem, 5vw, 5rem); align-items: center;">
            <div>
              <div class="tech-tag" style="margin-bottom: 1rem;">POSITIONING MANIFESTO</div>
              <h2 style="font-size: clamp(2rem, 3.8vw, 3rem); line-height: 1.15; margin-bottom: 1.5rem;">
                Engineering-led, not just contract-manufactured.
              </h2>
              <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.25rem;">
                Most machine shops execute whatever drawing is handed to them. At Primeline Components, our manufacturing process begins with deep Design for Manufacturability (DFM) audits, cutting-force simulation, and metallurgical validation.
              </p>
              <p style="font-size: 0.95rem; line-height: 1.8; margin-bottom: 2rem; color: var(--text-muted);">
                We operate with the discipline of a Swiss watchmaker and the scale of an industrial powerhouse. When machining Inconel valve trims for deepwater exploration or titanium guidance mounts for defence, there is no margin for thermal drift or dimensional compromise.
              </p>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;">
                <div style="background: var(--bg-surface); border: 1px solid var(--steel-border); padding: 1.25rem;">
                  <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-bronze); margin-bottom: 0.35rem;">TOLERANCE THRESHOLD</div>
                  <div style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: var(--text-primary);">± 0.002 mm</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">Zeiss 3D CMM Volumetric Verified</div>
                </div>

                <div style="background: var(--bg-surface); border: 1px solid var(--steel-border); padding: 1.25rem;">
                  <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-bronze); margin-bottom: 0.35rem;">PROCESS CAPABILITY</div>
                  <div style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: var(--text-primary);">Cpk ≥ 1.67</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">Real-Time Shopfloor SPC Tracking</div>
                </div>
              </div>
            </div>

            <!-- Precision Spec Table Box -->
            <div style="background: #111317; border: 1px solid var(--steel-border-highlight); padding: 2rem; position: relative;">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--steel-border); padding-bottom: 1rem; margin-bottom: 1.5rem;">
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-bronze); font-weight: 700; letter-spacing: 0.1em;">
                  METROLOGY & PROCESS SPECIFICATION
                </span>
                <span class="tech-tag success" style="font-size: 0.65rem;">ACTIVE PRODUCTION</span>
              </div>

              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div class="spec-row">
                  <span class="spec-key">Machining Envelope (CNC)</span>
                  <span class="spec-val">Ø3 mm to Ø450 mm x 1200 mm</span>
                </div>
                <div class="spec-row">
                  <span class="spec-key">Milling Travel (VMC)</span>
                  <span class="spec-val">X: 1200mm · Y: 600mm · Z: 650mm</span>
                </div>
                <div class="spec-row">
                  <span class="spec-key">Surface Roughness</span>
                  <span class="spec-val">Down to Ra 0.05 µm (Mirror Lap)</span>
                </div>
                <div class="spec-row">
                  <span class="spec-key">Exotic Superalloys</span>
                  <span class="spec-val">Inconel 718/625, Monel 400, Duplex 2205</span>
                </div>
                <div class="spec-row">
                  <span class="spec-key">Pressure Rating Proof</span>
                  <span class="spec-val">Hydrostatic up to 700 Bar (10,150 PSI)</span>
                </div>
                <div class="spec-row">
                  <span class="spec-key">Quality Architecture</span>
                  <span class="spec-val">ISO 9001:2015 · IATF 16949 · TUV Austria</span>
                </div>
              </div>

              <div style="margin-top: 1.75rem; padding-top: 1.25rem; border-top: 1px dashed var(--steel-border); display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.8rem; color: var(--text-muted);">Have custom GD&T tolerances?</span>
                <button type="button" class="btn btn-outline-bronze btn-sm trigger-rfq-modal">
                  <span>Submit Drawing</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="section-divider">

      <!-- 3. CAPABILITIES OVERVIEW -->
      <section class="section-py">
        <div class="container">
          <div class="section-header">
            <div class="tech-tag">MANUFACTURING CAPABILITIES</div>
            <h2 class="section-title">Engineered to Micron-Level Exactness</h2>
            <p class="section-desc">
              Six synchronized manufacturing divisions under one integrated Pune campus — executing everything from prototype pilot validation to high-volume Tier-1 production.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1.5rem;">
            ${COMPANY_DATA.capabilities.map((cap, idx) => `
              <div class="tech-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem;">
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-bronze); font-weight: 700;">0${idx + 1} // CAPABILITY</span>
                  <span class="tech-tag neutral" style="font-size: 0.65rem;">${cap.tolerance}</span>
                </div>

                <h3 style="font-size: 1.35rem; margin-bottom: 0.6rem;">${cap.title}</h3>
                <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem; min-height: 48px;">
                  ${cap.description}
                </p>

                <div style="background: #12151B; border: 1px solid var(--steel-border); padding: 0.85rem 1rem; margin-bottom: 1.5rem;">
                  <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.25rem;">EQUIPMENT & CONTROLS:</div>
                  <div style="font-size: 0.78rem; color: var(--text-primary);">${cap.equipment}</div>
                </div>

                <a href="/capabilities" class="nav-route" data-path="/capabilities" style="display: inline-flex; align-items: center; gap: 0.5rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-bronze); font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;">
                  <span>Explore Technical Specs</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 4. PRODUCT SEGMENTS STRIP WITH TECHNICAL BLUEPRINT INSPECTOR -->
      <section class="section-py" style="background: #090A0D; border-top: 1px solid var(--steel-border); border-bottom: 1px solid var(--steel-border);">
        <div class="container">
          <div class="section-header">
            <div class="tech-tag">PRODUCT SEGMENTS</div>
            <h2 class="section-title">Critical Components for Demanding Sectors</h2>
            <p class="section-desc">
              Zero tolerance for failure. Our manufactured parts power subsea flow lines, aircraft guidance, automotive fuel delivery, and high-pressure fluid power systems.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 2rem;">
            ${COMPANY_DATA.productSegments.map((seg) => `
              <div class="blueprint-card">
                <div class="blueprint-header">
                  <div>
                    <span class="blueprint-meta">${seg.badge}</span>
                    <h3 style="font-size: 1.18rem; margin-top: 0.25rem;">${seg.title}</h3>
                  </div>
                  <span class="tech-tag" style="font-size: 0.65rem;">${seg.tolerances}</span>
                </div>

                <div class="blueprint-canvas-wrap">
                  <div class="blueprint-grid-lines"></div>
                  
                  <!-- Technical Vector Component Illustration -->
                  <div style="position: relative; z-index: 2; text-align: center;">
                    <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="#C98A4B" stroke-width="1.2">
                      <circle cx="50" cy="50" r="42" stroke-dasharray="3,3" opacity="0.4" />
                      <circle cx="50" cy="50" r="30" stroke="#C7CBCE" stroke-width="1.5" />
                      <circle cx="50" cy="50" r="14" fill="rgba(201, 138, 75, 0.15)" stroke="#C98A4B" stroke-width="1.5" />
                      <line x1="50" y1="8" x2="50" y2="92" stroke="rgba(199,203,206,0.2)" />
                      <line x1="8" y1="50" x2="92" y2="50" stroke="rgba(199,203,206,0.2)" />
                      <path d="M35 50 L65 50 M50 35 L50 65" stroke="#C98A4B" stroke-width="1.8" />
                    </svg>
                    <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted); margin-top: 0.75rem; letter-spacing: 0.1em;">
                      ASME / ISO 15156 COMPLIANT
                    </div>
                  </div>
                </div>

                <div class="blueprint-body">
                  <p style="font-size: 0.85rem; color: var(--text-secondary);">
                    ${seg.summary}
                  </p>

                  <div style="background: #12151B; padding: 0.85rem 1rem; border: 1px solid var(--steel-border);">
                    <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--accent-bronze); text-transform: uppercase; margin-bottom: 0.35rem;">TYPICAL COMPONENTS:</div>
                    <ul style="list-style: square; padding-left: 1.1rem; font-size: 0.78rem; color: var(--text-secondary); line-height: 1.6;">
                      ${seg.parts.slice(0, 3).map(p => `<li>${p}</li>`).join('')}
                    </ul>
                  </div>

                  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 0.85rem; border-top: 1px solid var(--steel-border);">
                    <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">${seg.materials.split(',')[0]}</span>
                    <button type="button" class="btn btn-outline-bronze btn-sm trigger-rfq-modal">
                      <span>Quote This Segment</span>
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 5. FACTS & FIGURES — ANIMATED COUNTER SECTION -->
      <section class="section-py" style="background: #0E1015;">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: clamp(1.5rem, 3vw, 3rem);">
            ${COMPANY_DATA.stats.map(stat => `
              <div class="stat-counter-card">
                <div class="stat-value">
                  ${stat.prefix ? `<span class="prefix">${stat.prefix}</span>` : ''}
                  <span class="counter-number" data-target="${stat.value}">${stat.value}</span>
                  ${stat.suffix ? `<span class="suffix">${stat.suffix}</span>` : ''}
                </div>
                <div class="stat-label">${stat.label}</div>
                <div class="stat-sub">${stat.sub}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <hr class="section-divider">

      <!-- 6. PUNE FACILITY SPOTLIGHT -->
      <section class="section-py">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 5vw, 4.5rem); align-items: center;">
            <div style="position: relative;">
              <!-- High-End Stylized Facility Showcase Box -->
              <div style="background: #11141A; border: 1px solid var(--steel-border-highlight); padding: 2.5rem; position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid var(--steel-border); padding-bottom: 1rem;">
                  <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-bronze); font-weight: 700;">
                    PUNE MANUFACTURING ECOSYSTEM
                  </span>
                  <span class="tech-tag success" style="font-size: 0.65rem;">AUDIT READY</span>
                </div>

                <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                  <div>
                    <strong style="color: var(--text-primary); font-family: var(--font-display); font-size: 1.15rem; display: block; margin-bottom: 0.35rem;">
                      Plant 1 — Chakan MIDC
                    </strong>
                    <p style="font-size: 0.85rem; color: var(--text-secondary);">
                      35,000+ sq. ft. heavy CNC & VMC machining facility with dedicated high-pressure valve testing rig (700 bar) and raw material ultrasonic inspection bay.
                    </p>
                  </div>

                  <div>
                    <strong style="color: var(--text-primary); font-family: var(--font-display); font-size: 1.15rem; display: block; margin-bottom: 0.35rem;">
                      Plant 2 — Bhosari MIDC
                    </strong>
                    <p style="font-size: 0.85rem; color: var(--text-secondary);">
                      Automotive common-rail injector lines, hydraulic spool honing cells, and temperature-controlled cleanroom sub-assembly department.
                    </p>
                  </div>

                  <div>
                    <strong style="color: var(--text-primary); font-family: var(--font-display); font-size: 1.15rem; display: block; margin-bottom: 0.35rem;">
                      Plant 3 — Talegaon MIDC / Shivleela Unit
                    </strong>
                    <p style="font-size: 0.85rem; color: var(--text-secondary);">
                      Precision polymer injection moulding tooling room and our pioneering women-led metrology and QA training division.
                    </p>
                  </div>
                </div>

                <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--steel-border); display: flex; gap: 1rem;">
                  <button type="button" class="btn btn-primary btn-sm trigger-tour-modal">
                    <span>Book a Facility Visit</span>
                  </button>
                  <a href="/infrastructure" class="btn btn-secondary btn-sm nav-route" data-path="/infrastructure">
                    <span>Explore Infrastructure</span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div class="tech-tag" style="margin-bottom: 1rem;">FACILITY & METROLOGY EXCELLENCE</div>
              <h2 style="font-size: clamp(2rem, 3.5vw, 3rem); line-height: 1.15; margin-bottom: 1.5rem;">
                Located at the Heart of India's Engineering Capital.
              </h2>
              <p style="font-size: 1rem; line-height: 1.8; margin-bottom: 1.5rem;">
                Our 100+ machine fleet is strategically distributed across Chakan, Bhosari, and Talegaon MIDC — the automotive and precision manufacturing epicenter of India.
              </p>
              <p style="font-size: 0.92rem; line-height: 1.8; margin-bottom: 2rem; color: var(--text-muted);">
                Equipped with Zeiss Coordinate Measuring Machines (CMM), optical surface roughness profilometers, and computerized tool presetters, we ensure zero discrepancy between design drawings and shipped batches.
              </p>

              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">
                  <span style="color: var(--accent-bronze);">✓</span> 100% Calibrated Zeiss 3D CMM Metrology Lab (20°C ±0.5°C)
                </div>
                <div style="display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">
                  <span style="color: var(--accent-bronze);">✓</span> 24/7 Power Redundancy & Climate-Controlled Machining Bays
                </div>
                <div style="display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">
                  <span style="color: var(--accent-bronze);">✓</span> Direct Proximity to Pune Airport & Nhava Sheva (JNPT) Export Port
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. CERTIFICATIONS STRIP -->
      <section class="section-py" style="background: #090B0E; border-top: 1px solid var(--steel-border); border-bottom: 1px solid var(--steel-border);">
        <div class="container">
          <div style="text-align: center; max-width: 700px; margin: 0 auto 3rem auto;">
            <div class="tech-tag" style="margin-bottom: 0.75rem;">GLOBAL COMPLIANCE</div>
            <h2 style="font-size: 2.2rem; margin-bottom: 0.5rem;">Audited & Certified by World Leaders</h2>
            <p style="font-size: 0.9rem; color: var(--text-muted);">Our quality management and automotive manufacturing systems are verified to international standards.</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
            ${COMPANY_DATA.certifications.map(cert => `
              <div style="background: #111317; border: 1px solid var(--steel-border); padding: 1.75rem; text-align: center;">
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-bronze); font-weight: 700; margin-bottom: 0.5rem;">
                  ${cert.badge}
                </div>
                <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">${cert.code}</h3>
                <p style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 1rem;">
                  ${cert.scope}
                </p>
                <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--status-green);">
                  ● ${cert.validity}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 8. GLOBAL REACH & EXPORT MAP -->
      <section class="section-py">
        <div class="container">
          <div class="section-header center">
            <div class="tech-tag">GLOBAL OEM FOOTPRINT</div>
            <h2 class="section-title">Delivering Precision Across 4 Continents</h2>
            <p class="section-desc">
              From our Pune plants, Primeline Components supplies critical precision-machined assemblies to leading Tier-1 and Tier-2 OEMs worldwide.
            </p>
          </div>

          <div style="background: #101318; border: 1px solid var(--steel-border); padding: clamp(2rem, 4vw, 3.5rem); position: relative;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
              <div>
                <span class="tech-tag" style="font-size: 0.65rem; margin-bottom: 0.5rem;">DOMESTIC MARKET</span>
                <h4 style="font-size: 1.1rem; margin-bottom: 0.35rem;">India OEM Hubs</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted);">Pune, Chennai, Bengaluru, NCR, Ahmedabad, Hyderabad.</p>
              </div>

              <div>
                <span class="tech-tag" style="font-size: 0.65rem; margin-bottom: 0.5rem;">EUROPEAN UNION</span>
                <h4 style="font-size: 1.1rem; margin-bottom: 0.35rem;">Germany & Italy</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted);">Automotive powertrains, hydraulic valve blocks & industrial fittings.</p>
              </div>

              <div>
                <span class="tech-tag" style="font-size: 0.65rem; margin-bottom: 0.5rem;">NORTH AMERICA</span>
                <h4 style="font-size: 1.1rem; margin-bottom: 0.35rem;">USA & Canada</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted);">Oil & Gas API 6D valve trims, subsea manifolds & defence components.</p>
              </div>

              <div>
                <span class="tech-tag" style="font-size: 0.65rem; margin-bottom: 0.5rem;">MIDDLE EAST & APAC</span>
                <h4 style="font-size: 1.1rem; margin-bottom: 0.35rem;">UAE, Saudi & Singapore</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted);">Offshore valve assemblies, petrochemical piping trims & electronics.</p>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--steel-border); padding-top: 1.5rem; flex-wrap: wrap; gap: 1rem;">
              <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary);">
                LOGISTICS: <span style="color: var(--accent-bronze);">EX-WORKS, FOB JNPT MUMBAI, CIF GLOBAL PORTS (AIR & SEA)</span>
              </div>
              <button type="button" class="btn btn-secondary btn-sm trigger-profile-modal">
                <span>View Export Compliance Sheet</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 9. CLOSING CTA BAND -->
      <section class="section-py" style="background: linear-gradient(180deg, #11141A 0%, #090A0D 100%); border-top: 1px solid var(--steel-border);">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
            <div>
              <div class="tech-tag" style="margin-bottom: 0.75rem;">START TECHNICAL REVIEW</div>
              <h2 style="font-size: clamp(2rem, 3.5vw, 2.8rem); margin-bottom: 0.5rem;">
                Talk directly with our engineering team.
              </h2>
              <p style="font-size: 0.95rem; color: var(--text-secondary); max-width: 600px;">
                Send your 2D/3D drawings for confidential DFM review and detailed commercial quotation within 24 hours.
              </p>
            </div>

            <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
              <button type="button" class="btn btn-primary btn-lg trigger-rfq-modal">
                <span>Request a Quote</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>

              <a href="https://wa.me/919130303006" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg">
                <span>WhatsApp / Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}
