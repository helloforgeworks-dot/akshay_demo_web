/**
 * Facility Tour Modal Component
 * Book a technical plant visit to Pune MIDC facilities
 */
export function renderFacilityTourModal() {
  return `
    <div class="modal-overlay" id="tour-modal-overlay">
      <div class="modal-box" id="tour-modal-box" style="max-width: 680px;">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <div class="tech-tag" style="margin-bottom: 0.35rem;">
              <span class="pulse-dot"></span> PUNE MIDC TECHNICAL AUDIT
            </div>
            <h3>Schedule Technical Facility Tour</h3>
          </div>
          <button type="button" class="modal-close-btn" id="tour-modal-close" aria-label="Close modal">
            ✕
          </button>
        </div>

        <div class="modal-body">
          <p style="font-size: 0.88rem; margin-bottom: 1.5rem; color: var(--text-secondary);">
            We invite OEM supplier quality engineers, procurement directors, and technical teams to audit our machining halls, Zeiss metrology lab, and cleanroom assembly lines in Pune.
          </p>

          <form id="tour-schedule-form">
            <div class="form-group">
              <label class="form-label">Select Facility to Visit <span class="req">*</span></label>
              <select class="form-select" id="tour-facility" required>
                <option value="chakan">Plant 1 — Chakan MIDC (Heavy CNC, VMC & 700 Bar Hydrostatic Lab)</option>
                <option value="bhosari">Plant 2 — Bhosari MIDC (Automotive Spools & Cleanroom Sub-Assemblies)</option>
                <option value="talegaon">Plant 3 — Talegaon MIDC (Plastics Tooling & Shivleela QA Center)</option>
                <option value="all">Comprehensive Full-Campus Tour (All Pune Units)</option>
              </select>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Preferred Audit Date <span class="req">*</span></label>
                <input type="date" class="form-input" id="tour-date" required>
              </div>
              <div class="form-group">
                <label class="form-label">Number of Visitors <span class="req">*</span></label>
                <select class="form-select" id="tour-delegates" required>
                  <option value="1-2">1 - 2 Engineers</option>
                  <option value="3-5">3 - 5 Delegation Members</option>
                  <option value="6+">6+ Comprehensive Audit Team</option>
                </select>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Lead Engineer / Visitor Name <span class="req">*</span></label>
                <input type="text" class="form-input" id="tour-name" placeholder="John Doe" required>
              </div>
              <div class="form-group">
                <label class="form-label">Company / OEM Organization <span class="req">*</span></label>
                <input type="text" class="form-input" id="tour-company" placeholder="e.g. Siemens / Bosch / Emerson" required>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Corporate Email <span class="req">*</span></label>
                <input type="email" class="form-input" id="tour-email" placeholder="name@company.com" required>
              </div>
              <div class="form-group">
                <label class="form-label">Contact Phone / WhatsApp <span class="req">*</span></label>
                <input type="tel" class="form-input" id="tour-phone" placeholder="+91 9130303006" required>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Specific Technical Focus of Visit</label>
              <input type="text" class="form-input" id="tour-focus" placeholder="e.g. Zeiss CMM verification, Inconel machining capabilities, PPAP audit...">
            </div>

            <div id="tour-success-msg" style="display: none; background: rgba(30, 142, 62, 0.1); border: 1px solid var(--status-green); padding: 1rem; margin-bottom: 1.5rem; text-align: center;">
              <strong style="color: var(--status-green); display: block; font-family: var(--font-mono); font-size: 0.85rem;">FACILITY VISIT REQUEST CONFIRMED</strong>
              <span style="font-size: 0.8rem; color: var(--text-secondary);">Our Plant Operations Directorate will issue visitor access badges and logistics coordinates.</span>
            </div>

            <div style="display: flex; justify-content: flex-end; gap: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem; margin-top: 1rem;">
              <button type="button" class="btn btn-secondary btn-sm" id="tour-cancel-btn">Cancel</button>
              <button type="submit" class="btn btn-primary btn-sm" id="tour-submit-btn">Confirm Visit Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

export function initFacilityTourModalEvents() {
  const overlay = document.getElementById('tour-modal-overlay');
  const closeBtn = document.getElementById('tour-modal-close');
  const cancelBtn = document.getElementById('tour-cancel-btn');
  const form = document.getElementById('tour-schedule-form');
  const successMsg = document.getElementById('tour-success-msg');
  const submitBtn = document.getElementById('tour-submit-btn');

  function openModal() {
    successMsg.style.display = 'none';
    submitBtn.style.display = 'block';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('.trigger-tour-modal')) {
      openModal();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      successMsg.style.display = 'block';
      submitBtn.style.display = 'none';
      setTimeout(() => {
        closeModal();
      }, 2500);
    });
  }
}
