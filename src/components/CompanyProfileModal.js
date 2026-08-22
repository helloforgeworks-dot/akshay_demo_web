import { COMPANY_DATA } from '../data/companyData.js';

export function renderCompanyProfileModal() {
  return `
    <div class="modal-overlay" id="profile-modal-overlay">
      <div class="modal-box" id="profile-modal-box" style="max-width: 920px;">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <div class="tech-tag" style="margin-bottom: 0.35rem;">
              <span class="pulse-dot"></span> EXECUTIVE CAPABILITY DOSSIER
            </div>
            <h3>Official Corporate & Engineering Profile (PDF)</h3>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <button type="button" class="btn btn-primary btn-sm" id="profile-print-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>Print / Save PDF</span>
            </button>
            <button type="button" class="modal-close-btn" id="profile-modal-close" aria-label="Close modal">
              ✕
            </button>
          </div>
        </div>

        <div class="modal-body" id="printable-company-profile" style="background: #FFFFFF; padding: 2.5rem; border: 1px solid var(--border-color); margin: 1rem 0;">
          <!-- Document Header -->
          <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid var(--brand-blue); padding-bottom: 1.5rem; margin-bottom: 2rem;">
            <div>
              <div style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; letter-spacing: 0.04em; color: var(--text-primary);">
                PRIMELINE COMPONENTS PVT. LTD.
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--brand-blue); letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700;">
                ABHANG GROUP · PUNE INDUSTRIAL BELT, INDIA
              </div>
              <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.4rem;">
                Precision CNC Machining · 5-Axis VMC · Special Processes · Sub-Assemblies · Plastics Tooling
              </div>
            </div>
            <div style="text-align: right; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
              <div>DOC REF: PLC-CORP-2026-V1</div>
              <div>DATE: AUGUST 2026</div>
              <div style="color: var(--status-green); font-weight: 700;">STATUS: VERIFIED TIER-1</div>
            </div>
          </div>

          <!-- Executive Summary -->
          <div style="margin-bottom: 2rem;">
            <div class="tech-tag" style="margin-bottom: 0.75rem;">1.0 EXECUTIVE POSITIONING</div>
            <p style="font-size: 0.92rem; color: var(--text-primary); line-height: 1.8;">
              Primeline Components Pvt Ltd (PLC), backed by 25+ years of collective Abhang Group manufacturing heritage (1996 Raja Plastics → 2010 Abhang Engineering → Shivleela Initiative → 2025 PLC), operates as a premier engineering-led manufacturing partner for global OEMs in Oil & Gas, Aerospace & Defence, Automobile, and Hydraulics.
            </p>
          </div>

          <!-- Verified Key Metrics Matrix -->
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem; background: var(--bg-secondary); padding: 1.25rem; border: 1px solid var(--border-color);">
            <div>
              <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">GROUP HERITAGE</div>
              <div style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; color: var(--brand-blue);">25+ Years</div>
              <div style="font-size: 0.72rem; color: var(--text-secondary);">Founded 1996</div>
            </div>
            <div>
              <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">ADVANCED FLEET</div>
              <div style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; color: var(--brand-blue);">100+ Machines</div>
              <div style="font-size: 0.72rem; color: var(--text-secondary);">CNC / VMC / Lathes</div>
            </div>
            <div>
              <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">ENGINEERING TEAM</div>
              <div style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; color: var(--brand-blue);">100+ Staff</div>
              <div style="font-size: 0.72rem; color: var(--text-secondary);">QA & Programmers</div>
            </div>
            <div>
              <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">TOLERANCE CAPABILITY</div>
              <div style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; color: var(--brand-blue);">±0.002 mm</div>
              <div style="font-size: 0.72rem; color: var(--text-secondary);">Zeiss CMM Certified</div>
            </div>
          </div>

          <!-- Certifications & Standards -->
          <div style="margin-bottom: 2rem;">
            <div class="tech-tag" style="margin-bottom: 0.75rem;">2.0 AUDITED QUALITY CERTIFICATIONS</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 1rem;">
                <strong style="color: var(--text-primary); font-family: var(--font-mono); font-size: 0.85rem; display: block;">ISO 9001:2015 & IAF / KAB ACCREDITED</strong>
                <span style="font-size: 0.8rem; color: var(--text-secondary);">Precision CNC Machined Parts, Assemblies & Moulded Components</span>
              </div>
              <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 1rem;">
                <strong style="color: var(--text-primary); font-family: var(--font-mono); font-size: 0.85rem; display: block;">IATF 16949 COMPLIANT & TUV AUSTRIA</strong>
                <span style="font-size: 0.8rem; color: var(--text-secondary);">Automotive OEM Powertrain & High-Pressure Fluid Trim Conformance</span>
              </div>
            </div>
          </div>

          <!-- Manufacturing Plants -->
          <div style="margin-bottom: 2rem;">
            <div class="tech-tag" style="margin-bottom: 0.75rem;">3.0 INFRASTRUCTURE & PUNE MIDC CAMPUS</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.8;">
              • <strong>Chakan MIDC Plant 1:</strong> 35,000 sq. ft. heavy CNC/VMC machining hall, high-pressure oil & gas valve trim center, and hydrostatic test rig up to 700 bar.<br>
              • <strong>Bhosari MIDC Plant 2:</strong> 25,000 sq. ft. high-volume automotive powertrain and hydraulic spool machining center with cleanroom sub-assembly.<br>
              • <strong>Talegaon MIDC Plant 3:</strong> 20,000 sq. ft. toolroom, plastics injection moulding presses (50T to 350T), and Shivleela Women's Skilled Engineering QA academy.
            </div>
          </div>

          <!-- Official Contact Stamp -->
          <div style="border-top: 1px solid var(--border-color); padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
            <div style="font-size: 0.82rem; color: var(--text-secondary);">
              <strong>Sales & RFQ Desk:</strong> sales@primelinecomponents.in · +91 9130303006 / +91 8956462142<br>
              <strong>Headquarters:</strong> Plot C-18, Chakan Industrial Area, Phase II, MIDC, Pune - 410501 India
            </div>
            <div style="text-align: right; font-family: var(--font-mono); font-size: 0.75rem; color: var(--brand-blue); font-weight: 700;">
              [OFFICIAL SEAL & ENGINEERING AUTHORIZATION]
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initCompanyProfileModalEvents() {
  const overlay = document.getElementById('profile-modal-overlay');
  const closeBtn = document.getElementById('profile-modal-close');
  const printBtn = document.getElementById('profile-print-btn');

  function openModal() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('#footer-profile-btn') || e.target.closest('.trigger-profile-modal')) {
      openModal();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      const content = document.getElementById('printable-company-profile').innerHTML;
      const win = window.open('', '', 'height=900,width=1100');
      win.document.write('<html><head><title>Primeline Components - Official Corporate Profile</title>');
      win.document.write('<style>');
      win.document.write(`
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #fff; color: #111; padding: 40px; }
        .tech-tag { font-family: monospace; font-size: 11px; font-weight: bold; background: #E8F1F8; color: #0B3A66; padding: 4px 8px; border: 1px solid #D9E1E8; display: inline-block; }
      `);
      win.document.write('</style></head><body>');
      win.document.write(content);
      win.document.write('</body></html>');
      win.document.close();
      win.focus();
      setTimeout(() => {
        win.print();
      }, 500);
    });
  }
}
