import { COMPANY_DATA } from '../data/companyData.js';

export function renderCareersPage() {
  const careers = COMPANY_DATA.careers;

  return `
    <main class="page-content">
      <!-- Header -->
      <section class="page-header-white">
        <div class="container">
          <div style="max-width: 860px;">
            <div class="tech-tag success" style="margin-bottom: 1rem;">
              <span class="pulse-dot"></span> ENGINEERING EXCELLENCE & INCLUSIVITY
            </div>
            <h1 style="font-size: clamp(2.4rem, 5vw, 3.8rem); margin-bottom: 1.5rem; line-height: 1.1; color: var(--text-primary);">
              ${careers.headline}
            </h1>
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary);">
              ${careers.intro}
            </p>
          </div>
        </div>
      </section>

      <!-- Shivleela Spotlight -->
      <section class="section-py" style="background: var(--bg-light-blue); border-bottom: 1px solid var(--border-color);">
        <div class="container">
          <div style="background: #FFFFFF; border: 1px solid var(--border-color); padding: clamp(2rem, 4vw, 3.5rem); box-shadow: 0 8px 24px rgba(11,58,102,0.06);">
            <div class="tech-tag success" style="margin-bottom: 1rem;">
              THE SHIVLEELA INITIATIVE
            </div>
            <h2 style="font-size: clamp(1.8rem, 3.2vw, 2.5rem); margin-bottom: 1rem; color: var(--text-primary);">
              Empowering Women in Precision CNC Machining & Metrology
            </h2>
            <p style="font-size: 1rem; line-height: 1.8; color: var(--text-secondary); max-width: 920px; margin-bottom: 1.5rem;">
              ${careers.shivleelaStory}
            </p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <div class="tech-tag neutral">100% PAID APPRENTICESHIP</div>
              <div class="tech-tag neutral">ZEISS CALYPSO & GD&T CERTIFICATION</div>
              <div class="tech-tag neutral">SAFE & INCLUSIVE SHOPFLOOR</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Open Engineering Roles -->
      <section class="section-py" style="background: #FFFFFF;">
        <div class="container">
          <div class="section-header">
            <div class="tech-tag" style="margin-bottom: 0.75rem;">OPEN POSITIONS · NOIDA & NCR PLANTS</div>
            <h2 class="section-title">Join Our Precision Engineering Ranks</h2>
            <p class="section-desc">
              Work with the latest 5-axis DMG MORI / Mazak machining centers, Zeiss 3D CMMs, and Tier-1 aerospace/defence projects.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            ${careers.openRoles.map(role => `
              <div class="tech-card" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem;">
                <div style="max-width: 720px;">
                  <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;">
                    <span class="tech-tag" style="font-size: 0.65rem;">${role.department}</span>
                    <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">📍 ${role.location}</span>
                    <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--brand-blue); font-weight: 700;">⏱ ${role.experience}</span>
                  </div>

                  <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem; color: var(--text-primary);">${role.title}</h3>
                  <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem; line-height: 1.7;">
                    ${role.description}
                  </p>
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
                    <strong style="color: var(--text-primary);">KEY SKILLS:</strong> ${role.skills}
                  </div>
                </div>

                <div>
                  <button type="button" class="btn btn-primary btn-sm trigger-job-modal" data-role="${role.title}">
                    <span>Apply for Role</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </main>
  `;
}
