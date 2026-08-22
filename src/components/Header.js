/**
 * Header Component for Primeline Components Pvt Ltd
 * Tier-1 Precision Engineering — White & Engineering Blue Aesthetic
 */
export function renderHeader(currentPath = '/') {
  return `
    <header class="site-header" id="main-header">
      <div class="container header-inner">
        <a href="/" class="brand-logo-wrap nav-route" data-path="/">
          <div class="brand-logo-mark">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B3A66" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div class="brand-title-group">
            <span class="brand-name">PRIMELINE <span>COMPONENTS</span></span>
            <span class="brand-sub">ABHANG GROUP · PUNE INDIA</span>
          </div>
        </a>

        <nav class="desktop-nav">
          <ul class="nav-menu">
            <li>
              <a href="/" class="nav-link nav-route ${currentPath === '/' ? 'active' : ''}" data-path="/">
                OVERVIEW
              </a>
            </li>
            <li>
              <a href="/about" class="nav-link nav-route ${currentPath === '/about' ? 'active' : ''}" data-path="/about">
                ABOUT
              </a>
            </li>
            <li>
              <a href="/capabilities" class="nav-link nav-route ${currentPath === '/capabilities' ? 'active' : ''}" data-path="/capabilities">
                CAPABILITIES
              </a>
            </li>
            <li class="nav-dropdown-item">
              <a href="/products" class="nav-link nav-route ${currentPath === '/products' ? 'active' : ''}" data-path="/products">
                <span>PRODUCTS & INDUSTRIES</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 2px;">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <div class="nav-dropdown-menu">
                <a href="/products" class="nav-dropdown-link nav-route" data-path="/products">
                  <span class="dropdown-link-code">01</span>
                  <span>Automotive & EV Powertrain</span>
                </a>
                <a href="/products" class="nav-dropdown-link nav-route" data-path="/products">
                  <span class="dropdown-link-code">02</span>
                  <span>Oil & Gas (API 6D Valve Trims)</span>
                </a>
                <a href="/products" class="nav-dropdown-link nav-route" data-path="/products">
                  <span class="dropdown-link-code">03</span>
                  <span>Defence & Aerospace Parts</span>
                </a>
                <a href="/products" class="nav-dropdown-link nav-route" data-path="/products">
                  <span class="dropdown-link-code">04</span>
                  <span>Hydraulics & Fluid Power</span>
                </a>
                <a href="/products" class="nav-dropdown-link nav-route" data-path="/products">
                  <span class="dropdown-link-code">05</span>
                  <span>Technical Plastics Moulding</span>
                </a>
              </div>
            </li>
            <li>
              <a href="/infrastructure" class="nav-link nav-route ${currentPath === '/infrastructure' ? 'active' : ''}" data-path="/infrastructure">
                INFRASTRUCTURE
              </a>
            </li>
            <li>
              <a href="/about" class="nav-link nav-route" data-path="/about">
                QUALITY
              </a>
            </li>
            <li>
              <a href="/careers" class="nav-link nav-route ${currentPath === '/careers' ? 'active' : ''}" data-path="/careers">
                CAREERS
              </a>
            </li>
          </ul>
        </nav>

        <div class="header-actions">
          <button type="button" class="btn btn-primary btn-sm trigger-rfq-modal" id="header-rfq-trigger">
            <span>REQUEST A QUOTE</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>

          <button type="button" class="mobile-toggle" id="mobile-menu-toggle" aria-label="Toggle navigation">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-nav-drawer" id="mobile-nav-drawer">
        <div class="mobile-drawer-header">
          <div class="tech-tag" style="margin-bottom: 0.5rem;">
            <span class="pulse-dot"></span> PUNE PRECISION MANUFACTURING HUB
          </div>
        </div>
        <ul class="mobile-nav-links">
          <li><a href="/" class="nav-link nav-route ${currentPath === '/' ? 'active' : ''}" data-path="/">OVERVIEW</a></li>
          <li><a href="/about" class="nav-link nav-route ${currentPath === '/about' ? 'active' : ''}" data-path="/about">ABOUT</a></li>
          <li><a href="/capabilities" class="nav-link nav-route ${currentPath === '/capabilities' ? 'active' : ''}" data-path="/capabilities">CAPABILITIES</a></li>
          <li><a href="/products" class="nav-link nav-route ${currentPath === '/products' ? 'active' : ''}" data-path="/products">PRODUCTS & INDUSTRIES</a></li>
          <li><a href="/infrastructure" class="nav-link nav-route ${currentPath === '/infrastructure' ? 'active' : ''}" data-path="/infrastructure">INFRASTRUCTURE</a></li>
          <li><a href="/about" class="nav-link nav-route" data-path="/about">QUALITY</a></li>
          <li><a href="/careers" class="nav-link nav-route ${currentPath === '/careers' ? 'active' : ''}" data-path="/careers">CAREERS</a></li>
        </ul>
        <div style="margin-top: auto; display: flex; flex-direction: column; gap: 0.75rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">
          <button type="button" class="btn btn-primary trigger-rfq-modal" style="width: 100%;">
            <span>REQUEST A QUOTE</span>
          </button>
          <a href="tel:+919130303006" class="btn btn-secondary" style="width: 100%; text-align: center;">
            <span>CALL: +91 9130303006</span>
          </a>
        </div>
      </div>
    </header>
  `;
}


