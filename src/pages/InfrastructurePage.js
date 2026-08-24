import { COMPANY_DATA } from '../data/companyData.js';

export function renderInfrastructurePage() {
  const infra = COMPANY_DATA.infrastructure;

  return `
    <main class="page-content">
      <!-- Header -->
      <section class="page-header-white">
        <div class="container">
          <div style="max-width: 860px; width: 100%;">
            <div class="tech-tag" style="margin-bottom: 1rem;">
              <span class="pulse-dot"></span> NOIDA & NCR MANUFACTURING CAMPUS
            </div>
            <h1 style="font-size: clamp(2.2rem, 5vw, 3.8rem); margin-bottom: 1.25rem; line-height: 1.1; color: var(--text-primary);">
              World-Class Infrastructure & <span style="color: var(--brand-blue);">Metrology Lab</span>
            </h1>
            <p style="font-size: 1.05rem; line-height: 1.75; color: var(--text-secondary);">
              Operating 80,000+ sq. ft. of climate-controlled machining halls and accredited metrology laboratories across Sector 16 Noida and the NCR industrial corridor.
            </p>
          </div>
        </div>
      </section>

      <!-- 1. MANUFACTURING FACILITIES BREAKDOWN -->
      <section class="section-py" style="background: #FFFFFF;">
        <div class="container">
          <div class="section-header">
            <div class="tech-tag" style="margin-bottom: 0.75rem;">MANUFACTURING CAMPUS</div>
            <h2 class="section-title">Three Specialized Precision Plants</h2>
            <p class="section-desc">
              Each plant is engineered for dedicated operational focus — from heavy superalloy turning to high-speed automotive lines and polymer toolrooms.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; width: 100%; box-sizing: border-box;">
            ${infra.facilities.map((fac, idx) => `
              <div class="tech-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
                  <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--brand-blue); font-weight: 700;">
                    UNIT 0${idx + 1}
                  </span>
                  <span class="tech-tag success" style="font-size: 0.65rem;">ACTIVE PRODUCTION</span>
                </div>

                <h3 style="font-size: 1.3rem; margin-bottom: 0.4rem; color: var(--text-primary);">${fac.name}</h3>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.85rem;">
                  ${fac.area}
                </div>

                <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.15rem; line-height: 1.65;">
                  <strong>Core Specialization:</strong> ${fac.focus}
                </p>

                <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 0.85rem 1rem; width: 100%; box-sizing: border-box;">
                  <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--brand-blue); font-weight: 700; margin-bottom: 0.25rem;">DEPLOYED MACHINERY:</div>
                  <div style="font-size: 0.82rem; color: var(--text-primary); line-height: 1.5;">${fac.fleet}</div>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="margin-top: 2.5rem; text-align: center;">
            <button type="button" class="btn btn-primary trigger-tour-modal">
              <span>Schedule an On-Site Technical Audit</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <!-- 2. IN-HOUSE METROLOGY & QA LAB -->
      <section class="section-py" style="background: var(--bg-secondary); border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
        <div class="container">
          <div class="section-header">
            <div class="tech-tag" style="margin-bottom: 0.75rem; background: #FFFFFF;">CALIBRATED METROLOGY</div>
            <h2 class="section-title">In-House Inspection & Metrology Laboratory</h2>
            <p class="section-desc">
              Operating in a strictly maintained Class-10,000 temperature-controlled environment (20°C ±0.5°C) with full traceability to national and international standards.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; width: 100%; box-sizing: border-box;">
            ${infra.qualityLab.instruments.map(inst => `
              <div style="background: #FFFFFF; border: 1px solid var(--border-color); padding: 1.5rem; box-shadow: 0 4px 16px rgba(11,58,102,0.04); box-sizing: border-box;">
                <div class="tech-tag" style="margin-bottom: 0.75rem; font-size: 0.68rem;">${inst.metric}</div>
                <h3 style="font-size: 1.2rem; margin-bottom: 0.4rem; color: var(--text-primary);">${inst.name}</h3>
                <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.65;">
                  ${inst.purpose}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 3. QC PROCESS WALKTHROUGH -->
      <section class="section-py" style="background: #FFFFFF;">
        <div class="container">
          <div class="section-header center">
            <div class="tech-tag" style="margin-bottom: 0.75rem;">ZERO-DEFECT ARCHITECTURE</div>
            <h2 class="section-title">5-Stage Quality Assurance Workflow</h2>
            <p class="section-desc">
              Every component passing through our Noida campus undergoes five distinct quality checkpoints before dispatch.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; width: 100%; box-sizing: border-box;">
            ${infra.qaWorkflow.map(step => `
              <div class="tech-card">
                <div style="font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--brand-blue); margin-bottom: 0.4rem;">
                  ${step.step}
                </div>
                <h3 style="font-size: 1.1rem; margin-bottom: 0.4rem; color: var(--text-primary);">${step.title}</h3>
                <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.65;">
                  ${step.desc}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </main>
  `;
}
