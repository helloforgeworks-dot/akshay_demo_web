import { COMPANY_DATA } from '../data/companyData.js';

export function renderAboutPage() {
  return `
    <main class="page-content">
      <!-- Page Header -->
      <section class="page-header-white">
        <div class="container">
          <div style="max-width: 820px; width: 100%;">
            <div class="tech-tag" style="margin-bottom: 1rem;">
              <span class="pulse-dot"></span> ABHANG GROUP HERITAGE · FOUNDED 1996
            </div>
            <h1 style="font-size: clamp(2.2rem, 5vw, 3.8rem); margin-bottom: 1.25rem; line-height: 1.1; color: var(--text-primary);">
              Decades of Manufacturing Discipline. <span style="color: var(--brand-blue);">One Unified Standard.</span>
            </h1>
            <p style="font-size: 1.05rem; line-height: 1.75; color: var(--text-secondary); max-width: 100%;">
              Primeline Components Pvt Ltd (PLC) represents the culmination of 25+ years of precision engineering across the Abhang Group. From early polymer tooling in 1996 to Tier-1 aerospace and oil & gas CNC machining today.
            </p>
          </div>
        </div>
      </section>

      <!-- 1. GROUP HERITAGE INTERACTIVE TIMELINE -->
      <section class="section-py" style="background: #FFFFFF;">
        <div class="container">
          <div class="section-header">
            <div class="tech-tag" style="margin-bottom: 0.75rem;">GROUP EVOLUTION</div>
            <h2 class="section-title">The Journey from Toolroom to Tier-1 OEM Supplier</h2>
            <p class="section-desc">
              Every stage of our evolution reflects strategic investments in higher tolerances, heavier CNC machinery, and social inclusion.
            </p>
          </div>

          <div class="timeline-container">
            ${COMPANY_DATA.heritageTimeline.map((item) => `
              <div class="timeline-item">
                <!-- Timeline Dot -->
                <div class="timeline-dot"></div>

                <div class="timeline-card">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
                    <span style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: var(--brand-blue);">
                      ${item.year}
                    </span>
                    <span class="tech-tag" style="font-size: 0.68rem; background: #FFFFFF;">${item.highlight}</span>
                  </div>

                  <h3 style="font-size: 1.25rem; margin-bottom: 0.25rem; color: var(--text-primary);">${item.title}</h3>
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.85rem;">
                    ${item.subtitle}
                  </div>

                  <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.75;">
                    ${item.description}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 2. CHAIRMAN'S & EXECUTIVE MESSAGE -->
      <section class="section-py" style="background: var(--bg-secondary); border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
        <div class="container">
          <div class="exec-message-grid">
            <div style="background: #FFFFFF; border: 1px solid var(--border-color); padding: clamp(1.5rem, 3vw, 2.5rem); text-align: center; box-shadow: 0 8px 24px rgba(11,58,102,0.05); width: 100%; box-sizing: border-box;">
              <div style="width: 76px; height: 76px; border-radius: 50%; background: var(--bg-light-blue); border: 2px solid var(--brand-blue); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto; color: var(--brand-blue);">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              <h3 style="font-size: 1.25rem; margin-bottom: 0.35rem; color: var(--text-primary);">Executive Leadership</h3>
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--brand-blue); text-transform: uppercase; font-weight: 700; margin-bottom: 1rem;">
                Primeline Components Pvt. Ltd. · Abhang Group
              </div>

              <p style="font-size: 0.88rem; color: var(--text-secondary); font-style: italic; line-height: 1.7;">
                "Precision engineering is not merely an operational department — it is a discipline where trust is calibrated in microns."
              </p>
            </div>

            <div style="width: 100%; box-sizing: border-box;">
              <div class="tech-tag" style="margin-bottom: 1rem;">EXECUTIVE MESSAGE</div>
              <h2 style="font-size: clamp(1.8rem, 3.2vw, 2.6rem); line-height: 1.15; margin-bottom: 1.25rem; color: var(--text-primary);">
                A Pledge to Precision and Global Reliability
              </h2>
              <blockquote style="font-size: 1.02rem; line-height: 1.8; color: var(--text-primary); margin-bottom: 1.25rem; border-left: 3px solid var(--brand-blue); padding-left: 1.15rem;">
                ${COMPANY_DATA.leadership.message}
              </blockquote>
              <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--brand-blue); font-weight: 700;">
                — BOARD OF DIRECTORS, PRIMELINE COMPONENTS PVT. LTD.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. VISION, MISSION & QUALITY PILLARS -->
      <section class="section-py" style="background: #FFFFFF;">
        <div class="container">
          <div class="section-header center">
            <div class="tech-tag" style="margin-bottom: 0.75rem;">GOVERNANCE & STANDARDS</div>
            <h2 class="section-title">Vision, Mission & Quality Policy</h2>
            <p class="section-desc">
              Guided by statistical rigor, zero-defect manufacturing, and unwavering adherence to OEM specifications.
            </p>
          </div>

          <div class="governance-grid">
            <div class="tech-card">
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--brand-blue); font-weight: 700; margin-bottom: 0.5rem;">
                OUR VISION
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem; color: var(--text-primary);">Global Benchmark in Precision</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7;">
                To be the most trusted, engineering-first Tier-1 manufacturing partner globally for mission-critical valve, automotive, aerospace, and hydraulic systems.
              </p>
            </div>

            <div class="tech-card">
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--brand-blue); font-weight: 700; margin-bottom: 0.5rem;">
                OUR MISSION
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem; color: var(--text-primary);">Flawless Execution in Every Micron</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7;">
                To deliver zero-defect precision machined parts, advanced assemblies, and rapid tooling solutions through state-of-the-art multi-axis CNC technology and empowered engineering talent.
              </p>
            </div>

            <div class="tech-card">
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--brand-blue); font-weight: 700; margin-bottom: 0.5rem;">
                QUALITY POLICY
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem; color: var(--text-primary);">APQP & Statistical Control</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7;">
                Committed to ISO 9001:2015 and IATF standards with 100% material traceability (EN 10204 3.1), Poka-Yoke error proofing, and continuous shopfloor capability enhancement (Cpk > 1.67).
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. SHIVLEELA WOMEN'S INITIATIVE SPOTLIGHT -->
      <section class="section-py" style="background: var(--bg-light-blue); border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
        <div class="container">
          <div class="shivleela-split-grid">
            <div style="width: 100%; box-sizing: border-box;">
              <div class="tech-tag success" style="margin-bottom: 1rem; background: #FFFFFF;">
                <span class="pulse-dot"></span> SOCIAL EMPOWERMENT & MAKE IN INDIA
              </div>
              <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); line-height: 1.15; margin-bottom: 1.25rem; color: var(--text-primary);">
                Shivleela Engineering: Breaking Stereotypes in CNC Machining
              </h2>
              <p style="font-size: 0.98rem; line-height: 1.8; margin-bottom: 1.1rem; color: var(--text-secondary);">
                ${COMPANY_DATA.careers.shivleelaStory}
              </p>
              <p style="font-size: 0.9rem; line-height: 1.75; margin-bottom: 1.75rem; color: var(--text-secondary);">
                Our Shivleela unit in Talegaon MIDC has trained and certified dozens of women in multi-axis CNC programming, Zeiss CMM inspection software, and high-precision assembly — creating sustainable industrial careers and redefining manufacturing inclusivity.
              </p>

              <div>
                <a href="/careers" class="btn btn-primary btn-sm nav-route" data-path="/careers">
                  <span>Explore Careers & Training</span>
                </a>
              </div>
            </div>

            <div style="background: #FFFFFF; border: 1px solid var(--border-color); padding: clamp(1.5rem, 3vw, 2.25rem); box-shadow: 0 8px 24px rgba(11,58,102,0.06); width: 100%; box-sizing: border-box;">
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--brand-blue); font-weight: 700; margin-bottom: 1rem;">
                SHIVLEELA INITIATIVE HIGHLIGHTS
              </div>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div style="padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
                  <strong style="color: var(--text-primary); font-size: 0.9rem; display: block; margin-bottom: 0.25rem;">100% Women-Operated QA Metrology Cells</strong>
                  <span style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.6;">Dedicated CMM and optical profile measurement routines led by trained women engineers.</span>
                </div>
                <div style="padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
                  <strong style="color: var(--text-primary); font-size: 0.9rem; display: block; margin-bottom: 0.25rem;">Vocational Apprenticeship in CNC/VMC</strong>
                  <span style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.6;">Structured hands-on training in Fanuc/Siemens controllers, tool offset compensation, and GD&T.</span>
                </div>
                <div>
                  <strong style="color: var(--text-primary); font-size: 0.9rem; display: block; margin-bottom: 0.25rem;">Safe & Ergonomic Industrial Environment</strong>
                  <span style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.6;">State-of-the-art mist collectors, automated pallet changers, and climate-controlled shopfloor.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. CERTIFICATIONS VAULT WITH DOWNLOADABLE CARDS -->
      <section class="section-py" style="background: #FFFFFF;">
        <div class="container">
          <div class="section-header center">
            <div class="tech-tag" style="margin-bottom: 0.75rem;">CERTIFICATIONS VAULT</div>
            <h2 class="section-title">Verified Credentials & Accreditations</h2>
            <p class="section-desc">
              Download our current ISO 9001:2015 and IATF compliance certifications for your vendor evaluation audit.
            </p>
          </div>

          <div class="governance-grid">
            ${COMPANY_DATA.certifications.map(c => `
              <div class="tech-card" style="display: flex; flex-direction: column;">
                <div class="tech-tag" style="margin-bottom: 1rem; font-size: 0.68rem;">${c.badge}</div>
                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--text-primary);">${c.code}</h3>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-bottom: 1rem;">
                  ISSUER: ${c.issuer}
                </div>
                <p style="font-size: 0.86rem; color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.65;">
                  ${c.scope}
                </p>

                <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; width: 100%; box-sizing: border-box;">
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--status-green); font-weight: 700;">● ${c.validity}</span>
                  <button type="button" class="btn btn-secondary btn-sm trigger-profile-modal">
                    <span>Inspect Cert</span>
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
