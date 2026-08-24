import { COMPANY_DATA } from '../data/companyData.js';

export function renderContactPage() {
  const contact = COMPANY_DATA.contact;

  return `
    <main class="page-content">
      <!-- Header -->
      <section class="page-header-white">
        <div class="container">
          <div style="max-width: 860px; width: 100%;">
            <div class="tech-tag" style="margin-bottom: 1rem;">
              <span class="pulse-dot"></span> NOIDA & NCR ENGINEERING & SALES DESK
            </div>
            <h1 style="font-size: clamp(2.2rem, 5vw, 3.8rem); margin-bottom: 1.25rem; line-height: 1.1; color: var(--text-primary);">
              Contact & <span style="color: var(--brand-blue);">Technical RFQ</span>
            </h1>
            <p style="font-size: 1.05rem; line-height: 1.75; color: var(--text-secondary);">
              Connect directly with Prince Singh (Founder & Managing Director) and our senior engineering estimation team in Noida. Request a formal CAD/drawing quotation or schedule an on-site facility audit.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Grid -->
      <section class="section-py" style="background: #FFFFFF;">
        <div class="container">
          <div class="contact-split-grid">
            <!-- Direct RFQ Action Box -->
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: clamp(1.5rem, 4vw, 3rem); box-shadow: 0 8px 24px rgba(11,58,102,0.05); width: 100%; box-sizing: border-box;">
              <div class="tech-tag" style="margin-bottom: 1rem; background: #FFFFFF;">INSTANT ENGINEERING RFQ</div>
              <h2 style="font-size: clamp(1.5rem, 4vw, 1.8rem); margin-bottom: 0.85rem; color: var(--text-primary);">Submit Your Drawing Package</h2>
              <p style="font-size: 0.92rem; line-height: 1.75; color: var(--text-secondary); margin-bottom: 1.75rem;">
                Our technical estimation team in Sector 16 Noida evaluates 2D/3D CAD files (STEP, IGES, DXF, PDF), calculates cycle times, reviews GD&T tolerances, and provides detailed DFM price quotes within 24 hours.
              </p>

              <div style="display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 2rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-primary);">
                  <span style="color: var(--status-green); font-weight: 700;">✓</span> Mutual Non-Disclosure Agreement (NDA) support
                </div>
                <div style="display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-primary);">
                  <span style="color: var(--status-green); font-weight: 700;">✓</span> 100% In-house Zeiss CMM QA reporting included
                </div>
                <div style="display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-primary);">
                  <span style="color: var(--status-green); font-weight: 700;">✓</span> Prototype (5-7 days) to high-volume Tier-1 schedules
                </div>
              </div>

              <div style="display: flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
                <button type="button" class="btn btn-primary btn-lg trigger-rfq-modal" style="width: 100%;">
                  <span>Launch 5-Step RFQ Wizard</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>

                <button type="button" class="btn btn-secondary btn-lg trigger-tour-modal" style="width: 100%;">
                  <span>Book Plant Tour</span>
                </button>
              </div>
            </div>

            <!-- Direct Contact Channels & Plant Locations -->
            <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 100%; box-sizing: border-box;">
              <!-- Direct Hotlines & Prince Singh Profile -->
              <div class="tech-card">
                <div style="display: flex; align-items: center; gap: 1.25rem; margin-bottom: 1.5rem; padding-bottom: 1.25rem; border-bottom: 1px solid var(--border-color);">
                  <div style="width: 72px; height: 72px; border-radius: 50%; overflow: hidden; border: 2px solid var(--brand-blue); flex-shrink: 0; box-shadow: 0 4px 12px rgba(11,58,102,0.12);">
                    <img 
                      src="/images/prince_singh.jpg" 
                      alt="Prince Singh" 
                      style="width: 100%; height: 100%; object-fit: cover; object-position: top center;"
                    />
                  </div>
                  <div>
                    <h3 style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 0.2rem;">Prince Singh</h3>
                    <div style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--brand-blue); font-weight: 700;">
                      Founder & Managing Director
                    </div>
                    <div style="font-size: 0.78rem; color: var(--text-muted);">
                      Forgeworks Components Pvt. Ltd.
                    </div>
                  </div>
                </div>

                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--brand-blue); font-weight: 700; margin-bottom: 1rem;">
                  DIRECT COMMUNICATIONS DESK
                </div>

                <div style="display: flex; flex-direction: column; gap: 1.1rem;">
                  <div>
                    <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); display: block;">ENGINEERING & RFQ EMAIL:</span>
                    <a href="mailto:helloforgeworks@gmail.com" style="color: var(--brand-blue); font-family: var(--font-mono); font-size: clamp(0.95rem, 3.5vw, 1.1rem); font-weight: 700; word-break: break-all;">
                      helloforgeworks@gmail.com
                    </a>
                  </div>

                  <div>
                    <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); display: block;">DIRECT HOTLINE / WHATSAPP:</span>
                    <div style="display: flex; flex-direction: column; gap: 0.35rem; margin-top: 0.25rem;">
                      <a href="tel:+918810656549" style="color: var(--text-primary); font-family: var(--font-mono); font-size: 1.05rem; font-weight: 700;">
                        +91 8810656549 (Prince Singh · Direct & RFQ)
                      </a>
                    </div>
                  </div>

                  <div>
                    <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); display: block;">OPERATING HOURS:</span>
                    <span style="font-size: 0.85rem; color: var(--text-secondary); font-weight: 500;">${contact.hours}</span>
                  </div>
                </div>
              </div>

              <!-- Locations List -->
              <div class="tech-card">
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--brand-blue); font-weight: 700; margin-bottom: 1rem;">
                  NOIDA & NCR MANUFACTURING LOCATIONS
                </div>

                <div style="display: flex; flex-direction: column; gap: 1.1rem;">
                  ${contact.locations.map(loc => `
                    <div style="border-bottom: 1px solid var(--border-color-subtle); padding-bottom: 0.65rem;">
                      <strong style="color: var(--text-primary); font-size: 0.88rem; display: block; margin-bottom: 0.2rem;">
                        ${loc.name}
                      </strong>
                      <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--brand-blue); font-weight: 600; display: block; margin-bottom: 0.25rem;">
                        ${loc.type}
                      </span>
                      <span style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; display: block;">
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
