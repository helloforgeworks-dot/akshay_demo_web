import { COMPANY_DATA } from '../data/companyData.js';

export function renderValueAdditionPage() {
  return `
    <main class="page-content">
      <!-- Header -->
      <section class="page-header-white">
        <div class="container">
          <div style="max-width: 860px; width: 100%;">
            <div class="tech-tag" style="margin-bottom: 1rem;">
              <span class="pulse-dot"></span> BEYOND CONTRACT MACHINING
            </div>
            <h1 style="font-size: clamp(2.2rem, 5vw, 3.8rem); margin-bottom: 1.25rem; line-height: 1.1; color: var(--text-primary);">
              Value-Added <span style="color: var(--brand-blue);">Engineering Services</span>
            </h1>
            <p style="font-size: 1.05rem; line-height: 1.75; color: var(--text-secondary);">
              Transforming raw precision machining into complete turn-key manufacturing partnerships: from DFM design optimization and cleanroom kitting to JIT KanBan inventory and export VCI packaging.
            </p>
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="section-py" style="background: #FFFFFF;">
        <div class="container">
          <div class="governance-grid">
            ${COMPANY_DATA.valueAddition.map((item, idx) => `
              <div class="tech-card" style="display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.5rem;">
                  <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--brand-blue); font-weight: 700;">
                    VALUE SERVICE 0${idx + 1}
                  </span>
                  <span class="tech-tag neutral" style="font-size: 0.65rem;">TIER-1 STANDARD</span>
                </div>

                <h3 style="font-size: 1.3rem; margin-bottom: 0.65rem; color: var(--text-primary);">${item.title}</h3>
                <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">
                  ${item.desc}
                </p>

                <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-color);">
                  <button type="button" class="btn btn-secondary btn-sm trigger-rfq-modal" style="width: 100%;">
                    <span>Integrate with Your Production</span>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Closing Band -->
      <section class="section-py" style="background: var(--bg-light-blue); border-top: 1px solid var(--border-color);">
        <div class="container" style="text-align: center; max-width: 760px; margin: 0 auto; width: 100%;">
          <div class="tech-tag" style="margin-bottom: 1rem; background: #FFFFFF;">SEAMLESS SUPPLY CHAIN INTEGRATION</div>
          <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); margin-bottom: 1rem; color: var(--text-primary);">Ready to streamline your OEM supply chain?</h2>
          <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 2rem;">
            Our engineering desk is ready to review your sub-assembly drawings, annual consumption requirements, and KanBan delivery schedules.
          </p>
          <button type="button" class="btn btn-primary btn-lg trigger-rfq-modal" style="max-width: 100%;">
            <span>Consult with Engineering Team</span>
          </button>
        </div>
      </section>
    </main>
  `;
}
