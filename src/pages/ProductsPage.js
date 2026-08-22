import { COMPANY_DATA } from '../data/companyData.js';

export function renderProductsPage() {
  return `
    <main class="page-content">
      <!-- Header -->
      <section class="section-py" style="background: radial-gradient(circle at 50% 0%, #171B24 0%, #0A0B0E 100%); border-bottom: 1px solid var(--steel-border); padding-top: 5rem; padding-bottom: 5rem;">
        <div class="container">
          <div style="max-width: 860px;">
            <div class="tech-tag" style="margin-bottom: 1rem;">
              <span class="pulse-dot"></span> SECTOR-SPECIFIC PRECISION COMPONENTS
            </div>
            <h1 style="font-size: clamp(2.4rem, 5vw, 4rem); margin-bottom: 1.5rem; line-height: 1.1;">
              Product Segments & Industrial Sectors
            </h1>
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary);">
              Manufactured with zero compromise on GD&T, surface integrity, and metallurgy. Explore our component portfolio across Oil & Gas, Aerospace & Defence, Automotive, and High-Pressure Fluid Power.
            </p>
          </div>
        </div>
      </section>

      <!-- Products Grid & Deep-Dives -->
      <section class="section-py">
        <div class="container">
          <div style="display: flex; flex-direction: column; gap: clamp(3rem, 6vw, 6rem);">
            ${COMPANY_DATA.productSegments.map((seg, idx) => `
              <div id="${seg.id}" style="background: #0E1015; border: 1px solid var(--steel-border); padding: clamp(2rem, 4vw, 3.5rem); position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
                  <div>
                    <div class="tech-tag" style="margin-bottom: 0.5rem; font-size: 0.68rem;">${seg.badge}</div>
                    <h2 style="font-size: clamp(1.8rem, 3.2vw, 2.5rem);">${seg.title}</h2>
                    <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">
                      CRITICAL SECTOR 0${idx + 1}
                    </div>
                  </div>

                  <div style="display: flex; gap: 1rem; align-items: center;">
                    <span class="tech-tag success">${seg.tolerances}</span>
                    <button type="button" class="btn btn-primary btn-sm trigger-rfq-modal">
                      <span>Request Quote for this Segment</span>
                    </button>
                  </div>
                </div>

                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 2rem; max-width: 980px;">
                  ${seg.summary}
                </p>

                <!-- 2-Column Technical Layout: Component List & Quality Specs -->
                <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                  <!-- Manufactured Components -->
                  <div style="background: #12151B; border: 1px solid var(--steel-border); padding: 1.75rem;">
                    <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-bronze); text-transform: uppercase; font-weight: 700; margin-bottom: 1rem;">
                      KEY MANUFACTURED COMPONENTS & ASSEMBLIES:
                    </div>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.85rem;">
                      ${seg.parts.map(part => `
                        <li style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.88rem; color: var(--text-primary);">
                          <span style="color: var(--accent-bronze); font-family: var(--font-mono); font-weight: 700;">▸</span>
                          <span>${part}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>

                  <!-- Technical Specs & Metallurgy -->
                  <div style="background: #12151B; border: 1px solid var(--steel-border); padding: 1.75rem; display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                      <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-bronze); text-transform: uppercase; font-weight: 700; margin-bottom: 1rem;">
                        METALLURGY & QUALITY CONTROLS:
                      </div>
                      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <div>
                          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); display: block;">MATERIALS:</span>
                          <span style="font-size: 0.85rem; color: var(--text-primary); font-weight: 600;">${seg.materials}</span>
                        </div>
                        <div>
                          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); display: block;">PRECISION / TOLERANCE:</span>
                          <span style="font-size: 0.85rem; color: var(--status-green); font-weight: 600;">${seg.tolerances}</span>
                        </div>
                        <div>
                          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); display: block;">CERTIFICATION & TESTING:</span>
                          <span style="font-size: 0.85rem; color: var(--text-secondary);">${Object.values(seg.specs).join(' · ')}</span>
                        </div>
                      </div>
                    </div>

                    <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px dashed var(--steel-border);">
                      <button type="button" class="btn btn-outline-bronze btn-sm trigger-rfq-modal" style="width: 100%;">
                        <span>Upload Drawings for ${seg.title}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </main>
  `;
}
