/**
 * Primeline Components Pvt Ltd (PLC) — Master Client Application
 * Client-Side Router, Dynamic Lifecycle & Modal Controller
 */

import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderRfqModal, initRfqModalEvents } from './components/RfqModal.js';
import { renderCompanyProfileModal, initCompanyProfileModalEvents } from './components/CompanyProfileModal.js';
import { renderJobApplyModal, initJobApplyModalEvents } from './components/JobApplyModal.js';
import { renderFacilityTourModal, initFacilityTourModalEvents } from './components/FacilityTourModal.js';
import { initTechnicalCanvas } from './components/TechnicalCanvas.js';

import { renderHomePage } from './pages/HomePage.js';
import { renderAboutPage } from './pages/AboutPage.js';
import { renderCapabilitiesPage } from './pages/CapabilitiesPage.js';
import { renderProductsPage } from './pages/ProductsPage.js';
import { renderInfrastructurePage } from './pages/InfrastructurePage.js';
import { renderValueAdditionPage } from './pages/ValueAdditionPage.js';
import { renderCareersPage } from './pages/CareersPage.js';
import { renderContactPage } from './pages/ContactPage.js';

// Route Registry
const routes = {
  '/': renderHomePage,
  '/about': renderAboutPage,
  '/capabilities': renderCapabilitiesPage,
  '/products': renderProductsPage,
  '/infrastructure': renderInfrastructurePage,
  '/value-addition': renderValueAdditionPage,
  '/careers': renderCareersPage,
  '/contact': renderContactPage
};

let currentCleanup = null;

function getNormalizedPath() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return routes[path] ? path : '/';
}

function renderRoute(path) {
  if (currentCleanup && typeof currentCleanup === 'function') {
    currentCleanup();
    currentCleanup = null;
  }

  const appView = document.getElementById('app-view');
  const headerRoot = document.getElementById('header-root');
  const footerRoot = document.getElementById('footer-root');

  // Update Header & Footer
  headerRoot.innerHTML = renderHeader(path);
  footerRoot.innerHTML = renderFooter();

  // Render Page Content
  const renderer = routes[path] || renderHomePage;
  appView.innerHTML = renderer();
  window.scrollTo(0, 0);

  // Setup Mobile Nav Toggle
  setupMobileNav();

  // Page Specific Post-Mount Logic
  if (path === '/') {
    currentCleanup = initTechnicalCanvas('hero-tech-canvas');
  }

  // Initialize Animated Counters
  initNumberCounters();
}

function navigateTo(path) {
  window.history.pushState({}, '', path);
  renderRoute(path);
}

function setupMobileNav() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });
  }
}

function initNumberCounters() {
  const counters = document.querySelectorAll('.counter-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          if (isNaN(target)) return;

          let current = 0;
          const duration = 1200;
          const stepTime = Math.abs(Math.floor(duration / target)) || 20;

          const timer = setInterval(() => {
            current += Math.ceil(target / 40) || 1;
            if (current >= target) {
              el.textContent = target;
              clearInterval(timer);
            } else {
              el.textContent = current;
            }
          }, stepTime);

          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.2 }
  );

  counters.forEach((c) => observer.observe(c));
}

// Global Event Listeners & Router Setup
function initApp() {
  const modalsRoot = document.getElementById('modals-root');
  modalsRoot.innerHTML = `
    ${renderRfqModal()}
    ${renderCompanyProfileModal()}
    ${renderJobApplyModal()}
    ${renderFacilityTourModal()}
  `;

  // Initialize Modal Event Handlers
  initRfqModalEvents();
  initCompanyProfileModalEvents();
  initJobApplyModalEvents();
  initFacilityTourModalEvents();

  // Handle SPA Internal Link Clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.nav-route');
    if (link) {
      e.preventDefault();
      const targetPath = link.getAttribute('data-path') || link.getAttribute('href');
      if (targetPath && targetPath.startsWith('/')) {
        const drawer = document.getElementById('mobile-nav-drawer');
        if (drawer) drawer.classList.remove('open');
        navigateTo(targetPath);
      }
    }
  });

  // Handle Browser Back / Forward
  window.addEventListener('popstate', () => {
    renderRoute(getNormalizedPath());
  });

  // Header Scroll Effect
  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Initial Route Render
  renderRoute(getNormalizedPath());
}

// Initialize on DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
