/**
 * Multi-Step Industrial RFQ (Request for Quote) Modal
 * Step 1: Sector & Component Type
 * Step 2: 2D/3D Drawing & CAD Spec Upload
 * Step 3: Material & Tolerance Grade
 * Step 4: Batch Size & Production Timeline
 * Step 5: OEM Contact, NDA Requirement & Confirmation
 */

export function renderRfqModal() {
  return `
    <div class="modal-overlay" id="rfq-modal-overlay">
      <div class="modal-box" id="rfq-modal-box">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <div class="tech-tag" style="margin-bottom: 0.35rem;">
              <span class="pulse-dot"></span> TIER-1 ENGINEERING RFQ PORTAL
            </div>
            <h3>Request Technical Quotation (RFQ)</h3>
          </div>
          <button type="button" class="modal-close-btn" id="rfq-modal-close" aria-label="Close modal">
            ✕
          </button>
        </div>

        <div class="modal-body">
          <!-- Step Progress -->
          <div class="wizard-steps" id="rfq-wizard-steps">
            <div class="wizard-step-node active" data-step="1">
              <div class="step-circle">01</div>
              <span class="step-title">Sector</span>
            </div>
            <div class="wizard-step-node" data-step="2">
              <div class="step-circle">02</div>
              <span class="step-title">Drawings</span>
            </div>
            <div class="wizard-step-node" data-step="3">
              <div class="step-circle">03</div>
              <span class="step-title">Materials</span>
            </div>
            <div class="wizard-step-node" data-step="4">
              <div class="step-circle">04</div>
              <span class="step-title">Volume</span>
            </div>
            <div class="wizard-step-node" data-step="5">
              <div class="step-circle">05</div>
              <span class="step-title">OEM Info</span>
            </div>
          </div>

          <!-- Step Forms Container -->
          <form id="rfq-multi-step-form">
            <!-- STEP 1: Segment & Component Type -->
            <div class="rfq-step-pane" data-step="1" id="rfq-step-1">
              <div style="margin-bottom: 1.5rem;">
                <h4 style="font-size: 1.1rem; margin-bottom: 0.4rem;">Select Industry Sector & Component Classification</h4>
                <p style="font-size: 0.85rem;">Specify your application requirements for appropriate tooling and QA protocol allocation.</p>
              </div>

              <div class="form-group">
                <label class="form-label">Primary Industry Segment <span class="req">*</span></label>
                <select class="form-select" id="rfq-segment" required>
                  <option value="" disabled selected>-- Select Industry Sector --</option>
                  <option value="oil-gas">Oil & Gas (High-Pressure Valve Trim & Flanges)</option>
                  <option value="defence">Defence & Aerospace (Guidance, Enclosures & Optical Mounts)</option>
                  <option value="automobile">Automobile & EV Powertrain (Fuel Injection & Shafts)</option>
                  <option value="hydraulic">Hydraulic & Fluid Power (Spools & Manifold Blocks)</option>
                  <option value="plastics">Plastics Moulding & Engineering Polymers</option>
                  <option value="custom">Custom Precision Machining / Sub-Assembly</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Component Name or Description <span class="req">*</span></label>
                <input type="text" class="form-input" id="rfq-part-name" placeholder="e.g. 2-Inch Inconel Ball Valve Stem / 5-Axis Guidance Housing" required>
              </div>

              <div class="form-group">
                <label class="form-label">Service Required</label>
                <select class="form-select" id="rfq-service">
                  <option value="cnc-machining">Precision CNC / Turning</option>
                  <option value="vmc-milling">5-Axis / 4-Axis VMC Milling</option>
                  <option value="plastics-moulding">Plastic Injection Moulding</option>
                  <option value="sub-assembly">Full Sub-Assembly & Hydrostatic Testing</option>
                  <option value="rapid-prototyping">Rapid Prototyping (5-7 Day Pilot)</option>
                </select>
              </div>
            </div>

            <!-- STEP 2: Drawings & CAD Upload -->
            <div class="rfq-step-pane" data-step="2" id="rfq-step-2" style="display: none;">
              <div style="margin-bottom: 1.5rem;">
                <h4 style="font-size: 1.1rem; margin-bottom: 0.4rem;">Engineering Drawings & Technical Specifications</h4>
                <p style="font-size: 0.85rem;">Upload 2D drawings (PDF / DWG / DXF) and 3D CAD models (STEP / IGES / Parasolid / SLDPRT).</p>
              </div>

              <div class="dropzone-box" id="rfq-dropzone">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C98A4B" stroke-width="1.5" style="margin-bottom: 0.8rem;">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 600; margin-bottom: 0.25rem;">
                  DRAG & DROP CAD OR DRAWING FILES HERE
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 1rem;">
                  Supports: .STEP, .STP, .IGES, .IGS, .SLDPRT, .DXF, .DWG, .PDF (Max 50MB)
                </div>
                <input type="file" id="rfq-file-input" style="display: none;" multiple accept=".step,.stp,.iges,.igs,.sldprt,.dxf,.dwg,.pdf,.zip">
                <button type="button" class="btn btn-secondary btn-sm" id="rfq-browse-btn">
                  Browse Files from Computer
                </button>
              </div>

              <div id="rfq-file-list" style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                <!-- Dynamically populated files -->
              </div>

              <div class="form-group" style="margin-top: 1.25rem;">
                <label class="form-label">Critical Notes / GD&T Standards / Special Callouts</label>
                <textarea class="form-textarea" id="rfq-notes" rows="3" placeholder="Specify key datum requirements, surface roughness (e.g. Ra 0.2 µm), concentricity or non-destructive testing (NDT) mandates..."></textarea>
              </div>
            </div>

            <!-- STEP 3: Material & Tolerance Grade -->
            <div class="rfq-step-pane" data-step="3" id="rfq-step-3" style="display: none;">
              <div style="margin-bottom: 1.5rem;">
                <h4 style="font-size: 1.1rem; margin-bottom: 0.4rem;">Material Alloy & Dimensional Tolerance</h4>
                <p style="font-size: 0.85rem;">Select raw material specification and required machining precision grade.</p>
              </div>

              <div class="form-group">
                <label class="form-label">Material Alloy Family <span class="req">*</span></label>
                <select class="form-select" id="rfq-material" required>
                  <option value="" disabled selected>-- Select Material Specification --</option>
                  <option value="inconel">Inconel 718 / 625 / Superalloys</option>
                  <option value="stainless-duplex">Stainless Steel (SS316L, SS304, Duplex 2205, Super Duplex 2507)</option>
                  <option value="titanium">Titanium Grade 5 (Ti-6Al-4V) / Grade 2</option>
                  <option value="alloy-steel">Alloy Steels (AISI 4140, 4340, 8620, EN24, EN19)</option>
                  <option value="aluminum">Aerospace Aluminum (7075-T6, 2024, 6061-T6, 6082)</option>
                  <option value="brass-copper">Brass CW614N / Phosphor Bronze / Copper</option>
                  <option value="engineering-plastics">Engineering Polymers (PEEK, POM/Delrin, PA66-GF30, PPS)</option>
                  <option value="client-supplied">Free-Issue / Client-Supplied Forgings or Castings</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Tightest Required Linear Tolerance <span class="req">*</span></label>
                <select class="form-select" id="rfq-tolerance" required>
                  <option value="±0.002mm">Ultra-Precision: ±0.002 mm (2 µm) [Zeiss CMM Certified]</option>
                  <option value="±0.005mm" selected>High-Precision: ±0.005 mm (5 µm)</option>
                  <option value="±0.010mm">Precision Standard: ±0.010 mm (10 µm)</option>
                  <option value="±0.025mm">Standard Machining: ±0.025 mm (25 µm)</option>
                  <option value="±0.050mm">General Fabrication: ±0.050 mm</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Secondary Surface Treatment</label>
                <select class="form-select" id="rfq-surface-treatment">
                  <option value="none">As Machined / Bare Metal</option>
                  <option value="electroless-nickel">Electroless Nickel Plating (ENP)</option>
                  <option value="hard-anodize">Hard Anodizing (MIL-A-8625 Type III)</option>
                  <option value="passivation">Chemical Passivation (ASTM A967)</option>
                  <option value="heat-treatment">Vacuum Heat Treatment / Nitriding</option>
                  <option value="black-oxide">Black Oxide / Phosphate Coating</option>
                </select>
              </div>
            </div>

            <!-- STEP 4: Quantity & Timeline -->
            <div class="rfq-step-pane" data-step="4" id="rfq-step-4" style="display: none;">
              <div style="margin-bottom: 1.5rem;">
                <h4 style="font-size: 1.1rem; margin-bottom: 0.4rem;">Production Volume & Schedule</h4>
                <p style="font-size: 0.85rem;">Define sample validation batch, annual volume, and target delivery requirements.</p>
              </div>

              <div class="form-group">
                <label class="form-label">Initial Order Quantity / Batch Size <span class="req">*</span></label>
                <select class="form-select" id="rfq-quantity" required>
                  <option value="prototype">Prototype / First Article Sample (1 - 10 pcs)</option>
                  <option value="pilot">Pilot Production Run (20 - 250 pcs)</option>
                  <option value="medium">Medium Production (500 - 5,000 pcs / year)</option>
                  <option value="high-volume">High-Volume Tier-1 Contract (10,000 - 500,000+ pcs / year)</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Target Delivery Timeline <span class="req">*</span></label>
                <select class="form-select" id="rfq-timeline" required>
                  <option value="express-7">Express Rapid Prototyping (5 - 7 Days)</option>
                  <option value="standard-2-3-weeks" selected>Standard Pilot Lead Time (2 - 3 Weeks)</option>
                  <option value="scheduled-blanket">Scheduled Blanket KanBan / Monthly Schedule</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Packaging & Quality Documentation Level</label>
                <select class="form-select" id="rfq-qa-level">
                  <option value="standard">Standard Dimensional CMM Report + Material MTC 3.1</option>
                  <option value="ppap-level-3">Full Automotive PPAP Level 3 (PSW, FMEA, MSA, Control Plan)</option>
                  <option value="aerospace-coc">Aerospace Certificate of Conformity (EN 10204 3.2 + NDT)</option>
                </select>
              </div>
            </div>

            <!-- STEP 5: Contact & NDA Request -->
            <div class="rfq-step-pane" data-step="5" id="rfq-step-5" style="display: none;">
              <div style="margin-bottom: 1.5rem;">
                <h4 style="font-size: 1.1rem; margin-bottom: 0.4rem;">OEM / Enterprise Contact Details</h4>
                <p style="font-size: 0.85rem;">Our Pune engineering estimation desk will deliver a comprehensive DFM and price proposal within 24 hours.</p>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label class="form-label">Your Name <span class="req">*</span></label>
                  <input type="text" class="form-input" id="rfq-contact-name" placeholder="e.g. Rajesh Sharma / John Doe" required>
                </div>
                <div class="form-group">
                  <label class="form-label">Company / OEM Name <span class="req">*</span></label>
                  <input type="text" class="form-input" id="rfq-company-name" placeholder="e.g. Larsen & Toubro / GE / Cummins" required>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label class="form-label">Corporate Email <span class="req">*</span></label>
                  <input type="email" class="form-input" id="rfq-email" placeholder="name@company.com" required>
                </div>
                <div class="form-group">
                  <label class="form-label">Direct Phone / WhatsApp <span class="req">*</span></label>
                  <input type="tel" class="form-input" id="rfq-phone" placeholder="+91 9876543210" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Country / Plant Location</label>
                <input type="text" class="form-input" id="rfq-country" placeholder="e.g. Pune, India / Munich, Germany / Houston, USA">
              </div>

              <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: rgba(199, 203, 206, 0.04); border: 1px solid var(--steel-border); margin-bottom: 1.5rem;">
                <input type="checkbox" id="rfq-nda-req" style="accent-color: var(--accent-bronze); width: 18px; height: 18px;">
                <label for="rfq-nda-req" style="font-size: 0.8rem; color: var(--text-secondary); cursor: pointer;">
                  Please execute a Mutual Non-Disclosure Agreement (M-NDA) prior to technical review.
                </label>
              </div>
            </div>

            <!-- Confirmation View (Shown on submit) -->
            <div class="rfq-step-pane" id="rfq-success-pane" style="display: none; text-align: center; padding: 2rem 1rem;">
              <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(56, 193, 114, 0.15); border: 2px solid var(--status-green); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; color: var(--status-green);">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>

              <div class="tech-tag success" style="margin-bottom: 0.75rem;">
                <span class="pulse-dot"></span> RFQ SUBMITTED TO ESTIMATION DESK
              </div>

              <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Quotation Request Registered</h3>
              <p style="font-size: 0.9rem; max-width: 520px; margin: 0 auto 1.5rem auto;">
                Your technical drawing package and parameters have been transmitted to our senior tooling estimation engineers at Pune Chakan Facility.
              </p>

              <div style="background: #0E1014; border: 1px solid var(--steel-border); padding: 1rem 1.5rem; display: inline-block; font-family: var(--font-mono); font-size: 0.85rem; margin-bottom: 1.5rem;">
                REFERENCE ID: <span id="rfq-ref-id" style="color: var(--accent-bronze); font-weight: 700;">PLC-RFQ-2026-8942</span>
              </div>

              <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1.5rem;">
                Direct Engineer Hotline: <strong style="color: var(--text-primary);">+91 9130303006</strong> · <strong style="color: var(--text-primary);">sales@primelinecomponents.in</strong>
              </div>

              <button type="button" class="btn btn-secondary" id="rfq-finish-btn">
                Close Portal
              </button>
            </div>

            <!-- Modal Nav Actions -->
            <div class="modal-actions" id="rfq-action-bar" style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--steel-border); padding-top: 1.5rem; margin-top: 1rem;">
              <button type="button" class="btn btn-secondary btn-sm" id="rfq-prev-btn" style="visibility: hidden;">
                ← Back
              </button>
              
              <div style="display: flex; align-items: center; gap: 1rem;">
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);" id="rfq-step-indicator">
                  STEP 1 OF 5
                </span>
                <button type="button" class="btn btn-primary btn-sm" id="rfq-next-btn">
                  <span>Continue</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

export function initRfqModalEvents() {
  const overlay = document.getElementById('rfq-modal-overlay');
  const closeBtn = document.getElementById('rfq-modal-close');
  const nextBtn = document.getElementById('rfq-next-btn');
  const prevBtn = document.getElementById('rfq-prev-btn');
  const stepIndicator = document.getElementById('rfq-step-indicator');
  const actionBar = document.getElementById('rfq-action-bar');
  const dropzone = document.getElementById('rfq-dropzone');
  const fileInput = document.getElementById('rfq-file-input');
  const browseBtn = document.getElementById('rfq-browse-btn');
  const fileList = document.getElementById('rfq-file-list');
  const finishBtn = document.getElementById('rfq-finish-btn');

  let currentStep = 1;
  const totalSteps = 5;
  const uploadedFiles = [];

  function openModal() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Bind global triggers
  document.addEventListener('click', (e) => {
    if (e.target.closest('#header-rfq-trigger') || 
        e.target.closest('#mobile-rfq-trigger') || 
        e.target.closest('.trigger-rfq-modal')) {
      openModal();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (finishBtn) finishBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Step Navigation
  function updateStepView() {
    for (let i = 1; i <= totalSteps; i++) {
      const pane = document.getElementById(`rfq-step-${i}`);
      const node = document.querySelector(`.wizard-step-node[data-step="${i}"]`);
      if (pane) pane.style.display = i === currentStep ? 'block' : 'none';
      if (node) {
        node.classList.remove('active', 'completed');
        if (i === currentStep) node.classList.add('active');
        else if (i < currentStep) node.classList.add('completed');
      }
    }

    if (prevBtn) {
      prevBtn.style.visibility = currentStep > 1 ? 'visible' : 'hidden';
    }

    if (stepIndicator) {
      stepIndicator.textContent = `STEP ${currentStep} OF ${totalSteps}`;
    }

    if (nextBtn) {
      nextBtn.querySelector('span').textContent = currentStep === totalSteps ? 'Submit RFQ' : 'Continue';
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      // Validate current step fields
      if (currentStep === 1) {
        const seg = document.getElementById('rfq-segment');
        const part = document.getElementById('rfq-part-name');
        if (!seg.value || !part.value.trim()) {
          alert('Please select an industry sector and enter the component name.');
          return;
        }
      } else if (currentStep === 3) {
        const mat = document.getElementById('rfq-material');
        if (!mat.value) {
          alert('Please specify the material alloy.');
          return;
        }
      } else if (currentStep === 5) {
        const name = document.getElementById('rfq-contact-name');
        const company = document.getElementById('rfq-company-name');
        const email = document.getElementById('rfq-email');
        const phone = document.getElementById('rfq-phone');

        if (!name.value.trim() || !company.value.trim() || !email.value.trim() || !phone.value.trim()) {
          alert('Please fill in your name, company, corporate email, and phone number.');
          return;
        }

        // Generate dynamic Ref ID
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        document.getElementById('rfq-ref-id').textContent = `PLC-RFQ-2026-${randomNum}`;

        // Switch to success view
        for (let i = 1; i <= totalSteps; i++) {
          const pane = document.getElementById(`rfq-step-${i}`);
          if (pane) pane.style.display = 'none';
        }
        document.getElementById('rfq-success-pane').style.display = 'block';
        document.getElementById('rfq-wizard-steps').style.display = 'none';
        actionBar.style.display = 'none';
        return;
      }

      if (currentStep < totalSteps) {
        currentStep++;
        updateStepView();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateStepView();
      }
    });
  }

  // File Upload Handlers
  if (browseBtn && fileInput) {
    browseBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      handleFiles(Array.from(e.target.files));
    });
  }

  if (dropzone) {
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files.length) {
        handleFiles(Array.from(e.dataTransfer.files));
      }
    });
  }

  function handleFiles(files) {
    files.forEach(file => {
      uploadedFiles.push(file);
      const row = document.createElement('div');
      row.style.cssText = 'background:#13161C; border:1px solid var(--steel-border); padding:0.6rem 0.85rem; font-family:var(--font-mono); font-size:0.75rem; display:flex; justify-content:space-between; align-items:center;';
      row.innerHTML = `
        <span>📄 ${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)</span>
        <span style="color:var(--status-green);">✓ ATTACHED</span>
      `;
      fileList.appendChild(row);
    });
  }
}
