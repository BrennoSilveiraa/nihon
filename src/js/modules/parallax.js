import { throttle } from '../utils.js';

export function initParallax() {
  const images = document.querySelectorAll('.city-hero-img');
  if (!images.length) return;

  window.addEventListener('scroll', throttle(() => {
    requestAnimationFrame(() => {
      images.forEach(img => {
        const rect = img.parentElement.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          img.style.transform = `translateY(${rect.top * 0.3}px) scale(1.1)`;
        }
      });
    });
  }), { passive: true });
}
