import { COMPANY_DATA } from '../data/companyData.js';

export function renderValueAdditionPage() {
  return `
    <main class="page-content">
      <!-- Header -->
      <section class="section-py" style="background: radial-gradient(circle at 50% 0%, #171B24 0%, #0A0B0E 100%); border-bottom: 1px solid var(--steel-border); padding-top: 5rem; padding-bottom: 5rem;">
        <div class="container">
          <div style="max-width: 860px;">
            <div class="tech-tag" style="margin-bottom: 1rem;">
              <span class="pulse-dot"></span> BEYOND CONTRACT MACHINING
            </div>
            <h1 style="font-size: clamp(2.4rem, 5vw, 4rem); margin-bottom: 1.5rem; line-height: 1.1;">
              Value-Added Engineering Services
            </h1>
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary);">
              Transforming raw precision machining into complete turn-key manufacturing partnerships: from DFM design optimization and cleanroom kitting to JIT KanBan inventory and export VCI packaging.
            </p>
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="section-py">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 2rem;">
            ${COMPANY_DATA.valueAddition.map((item, idx) => `
              <div class="tech-card" style="display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
                  <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-bronze); font-weight: 700;">
                    VALUE SERVICE 0${idx + 1}
                  </span>
                  <span class="tech-tag neutral" style="font-size: 0.65rem;">TIER-1 STANDARD</span>
                </div>

                <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">${item.title}</h3>
                <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.75; margin-bottom: 1.5rem;">
                  ${item.desc}
                </p>

                <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--steel-border);">
                  <button type="button" class="btn btn-outline-bronze btn-sm trigger-rfq-modal" style="width: 100%;">
                    <span>Integrate with Your Production</span>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Closing Band -->
      <section class="section-py" style="background: #090B0E; border-top: 1px solid var(--steel-border);">
        <div class="container" style="text-align: center; max-width: 760px; margin: 0 auto;">
          <div class="tech-tag" style="margin-bottom: 1rem;">SEAMLESS SUPPLY CHAIN INTEGRATION</div>
          <h2 style="font-size: 2.2rem; margin-bottom: 1rem;">Ready to streamline your OEM supply chain?</h2>
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 2rem;">
            Our engineering desk is ready to review your sub-assembly drawings, annual consumption requirements, and KanBan delivery schedules.
          </p>
          <button type="button" class="btn btn-primary btn-lg trigger-rfq-modal">
            <span>Consult with Engineering Team</span>
          </button>
        </div>
      </section>
    </main>
  `;
}
