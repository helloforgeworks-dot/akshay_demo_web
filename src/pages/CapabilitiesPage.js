import { COMPANY_DATA } from '../data/companyData.js';

export function renderCapabilitiesPage() {
  return `
    <main class="page-content">
      <!-- Header -->
      <section class="page-header-white">
        <div class="container">
          <div style="max-width: 860px; width: 100%;">
            <div class="tech-tag" style="margin-bottom: 1rem;">
              <span class="pulse-dot"></span> INTEGRATED MACHINING FLEET · 100+ SPINDLES
            </div>
            <h1 style="font-size: clamp(2.2rem, 5vw, 3.8rem); margin-bottom: 1.25rem; line-height: 1.1; color: var(--text-primary);">
              Precision Engineering & <span style="color: var(--brand-blue);">Machining Capabilities</span>
            </h1>
            <p style="font-size: 1.05rem; line-height: 1.75; color: var(--text-secondary);">
              From single-setup 5-axis turning of refractory superalloys to high-speed vertical milling and multi-cavity polymer injection tooling — our capabilities deliver certified repeatability down to 2 microns.
            </p>
          </div>
        </div>
      </section>

      <!-- Detailed Capability Showcase -->
      <section class="section-py" style="background: #FFFFFF;">
        <div class="container">
          <div style="display: flex; flex-direction: column; gap: clamp(2rem, 4vw, 4rem); width: 100%;">
            ${COMPANY_DATA.capabilities.map((cap, idx) => `
              <div id="${cap.id}" class="product-segment-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                  <div>
                    <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--brand-blue); font-weight: 700; letter-spacing: 0.12em;">
                      SECTION 0${idx + 1} // PRECISION CAPABILITY
                    </span>
                    <h2 style="font-size: clamp(1.5rem, 3.2vw, 2.4rem); margin-top: 0.35rem; color: var(--text-primary);">${cap.title}</h2>
                    <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase;">
                      ${cap.tagline}
                    </div>
                  </div>

                  <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 0.5rem;">
                    <span class="tech-tag success">${cap.tolerance}</span>
                    <button type="button" class="btn btn-primary btn-sm trigger-rfq-modal">
                      <span>Quote This Process</span>
                    </button>
                  </div>
                </div>

                <p style="font-size: 0.98rem; line-height: 1.72; color: var(--text-secondary); margin-bottom: 1.5rem; max-width: 960px;">
                  ${cap.description}
                </p>

                <!-- Technical Parameter Matrix -->
                <div class="product-details-grid" style="margin-bottom: 1.5rem;">
                  <div class="product-inner-card">
                    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.35rem;">EQUIPMENT & CONTROLS</div>
                    <div style="font-size: 0.88rem; color: var(--text-primary); font-weight: 700;">${cap.equipment}</div>
                  </div>

                  <div class="product-inner-card">
                    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.35rem;">MATERIALS HANDLED</div>
                    <div style="font-size: 0.88rem; color: var(--brand-blue); font-weight: 700;">${cap.materials}</div>
                  </div>
                </div>

                <!-- Feature Bullet Points -->
                <div class="product-inner-card">
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--brand-blue); text-transform: uppercase; font-weight: 700; margin-bottom: 0.85rem;">
                    PROCESS HIGHLIGHTS & TECHNICAL SPECIFICATIONS:
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 0.65rem; width: 100%;">
                    ${cap.features.map(f => `
                      <div class="product-part-item">
                        <span style="color: var(--brand-blue); font-family: var(--font-mono); font-weight: 700; flex-shrink: 0;">+</span>
                        <span class="product-part-text">${f}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Machinery Fleet Matrix Table -->
      <section class="section-py" style="background: var(--bg-secondary); border-top: 1px solid var(--border-color);">
        <div class="container">
          <div class="section-header center">
            <div class="tech-tag" style="margin-bottom: 0.75rem; background: #FFFFFF;">FLEET ARCHITECTURE</div>
            <h2 class="section-title">Noida & NCR Manufacturing Machine Fleet</h2>
            <p class="section-desc">
              Over 100 high-precision multi-axis machines deployed across Sector 16 Noida, Industrial Area, and NCR facilities.
            </p>
          </div>

          <div class="table-responsive-wrapper">
            <table style="width: 100%; min-width: 600px; border-collapse: collapse; text-align: left; font-size: 0.88rem;">
              <thead>
                <tr style="background: var(--bg-light-blue); border-bottom: 1px solid var(--border-color); font-family: var(--font-mono); font-size: 0.75rem; color: var(--brand-blue); text-transform: uppercase;">
                  <th style="padding: 1rem 1.25rem;">Machine Category</th>
                  <th style="padding: 1rem 1.25rem;">Spindle / Axis Configuration</th>
                  <th style="padding: 1rem 1.25rem;">Working Capacity</th>
                  <th style="padding: 1rem 1.25rem;">Primary Application</th>
                  <th style="padding: 1rem 1.25rem;">Plant Location</th>
                </tr>
              </thead>
              <tbody style="color: var(--text-secondary);">
                <tr style="border-bottom: 1px solid var(--border-color-subtle);">
                  <td style="padding: 1rem 1.25rem; font-weight: 700; color: var(--text-primary);">5-Axis & Dual-Spindle CNC Lathes</td>
                  <td style="padding: 1rem 1.25rem; font-family: var(--font-mono);">5-Axis / Live Tooling / C-Axis</td>
                  <td style="padding: 1rem 1.25rem;">Ø3mm to Ø450mm x 1200mm</td>
                  <td style="padding: 1rem 1.25rem;">Inconel Valve Balls, Stem Shafts</td>
                  <td style="padding: 1rem 1.25rem; color: var(--brand-blue); font-weight: 600;">Sector 16 Noida</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color-subtle);">
                  <td style="padding: 1rem 1.25rem; font-weight: 700; color: var(--text-primary);">Heavy-Duty BT50 VMC Fleet</td>
                  <td style="padding: 1rem 1.25rem; font-family: var(--font-mono);">4-Axis / 12,000 RPM Spindles</td>
                  <td style="padding: 1rem 1.25rem;">X: 1200mm Y: 600mm Z: 650mm</td>
                  <td style="padding: 1rem 1.25rem;">Hydraulic Manifolds, Defence Casings</td>
                  <td style="padding: 1rem 1.25rem; color: var(--brand-blue); font-weight: 600;">Sector 16 Noida</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color-subtle);">
                  <td style="padding: 1rem 1.25rem; font-weight: 700; color: var(--text-primary);">High-Speed Swiss-Type Lathes</td>
                  <td style="padding: 1rem 1.25rem; font-family: var(--font-mono);">7-Axis Sliding Headstock</td>
                  <td style="padding: 1rem 1.25rem;">Ø2mm to Ø32mm Micro-Parts</td>
                  <td style="padding: 1rem 1.25rem;">Automotive Fuel Injectors, Sensors</td>
                  <td style="padding: 1rem 1.25rem; color: var(--brand-blue); font-weight: 600;">Noida Industrial Area</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color-subtle);">
                  <td style="padding: 1rem 1.25rem; font-weight: 700; color: var(--text-primary);">All-Electric Injection Moulding</td>
                  <td style="padding: 1rem 1.25rem; font-family: var(--font-mono);">50T to 350T Clamping Force</td>
                  <td style="padding: 1rem 1.25rem;">Shot Weight 5g to 1200g</td>
                  <td style="padding: 1rem 1.25rem;">Engineering Polymers (PEEK/POM)</td>
                  <td style="padding: 1rem 1.25rem; color: var(--brand-blue); font-weight: 600;">NCR Precision Plant</td>
                </tr>
                <tr>
                  <td style="padding: 1rem 1.25rem; font-weight: 700; color: var(--text-primary);">Hydrostatic Pressure Test Rig</td>
                  <td style="padding: 1rem 1.25rem; font-family: var(--font-mono);">Automated Data-Logged Proof Rig</td>
                  <td style="padding: 1rem 1.25rem;">Up to 700 Bar (10,150 PSI)</td>
                  <td style="padding: 1rem 1.25rem;">API 6D Valve Trims & Sub-Assemblies</td>
                  <td style="padding: 1rem 1.25rem; color: var(--brand-blue); font-weight: 600;">Sector 16 Noida</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  `;
}
