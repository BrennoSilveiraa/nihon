import { throttle } from '../utils.js';

export function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', throttle(() => {
    let current = '';
    sections.forEach(section => {
      if (window.pageYOffset >= section.offsetTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }), { passive: true });
}
