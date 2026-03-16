import { throttle } from '../utils.js';

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', throttle(() => {
    if (window.pageYOffset > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }), { passive: true });
}
