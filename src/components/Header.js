/**
 * Header Component for Primeline Components Pvt Ltd
 */
export function renderHeader(currentPath = '/') {
  const navItems = [
    { path: '/', label: 'Overview' },
    { path: '/about', label: 'About Us' },
    { path: '/capabilities', label: 'Capabilities' },
    { path: '/products', label: 'Products & Sectors' },
    { path: '/infrastructure', label: 'Infrastructure & QA' },
    { path: '/value-addition', label: 'Value Addition' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact & RFQ' }
  ];

  return `
    <header class="site-header" id="main-header">
      <div class="container header-inner">
        <a href="/" class="brand-logo-wrap nav-route" data-path="/">
          <div class="brand-logo-mark">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C98A4B" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div class="brand-title-group">
            <span class="brand-name">PRIMELINE <span>COMPONENTS</span></span>
            <span class="brand-sub">ABHANG GROUP · PUNE INDIA</span>
          </div>
        </a>

        <nav>
          <ul class="nav-menu">
            ${navItems.map(item => `
              <li>
                <a href="${item.path}" class="nav-link nav-route ${currentPath === item.path ? 'active' : ''}" data-path="${item.path}">
                  ${item.label}
                </a>
              </li>
            `).join('')}
          </ul>
        </nav>

        <div class="header-actions">
          <button type="button" class="btn btn-primary btn-sm" id="header-rfq-trigger">
            <span>Request a Quote</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>

          <button type="button" class="mobile-toggle" id="mobile-menu-toggle" aria-label="Toggle navigation">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-nav-drawer" id="mobile-nav-drawer">
        <div class="tech-tag" style="margin-bottom: 0.5rem;">
          <span class="pulse-dot"></span> ISO 9001:2015 & IATF CERTIFIED
        </div>
        <ul class="mobile-nav-links">
          ${navItems.map(item => `
            <li>
              <a href="${item.path}" class="nav-link nav-route ${currentPath === item.path ? 'active' : ''}" data-path="${item.path}">
                ${item.label}
              </a>
            </li>
          `).join('')}
        </ul>
        <div style="margin-top: auto; display: flex; flex-direction: column; gap: 0.85rem;">
          <button type="button" class="btn btn-primary" id="mobile-rfq-trigger" style="width: 100%;">
            <span>Request an RFQ</span>
          </button>
          <a href="tel:+919130303006" class="btn btn-secondary" style="width: 100%;">
            <span>Call: +91 9130303006</span>
          </a>
        </div>
      </div>
    </header>
  `;
}
