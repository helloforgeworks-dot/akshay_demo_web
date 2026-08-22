import { COMPANY_DATA } from '../data/companyData.js';

export function renderContactPage() {
  const contact = COMPANY_DATA.contact;

  return `
    <main class="page-content">
      <!-- Header -->
      <section class="section-py" style="background: radial-gradient(circle at 50% 0%, #171B24 0%, #0A0B0E 100%); border-bottom: 1px solid var(--steel-border); padding-top: 5rem; padding-bottom: 5rem;">
        <div class="container">
          <div style="max-width: 860px;">
            <div class="tech-tag" style="margin-bottom: 1rem;">
              <span class="pulse-dot"></span> PUNE ENGINEERING & SALES DESK
            </div>
            <h1 style="font-size: clamp(2.4rem, 5vw, 4rem); margin-bottom: 1.5rem; line-height: 1.1;">
              Contact & Technical RFQ
            </h1>
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary);">
              Connect directly with our senior application engineers, request a formal CAD/drawing quotation, or schedule a comprehensive on-site facility audit in Pune.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Grid -->
      <section class="section-py">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: clamp(2.5rem, 5vw, 5rem);">
            <!-- Direct RFQ Action Box -->
            <div style="background: #11141A; border: 1px solid var(--steel-border-highlight); padding: clamp(2rem, 4vw, 3rem);">
              <div class="tech-tag" style="margin-bottom: 1rem;">INSTANT ENGINEERING RFQ</div>
              <h2 style="font-size: 1.8rem; margin-bottom: 1rem;">Submit Your Drawing Package</h2>
              <p style="font-size: 0.92rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 2rem;">
                Our technical estimation team in Chakan evaluates 2D/3D CAD files (STEP, IGES, DXF, PDF), calculates cycle times, reviews GD&T tolerances, and provides detailed DFM price quotes within 24 hours.
              </p>

              <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">
                  <span style="color: var(--status-green);">✓</span> Mutual Non-Disclosure Agreement (NDA) support
                </div>
                <div style="display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">
                  <span style="color: var(--status-green);">✓</span> 100% In-house Zeiss CMM QA reporting included
                </div>
                <div style="display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">
                  <span style="color: var(--status-green);">✓</span> Prototype (5-7 days) to high-volume Tier-1 schedules
                </div>
              </div>

              <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
                <button type="button" class="btn btn-primary btn-lg trigger-rfq-modal">
                  <span>Launch 5-Step RFQ Wizard</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>

                <button type="button" class="btn btn-secondary btn-lg trigger-tour-modal">
                  <span>Book Plant Tour</span>
                </button>
              </div>
            </div>

            <!-- Direct Contact Channels & Plant Locations -->
            <div style="display: flex; flex-direction: column; gap: 2rem;">
              <!-- Direct Hotlines -->
              <div class="tech-card">
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-bronze); font-weight: 700; margin-bottom: 1rem;">
                  DIRECT COMMUNICATIONS DESK
                </div>

                <div style="display: flex; flex-direction: column; gap: 1rem;">
                  <div>
                    <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); display: block;">ENGINEERING & RFQ EMAIL:</span>
                    <a href="mailto:${contact.email}" style="color: var(--text-primary); font-family: var(--font-mono); font-size: 1.05rem; font-weight: 600;">
                      ${contact.email}
                    </a>
                  </div>

                  <div>
                    <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); display: block;">DIRECT HOTLINES / WHATSAPP:</span>
                    <div style="display: flex; flex-direction: column; gap: 0.35rem; margin-top: 0.25rem;">
                      <a href="tel:+919130303006" style="color: var(--accent-bronze); font-family: var(--font-mono); font-size: 1rem; font-weight: 600;">
                        +91 9130303006 (Direct Sales & RFQ)
                      </a>
                      <a href="tel:+918956462142" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 0.92rem;">
                        +91 8956462142 (Plant Operations)
                      </a>
                    </div>
                  </div>

                  <div>
                    <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); display: block;">OPERATING HOURS:</span>
                    <span style="font-size: 0.85rem; color: var(--text-secondary);">${contact.hours}</span>
                  </div>
                </div>
              </div>

              <!-- Locations List -->
              <div class="tech-card">
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-bronze); font-weight: 700; margin-bottom: 1rem;">
                  PUNE MIDC MANUFACTURING LOCATIONS
                </div>

                <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                  ${contact.locations.map(loc => `
                    <div style="border-bottom: 1px dashed rgba(199,203,206,0.1); padding-bottom: 0.75rem;">
                      <strong style="color: var(--text-primary); font-size: 0.88rem; display: block; margin-bottom: 0.2rem;">
                        ${loc.name}
                      </strong>
                      <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-bronze); display: block; margin-bottom: 0.25rem;">
                        ${loc.type}
                      </span>
                      <span style="font-size: 0.8rem; color: var(--text-muted);">
                        ${loc.address}
                      </span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}
