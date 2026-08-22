/**
 * Job Application Modal Component
 */
export function renderJobApplyModal() {
  return `
    <div class="modal-overlay" id="job-modal-overlay">
      <div class="modal-box" id="job-modal-box" style="max-width: 640px;">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <div class="tech-tag success" style="margin-bottom: 0.35rem;">
              <span class="pulse-dot"></span> ENGINEERING CAREERS PORTAL
            </div>
            <h3 id="job-modal-title">Apply for Engineering Position</h3>
          </div>
          <button type="button" class="modal-close-btn" id="job-modal-close" aria-label="Close modal">
            ✕
          </button>
        </div>

        <div class="modal-body">
          <form id="job-application-form">
            <input type="hidden" id="job-role-input" value="">

            <div class="form-group">
              <label class="form-label">Position Title</label>
              <input type="text" class="form-input" id="job-role-display" readonly style="background: var(--bg-secondary); color: var(--brand-blue); font-weight: 700;">
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Full Name <span class="req">*</span></label>
                <input type="text" class="form-input" id="applicant-name" placeholder="Rajesh K." required>
              </div>
              <div class="form-group">
                <label class="form-label">Contact Number <span class="req">*</span></label>
                <input type="tel" class="form-input" id="applicant-phone" placeholder="+91 9876543210" required>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Email Address <span class="req">*</span></label>
                <input type="email" class="form-input" id="applicant-email" placeholder="rajesh@example.com" required>
              </div>
              <div class="form-group">
                <label class="form-label">Years of Experience <span class="req">*</span></label>
                <input type="text" class="form-input" id="applicant-exp" placeholder="e.g. 5 Years" required>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Key Technical Skills / Machines Operated</label>
              <input type="text" class="form-input" id="applicant-skills" placeholder="e.g. 5-Axis VMC, Fanuc, Zeiss Calypso, SolidWorks, GD&T">
            </div>

            <div class="form-group">
              <label class="form-label">Resume / CV Attachment <span class="req">*</span></label>
              <input type="file" class="form-input" id="applicant-resume" accept=".pdf,.doc,.docx" required>
              <span style="font-size: 0.75rem; color: var(--text-muted);">PDF or DOCX format (Max 10MB)</span>
            </div>

            <div id="job-app-success" style="display: none; background: rgba(30, 142, 62, 0.1); border: 1px solid var(--status-green); padding: 1rem; margin-bottom: 1.5rem; text-align: center;">
              <strong style="color: var(--status-green); display: block; font-family: var(--font-mono); font-size: 0.85rem;">APPLICATION TRANSMITTED SUCCESSFULLY</strong>
              <span style="font-size: 0.82rem; color: var(--text-secondary);">Our HR and Engineering Team at Pune Facility will review your credentials.</span>
            </div>

            <div style="display: flex; justify-content: flex-end; gap: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem; margin-top: 1rem;">
              <button type="button" class="btn btn-secondary btn-sm" id="job-cancel-btn">Cancel</button>
              <button type="submit" class="btn btn-primary btn-sm" id="job-submit-btn">Submit Application</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

export function initJobApplyModalEvents() {
  const overlay = document.getElementById('job-modal-overlay');
  const closeBtn = document.getElementById('job-modal-close');
  const cancelBtn = document.getElementById('job-cancel-btn');
  const form = document.getElementById('job-application-form');
  const roleDisplay = document.getElementById('job-role-display');
  const roleInput = document.getElementById('job-role-input');
  const successBox = document.getElementById('job-app-success');
  const submitBtn = document.getElementById('job-submit-btn');

  function openModal(roleTitle = 'Engineering Position') {
    roleDisplay.value = roleTitle;
    roleInput.value = roleTitle;
    successBox.style.display = 'none';
    submitBtn.style.display = 'block';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.trigger-job-modal');
    if (trigger) {
      const role = trigger.dataset.role || 'Senior CNC / Metrology Engineer';
      openModal(role);
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
      successBox.style.display = 'block';
      submitBtn.style.display = 'none';
      setTimeout(() => {
        closeModal();
      }, 2500);
    });
  }
}
