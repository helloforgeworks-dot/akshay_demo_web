import { COMPANY_DATA } from '../data/companyData.js';

export function renderAboutPage() {
  return `
    <main class="page-content">
      <!-- Page Header -->
      <section class="section-py" style="background: radial-gradient(circle at 50% 0%, #171B24 0%, #0A0B0E 100%); border-bottom: 1px solid var(--steel-border); padding-top: 5rem; padding-bottom: 5rem;">
        <div class="container">
          <div style="max-width: 820px;">
            <div class="tech-tag" style="margin-bottom: 1rem;">
              <span class="pulse-dot"></span> ABHANG GROUP HERITAGE · FOUNDED 1996
            </div>
            <h1 style="font-size: clamp(2.4rem, 5vw, 4rem); margin-bottom: 1.5rem; line-height: 1.1;">
              Decades of Manufacturing Discipline. One Unified Standard.
            </h1>
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary);">
              Primeline Components Pvt Ltd (PLC) represents the culmination of 25+ years of precision engineering across the Abhang Group. From early polymer tooling in 1996 to Tier-1 aerospace and oil & gas CNC machining today.
            </p>
          </div>
        </div>
      </section>

      <!-- 1. GROUP HERITAGE INTERACTIVE TIMELINE -->
      <section class="section-py">
        <div class="container">
          <div class="section-header">
            <div class="tech-tag">GROUP EVOLUTION</div>
            <h2 class="section-title">The Journey from Toolroom to Tier-1 OEM Supplier</h2>
            <p class="section-desc">
              Every stage of our evolution reflects strategic investments in higher tolerances, heavier CNC machinery, and social inclusion.
            </p>
          </div>

          <div style="position: relative; display: flex; flex-direction: column; gap: 2.5rem; padding-left: 2rem; border-left: 2px solid var(--steel-border); max-width: 900px; margin: 0 auto;">
            ${COMPANY_DATA.heritageTimeline.map((item) => `
              <div style="position: relative;">
                <!-- Timeline Dot -->
                <div style="position: absolute; left: -2.7rem; top: 0; width: 20px; height: 20px; border-radius: 50%; background: #0E1014; border: 3px solid var(--accent-bronze); box-shadow: 0 0 10px var(--accent-bronze-glow);"></div>

                <div style="background: #11141A; border: 1px solid var(--steel-border); padding: 2rem; border-radius: var(--border-radius-sm);">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
                    <span style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; color: var(--accent-bronze);">
                      ${item.year}
                    </span>
                    <span class="tech-tag" style="font-size: 0.65rem;">${item.highlight}</span>
                  </div>

                  <h3 style="font-size: 1.3rem; margin-bottom: 0.25rem;">${item.title}</h3>
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 1rem;">
                    ${item.subtitle}
                  </div>

                  <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.75;">
                    ${item.description}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <hr class="section-divider">

      <!-- 2. CHAIRMAN'S & EXECUTIVE MESSAGE -->
      <section class="section-py" style="background: #0C0E12;">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: clamp(2rem, 5vw, 4.5rem); align-items: center;">
            <div style="background: #12151C; border: 1px solid var(--steel-border-highlight); padding: 2.5rem; text-align: center; position: relative;">
              <div style="width: 90px; height: 90px; border-radius: 50%; background: #1C2028; border: 2px solid var(--accent-bronze); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto;">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#C98A4B" stroke-width="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              <h3 style="font-size: 1.3rem; margin-bottom: 0.35rem;">Executive Leadership</h3>
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-bronze); text-transform: uppercase; margin-bottom: 1.25rem;">
                Primeline Components Pvt. Ltd. · Abhang Group
              </div>

              <p style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; line-height: 1.7;">
                "Precision engineering is not merely an operational department — it is a discipline where trust is calibrated in microns."
              </p>
            </div>

            <div>
              <div class="tech-tag" style="margin-bottom: 1rem;">EXECUTIVE MESSAGE</div>
              <h2 style="font-size: clamp(1.9rem, 3.2vw, 2.7rem); line-height: 1.15; margin-bottom: 1.5rem;">
                A Pledge to Precision and Global Reliability
              </h2>
              <blockquote style="font-size: 1.05rem; line-height: 1.85; color: var(--text-primary); margin-bottom: 1.5rem; border-left: 3px solid var(--accent-bronze); padding-left: 1.25rem;">
                ${COMPANY_DATA.leadership.message}
              </blockquote>
              <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-bronze); font-weight: 700;">
                — BOARD OF DIRECTORS, PRIMELINE COMPONENTS PVT. LTD.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. VISION, MISSION & QUALITY PILLARS -->
      <section class="section-py">
        <div class="container">
          <div class="section-header center">
            <div class="tech-tag">GOVERNANCE & STANDARDS</div>
            <h2 class="section-title">Vision, Mission & Quality Policy</h2>
            <p class="section-desc">
              Guided by statistical rigor, zero-defect manufacturing, and unwavering adherence to OEM specifications.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
            <div class="tech-card">
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-bronze); font-weight: 700; margin-bottom: 0.5rem;">
                OUR VISION
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Global Benchmark in Precision</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7;">
                To be the most trusted, engineering-first Tier-1 manufacturing partner globally for mission-critical valve, automotive, aerospace, and hydraulic systems.
              </p>
            </div>

            <div class="tech-card">
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-bronze); font-weight: 700; margin-bottom: 0.5rem;">
                OUR MISSION
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Flawless Execution in Every Micron</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7;">
                To deliver zero-defect precision machined parts, advanced assemblies, and rapid tooling solutions through state-of-the-art multi-axis CNC technology and empowered engineering talent.
              </p>
            </div>

            <div class="tech-card">
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-bronze); font-weight: 700; margin-bottom: 0.5rem;">
                QUALITY POLICY
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">APQP & Statistical Control</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7;">
                Committed to ISO 9001:2015 and IATF standards with 100% material traceability (EN 10204 3.1), Poka-Yoke error proofing, and continuous shopfloor capability enhancement (Cpk > 1.67).
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr class="section-divider">

      <!-- 4. SHIVLEELA WOMEN'S INITIATIVE SPOTLIGHT -->
      <section class="section-py" style="background: #0D0F14;">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1.1fr 1fr; gap: clamp(2rem, 5vw, 4.5rem); align-items: center;">
            <div>
              <div class="tech-tag success" style="margin-bottom: 1rem;">
                <span class="pulse-dot"></span> SOCIAL EMPOWERMENT & MAKE IN INDIA
              </div>
              <h2 style="font-size: clamp(2rem, 3.5vw, 2.8rem); line-height: 1.15; margin-bottom: 1.5rem;">
                Shivleela Engineering: Breaking Stereotypes in CNC Machining
              </h2>
              <p style="font-size: 1rem; line-height: 1.8; margin-bottom: 1.25rem;">
                ${COMPANY_DATA.careers.shivleelaStory}
              </p>
              <p style="font-size: 0.92rem; line-height: 1.8; margin-bottom: 2rem; color: var(--text-muted);">
                Our Shivleela unit in Talegaon MIDC has trained and certified dozens of women in multi-axis CNC programming, Zeiss CMM inspection software, and high-precision assembly — creating sustainable industrial careers and redefining manufacturing inclusivity.
              </p>

              <div style="display: flex; gap: 1rem;">
                <a href="/careers" class="btn btn-primary btn-sm nav-route" data-path="/careers">
                  <span>Explore Careers & Training</span>
                </a>
              </div>
            </div>

            <div style="background: #13161D; border: 1px solid var(--steel-border-highlight); padding: 2.25rem;">
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-bronze); font-weight: 700; margin-bottom: 1rem;">
                SHIVLEELA INITIATIVE HIGHLIGHTS
              </div>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div style="padding-bottom: 0.75rem; border-bottom: 1px solid var(--steel-border);">
                  <strong style="color: var(--text-primary); font-size: 0.9rem; display: block;">100% Women-Operated QA Metrology Cells</strong>
                  <span style="font-size: 0.8rem; color: var(--text-muted);">Dedicated CMM and optical profile measurement routines led by trained women engineers.</span>
                </div>
                <div style="padding-bottom: 0.75rem; border-bottom: 1px solid var(--steel-border);">
                  <strong style="color: var(--text-primary); font-size: 0.9rem; display: block;">Vocational Apprenticeship in CNC/VMC</strong>
                  <span style="font-size: 0.8rem; color: var(--text-muted);">Structured hands-on training in Fanuc/Siemens controllers, tool offset compensation, and GD&T.</span>
                </div>
                <div>
                  <strong style="color: var(--text-primary); font-size: 0.9rem; display: block;">Safe & Ergonomic Industrial Environment</strong>
                  <span style="font-size: 0.8rem; color: var(--text-muted);">State-of-the-art mist collectors, automated pallet changers, and climate-controlled shopfloor.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. CERTIFICATIONS VAULT WITH DOWNLOADABLE CARDS -->
      <section class="section-py">
        <div class="container">
          <div class="section-header center">
            <div class="tech-tag">CERTIFICATIONS VAULT</div>
            <h2 class="section-title">Verified Credentials & Accreditations</h2>
            <p class="section-desc">
              Download our current ISO 9001:2015 and IATF compliance certifications for your vendor evaluation audit.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            ${COMPANY_DATA.certifications.map(c => `
              <div class="tech-card" style="display: flex; flex-direction: column;">
                <div class="tech-tag" style="margin-bottom: 1rem; font-size: 0.68rem;">${c.badge}</div>
                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">${c.code}</h3>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-bottom: 1rem;">
                  ISSUER: ${c.issuer}
                </div>
                <p style="font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
                  ${c.scope}
                </p>

                <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--steel-border); display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--status-green);">● ${c.validity}</span>
                  <button type="button" class="btn btn-outline-bronze btn-sm trigger-profile-modal">
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
