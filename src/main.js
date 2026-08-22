/**
 * Primeline Components Pvt Ltd (PLC) — Master Client Application
 * Client-Side Router, Dynamic Lifecycle & Modal Controller
 * Tier-1 Precision Engineering Architecture
 */

import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderRfqModal, initRfqModalEvents } from './components/RfqModal.js';
import { renderCompanyProfileModal, initCompanyProfileModalEvents } from './components/CompanyProfileModal.js';
import { renderJobApplyModal, initJobApplyModalEvents } from './components/JobApplyModal.js';
import { renderFacilityTourModal, initFacilityTourModalEvents } from './components/FacilityTourModal.js';

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
  '/quality': renderInfrastructurePage,
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
    initHomePageInteractions();
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

// Capability Tab Switching for HomePage
function initHomePageInteractions() {
  const capRows = document.querySelectorAll('.cap-item-row');
  const previewImg = document.getElementById('cap-preview-img');
  const previewTitle = document.getElementById('cap-preview-title');
  const previewDesc = document.getElementById('cap-preview-desc');
  const previewTol = document.getElementById('cap-preview-tol');
  const previewEquip = document.getElementById('cap-preview-equip');

  if (!capRows.length || !previewImg) return;

  const capData = [
    {
      title: "01 — Precision CNC Machining",
      desc: "Ultra-precision turning and multi-axis machining for Inconel 718/625, SS316L, Duplex 2205, and Titanium Gr5 under stringent ±0.002 mm dimensional compliance.",
      tol: "±0.002 mm (2 microns)",
      equip: "5-Axis Turning Centers, Dual-Spindle CNC Lathes with Live Tooling, Swiss-Type Automatic Lathes",
      img: "/images/hero_cnc_spindle.jpg"
    },
    {
      title: "02 — Vertical Machining Centers (VMC)",
      desc: "Equipped with high-rigidity BT-50 and high-speed BT-40 spindle configurations, our VMC division handles prismatic parts, multi-port hydraulic valve blocks, and complex defence housings.",
      tol: "±0.005 mm (5 microns)",
      equip: "High-Speed BT40/BT50 VMC Fleet, 4th Axis Rotary Tables, Dual Pallet Changers",
      img: "/images/vmc_coolant_spray.jpg"
    },
    {
      title: "03 — Special Processes & Surface Engineering",
      desc: "Qualified special processing ensuring high wear resistance, anti-galling properties, corrosion immunity in aggressive offshore environments, and certified hardness gradients.",
      tol: "Micron-level coating thickness control",
      equip: "Automated Plating Baths, Atmosphere-Controlled Heat Treat Furnaces, Ultrasonic Degreasing Lines",
      img: "/images/industrial_spark_cutting.jpg"
    },
    {
      title: "04 — Sub-Assemblies & Precision Fabrication",
      desc: "Delivering fully verified sub-assemblies directly to OEM assembly lines, eliminating client-side assembly overhead, testing bottlenecks, and inventory complexities.",
      tol: "100% functional leak-rate and torque verification",
      equip: "Torque-Controlled Assembly Benches, Cleanroom Assembly Zone, Hydrostatic Test Benches (up to 700 bar)",
      img: "/images/precision_machined_flange.jpg"
    },
    {
      title: "05 — Technical Plastics Injection Moulding",
      desc: "Decades of polymer tooling expertise originating from our 1996 Raja Plastics foundation enable us to mould complex, dimensionally stable engineering plastic components (PEEK/POM).",
      tol: "±0.010 mm",
      equip: "All-Electric Precision Injection Moulding Machines (50T to 350T), Dehumidifying Dryers",
      img: "/images/milled_metal_block.jpg"
    },
    {
      title: "06 — Rapid Prototyping & R&D Machining",
      desc: "Bridging the gap between conceptual CAD design and mass production with agile R&D machining, metallurgical consultation, and tolerance feasibility validation in 5-7 days.",
      tol: "Direct-from-CAD pilot precision",
      equip: "Dedicated Pilot R&D 5-Axis Machine Cells, 3D Optical Metrology Scanners",
      img: "/images/hero_cnc_spindle.jpg"
    }
  ];

  capRows.forEach((row, index) => {
    const handleSelect = () => {
      capRows.forEach(r => r.classList.remove('active'));
      row.classList.add('active');

      const data = capData[index];
      if (!data) return;

      previewImg.style.opacity = '0.4';
      setTimeout(() => {
        previewImg.src = data.img;
        previewTitle.textContent = data.title;
        previewDesc.textContent = data.desc;
        previewTol.textContent = data.tol;
        previewEquip.textContent = data.equip;
        previewImg.style.opacity = '1';
      }, 120);
    };

    row.addEventListener('mouseenter', handleSelect);
    row.addEventListener('click', handleSelect);
  });
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
          const duration = 1000;
          const stepTime = Math.abs(Math.floor(duration / target)) || 20;

          const timer = setInterval(() => {
            current += Math.ceil(target / 30) || 1;
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
    { threshold: 0.15 }
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
