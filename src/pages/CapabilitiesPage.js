import { COMPANY_DATA } from '../data/companyData.js';

export function renderCapabilitiesPage() {
  return `
    <main class="page-content">
      <!-- Header -->
      <section class="section-py" style="background: radial-gradient(circle at 50% 0%, #171B24 0%, #0A0B0E 100%); border-bottom: 1px solid var(--steel-border); padding-top: 5rem; padding-bottom: 5rem;">
        <div class="container">
          <div style="max-width: 860px;">
            <div class="tech-tag" style="margin-bottom: 1rem;">
              <span class="pulse-dot"></span> INTEGRATED MACHINING FLEET · 100+ SPINDLES
            </div>
            <h1 style="font-size: clamp(2.4rem, 5vw, 4rem); margin-bottom: 1.5rem; line-height: 1.1;">
              Precision Engineering & Machining Capabilities
            </h1>
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary);">
              From single-setup 5-axis turning of refractory superalloys to high-speed vertical milling and multi-cavity polymer injection tooling — our capabilities deliver certified repeatability down to 2 microns.
            </p>
          </div>
        </div>
      </section>

      <!-- Detailed Capability Showcase -->
      <section class="section-py">
        <div class="container">
          <div style="display: flex; flex-direction: column; gap: clamp(3rem, 6vw, 5.5rem);">
            ${COMPANY_DATA.capabilities.map((cap, idx) => `
              <div id="${cap.id}" style="background: #0E1015; border: 1px solid var(--steel-border); padding: clamp(2rem, 4vw, 3.5rem); position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                  <div>
                    <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-bronze); font-weight: 700; letter-spacing: 0.12em;">
                      SECTION 0${idx + 1} // PRECISION CAPABILITY
                    </span>
                    <h2 style="font-size: clamp(1.8rem, 3.2vw, 2.6rem); margin-top: 0.4rem;">${cap.title}</h2>
                    <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase;">
                      ${cap.tagline}
                    </div>
                  </div>

                  <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
                    <span class="tech-tag success">${cap.tolerance}</span>
                    <button type="button" class="btn btn-primary btn-sm trigger-rfq-modal">
                      <span>Quote This Process</span>
                    </button>
                  </div>
                </div>

                <p style="font-size: 1.02rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 2rem; max-width: 960px;">
                  ${cap.description}
                </p>

                <!-- Technical Parameter Matrix -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; background: #13161C; padding: 1.5rem; border: 1px solid var(--steel-border);">
                  <div>
                    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.35rem;">EQUIPMENT & CONTROLS</div>
                    <div style="font-size: 0.88rem; color: var(--text-primary); font-weight: 600;">${cap.equipment}</div>
                  </div>

                  <div>
                    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.35rem;">MATERIALS HANDLED</div>
                    <div style="font-size: 0.88rem; color: var(--accent-bronze); font-weight: 600;">${cap.materials}</div>
                  </div>

                  <div>
                    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.35rem;">QUALITY TOLERANCE</div>
                    <div style="font-size: 0.88rem; color: var(--status-green); font-weight: 600;">${cap.tolerance}</div>
                  </div>
                </div>

                <!-- Feature Bullet Points -->
                <div>
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 1rem;">
                    PROCESS HIGHLIGHTS & TECHNICAL SPECIFICATIONS:
                  </div>
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 0.85rem;">
                    ${cap.features.map(f => `
                      <div style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.88rem; color: var(--text-secondary);">
                        <span style="color: var(--accent-bronze); font-family: var(--font-mono); font-weight: 700;">+</span>
                        <span>${f}</span>
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
      <section class="section-py" style="background: #090B0E; border-top: 1px solid var(--steel-border);">
        <div class="container">
          <div class="section-header center">
            <div class="tech-tag">FLEET ARCHITECTURE</div>
            <h2 class="section-title">Pune Manufacturing Machine Fleet</h2>
            <p class="section-desc">
              Over 100 high-precision multi-axis machines deployed across Chakan, Bhosari, and Talegaon MIDC plants.
            </p>
          </div>

          <div style="overflow-x: auto; background: #11141A; border: 1px solid var(--steel-border);">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.88rem;">
              <thead>
                <tr style="background: #161A22; border-bottom: 1px solid var(--steel-border); font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-bronze); text-transform: uppercase;">
                  <th style="padding: 1.25rem 1.5rem;">Machine Category</th>
                  <th style="padding: 1.25rem 1.5rem;">Spindle / Axis Configuration</th>
                  <th style="padding: 1.25rem 1.5rem;">Working Capacity</th>
                  <th style="padding: 1.25rem 1.5rem;">Primary Application</th>
                  <th style="padding: 1.25rem 1.5rem;">Plant Location</th>
                </tr>
              </thead>
              <tbody style="color: var(--text-secondary);">
                <tr style="border-bottom: 1px solid rgba(199, 203, 206, 0.08);">
                  <td style="padding: 1.25rem 1.5rem; font-weight: 600; color: var(--text-primary);">5-Axis & Dual-Spindle CNC Lathes</td>
                  <td style="padding: 1.25rem 1.5rem; font-family: var(--font-mono);">5-Axis / Live Tooling / C-Axis</td>
                  <td style="padding: 1.25rem 1.5rem;">Ø3mm to Ø450mm x 1200mm</td>
                  <td style="padding: 1.25rem 1.5rem;">Inconel Valve Balls, Stem Shafts</td>
                  <td style="padding: 1.25rem 1.5rem;">Chakan MIDC</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(199, 203, 206, 0.08);">
                  <td style="padding: 1.25rem 1.5rem; font-weight: 600; color: var(--text-primary);">Heavy-Duty BT50 VMC Fleet</td>
                  <td style="padding: 1.25rem 1.5rem; font-family: var(--font-mono);">4-Axis / 12,000 RPM Spindles</td>
                  <td style="padding: 1.25rem 1.5rem;">X: 1200mm Y: 600mm Z: 650mm</td>
                  <td style="padding: 1.25rem 1.5rem;">Hydraulic Manifolds, Defence Casings</td>
                  <td style="padding: 1.25rem 1.5rem;">Chakan MIDC</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(199, 203, 206, 0.08);">
                  <td style="padding: 1.25rem 1.5rem; font-weight: 600; color: var(--text-primary);">High-Speed Swiss-Type Lathes</td>
                  <td style="padding: 1.25rem 1.5rem; font-family: var(--font-mono);">7-Axis Sliding Headstock</td>
                  <td style="padding: 1.25rem 1.5rem;">Ø2mm to Ø32mm Micro-Parts</td>
                  <td style="padding: 1.25rem 1.5rem;">Automotive Fuel Injectors, Sensors</td>
                  <td style="padding: 1.25rem 1.5rem;">Bhosari MIDC</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(199, 203, 206, 0.08);">
                  <td style="padding: 1.25rem 1.5rem; font-weight: 600; color: var(--text-primary);">All-Electric Injection Moulding</td>
                  <td style="padding: 1.25rem 1.5rem; font-family: var(--font-mono);">50T to 350T Clamping Force</td>
                  <td style="padding: 1.25rem 1.5rem;">Shot Weight 5g to 1200g</td>
                  <td style="padding: 1.25rem 1.5rem;">Engineering Polymers (PEEK/POM)</td>
                  <td style="padding: 1.25rem 1.5rem;">Talegaon MIDC</td>
                </tr>
                <tr>
                  <td style="padding: 1.25rem 1.5rem; font-weight: 600; color: var(--text-primary);">Hydrostatic Pressure Test Rig</td>
                  <td style="padding: 1.25rem 1.5rem; font-family: var(--font-mono);">Automated Data-Logged Proof Rig</td>
                  <td style="padding: 1.25rem 1.5rem;">Up to 700 Bar (10,150 PSI)</td>
                  <td style="padding: 1.25rem 1.5rem;">API 6D Valve Trims & Sub-Assemblies</td>
                  <td style="padding: 1.25rem 1.5rem;">Chakan MIDC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  `;
}
