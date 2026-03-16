import '../css/style.css';
import { renderCards } from './modules/card-renderer.js';
import { initNavbar } from './modules/navbar.js';
import { initMobileMenu } from './modules/mobile-menu.js';
import { initActiveNav } from './modules/active-nav.js';
import { initScrollReveal } from './modules/scroll-reveal.js';
import { initParticles } from './modules/particles.js';
import { initPhaseTabs } from './modules/phase-tabs.js';
import { initSmoothScroll } from './modules/smooth-scroll.js';
import { initParallax } from './modules/parallax.js';
import { initCounters } from './modules/counters.js';
import { initSectionNav } from './modules/section-nav.js';
import { initMetroData } from './modules/metro-data.js';
import { initMapsButtons } from './modules/maps-buttons.js';

document.addEventListener('DOMContentLoaded', async () => {
  await renderCards();

  initNavbar();
  initMobileMenu();
  initActiveNav();
  initScrollReveal();
  initParticles();
  initPhaseTabs();
  initSmoothScroll();
  initParallax();
  initCounters();
  initSectionNav();
  initMetroData();
  initMapsButtons();
});
