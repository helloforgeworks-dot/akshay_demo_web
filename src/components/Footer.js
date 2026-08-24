import { COMPANY_DATA } from '../data/companyData.js';

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-top">
        <div class="footer-grid">
          <!-- Col 1: Brand & Philosophy -->
          <div>
            <div class="brand-logo-wrap" style="margin-bottom: 1.25rem;">
              <div class="brand-logo-mark" style="background: rgba(255, 255, 255, 0.1); border-color: rgba(255, 255, 255, 0.2);">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A3D2F8" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div class="brand-title-group">
                <span class="brand-name" style="color: #FFFFFF;">FORGEWORKS <span style="color: #A3D2F8;">COMPONENTS</span></span>
                <span class="brand-sub" style="color: #BED6EB;">PRECISION ENGINEERING · NOIDA UP</span>
              </div>
            </div>
            
            <p style="font-size: 0.88rem; margin-bottom: 1.5rem; max-width: 380px; color: #D1E5F7;">
              "Precision is not a claim here — it's a certification." Tier-1 precision CNC machining, VMC milling, and engineered components for critical global OEMs.
            </p>

            <div style="display: flex; flex-direction: column; gap: 0.6rem;">
              <div class="tech-tag success" style="font-size: 0.68rem; background: rgba(30, 142, 62, 0.2); border-color: rgba(30, 142, 62, 0.4); color: #78E096;">
                <span class="pulse-dot"></span> NOIDA PLANTS OPERATING (3 SHIFTS / 24·7)
              </div>
              <div class="tech-tag neutral" style="font-size: 0.68rem; background: rgba(255, 255, 255, 0.08); border-color: rgba(255, 255, 255, 0.15); color: #D1E5F7;">
                MAKE IN INDIA · SERVING GLOBAL OEMS
              </div>
            </div>
          </div>

          <!-- Col 2: Capabilities -->
          <div>
            <div class="footer-col-title">Capabilities</div>
            <ul class="footer-links">
              <li><a href="/capabilities" class="nav-route" data-path="/capabilities">Precision CNC Machining</a></li>
              <li><a href="/capabilities" class="nav-route" data-path="/capabilities">5-Axis VMC Milling</a></li>
              <li><a href="/capabilities" class="nav-route" data-path="/capabilities">Special Processes & ENP</a></li>
              <li><a href="/capabilities" class="nav-route" data-path="/capabilities">Sub-Assemblies & Testing</a></li>
              <li><a href="/capabilities" class="nav-route" data-path="/capabilities">Plastics Injection Moulding</a></li>
              <li><a href="/capabilities" class="nav-route" data-path="/capabilities">Rapid Prototyping & DFM</a></li>
            </ul>
          </div>

          <!-- Col 3: Product Segments -->
          <div>
            <div class="footer-col-title">Product Segments</div>
            <ul class="footer-links">
              <li><a href="/products" class="nav-route" data-path="/products">Oil & Gas (Valve Parts)</a></li>
              <li><a href="/products" class="nav-route" data-path="/products">Defence & Aerospace</a></li>
              <li><a href="/products" class="nav-route" data-path="/products">Automobile & EV</a></li>
              <li><a href="/products" class="nav-route" data-path="/products">Hydraulic & Fluid Power</a></li>
              <li><a href="/products" class="nav-route" data-path="/products">Plastics Moulded Parts</a></li>
              <li><a href="/infrastructure" class="nav-route" data-path="/infrastructure">Zeiss Metrology Lab</a></li>
            </ul>
          </div>

          <!-- Col 4: Noida Plants & Contact -->
          <div>
            <div class="footer-col-title">Manufacturing Hub</div>
            <div style="font-size: 0.84rem; color: #BED6EB; display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <strong style="color: #FFFFFF; display: block; font-family: var(--font-mono); font-size: 0.76rem;">HEADQUARTERS & PLANT</strong>
                <span>Sector 16, Noida, Uttar Pradesh - 201301, India</span>
              </div>

              <div>
                <strong style="color: #FFFFFF; display: block; font-family: var(--font-mono); font-size: 0.76rem;">DIRECT CONTACT (PRINCE SINGH)</strong>
                <a href="mailto:${COMPANY_DATA.contact.email}" style="color: #A3D2F8; display: block; font-family: var(--font-mono); font-size: 0.8rem;">
                  ${COMPANY_DATA.contact.email}
                </a>
                <a href="tel:+918810656549" style="font-family: var(--font-mono); font-size: 0.8rem; color: #D1E5F7; display: block;">
                  +91 8810656549
                </a>
              </div>

              <div>
                <button type="button" class="btn btn-white-outline btn-sm trigger-profile-modal" id="footer-profile-btn" style="width: 100%;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Company Profile PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <div>
            © ${new Date().getFullYear()} Forgeworks Components Pvt. Ltd. All rights reserved.
          </div>
          <div style="display: flex; gap: 1.5rem; align-items: center;">
            <span>ISO 9001:2015</span>
            <span>·</span>
            <span>IATF COMPLIANT</span>
            <span>·</span>
            <span>TUV AUSTRIA</span>
            <span>·</span>
            <span style="color: #A3D2F8;">NOIDA, UP, INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}

