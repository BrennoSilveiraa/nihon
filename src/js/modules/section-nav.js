import { throttle } from '../utils.js';

const sectionIds = ['hero', 'intro', 'tokyo', 'kyoto', 'osaka', 'anime', 'gaming', 'roteiros', 'dicas'];
const sectionNames = {
  hero: 'Topo',
  intro: 'Início',
  tokyo: 'Tokyo',
  kyoto: 'Kyoto',
  osaka: 'Osaka',
  anime: 'Anime',
  gaming: 'Gaming',
  roteiros: 'Roteiros',
  dicas: 'Dicas'
};

function getCurrentSectionIndex() {
  let currentIndex = 0;
  sectionIds.forEach((id, index) => {
    const el = document.getElementById(id);
    if (el && window.pageYOffset >= el.offsetTop - 300) {
      currentIndex = index;
    }
  });
  return currentIndex;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function initSectionNav() {
  const sectionNav = document.getElementById('section-nav');
  const sectionDots = document.getElementById('section-dots');
  const btnTop = document.getElementById('btn-top');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const labelPrev = document.getElementById('label-prev');
  const labelNext = document.getElementById('label-next');
  const dots = document.querySelectorAll('.section-dot');

  if (!btnTop || !btnPrev || !btnNext) return;

  function updateNavigator() {
    const showNav = window.pageYOffset > 400;

    sectionNav?.classList.toggle('visible', showNav);
    sectionDots?.classList.toggle('visible', showNav);

    const currentIndex = getCurrentSectionIndex();

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex - 1);
    });

    const hasPrev = currentIndex > 0;
    const hasNext = currentIndex < sectionIds.length - 1;

    btnPrev.style.opacity = hasPrev ? '1' : '0.3';
    btnPrev.style.pointerEvents = hasPrev ? 'all' : 'none';
    btnNext.style.opacity = hasNext ? '1' : '0.3';
    btnNext.style.pointerEvents = hasNext ? 'all' : 'none';

    if (hasPrev && labelPrev) {
      labelPrev.textContent = sectionNames[sectionIds[currentIndex - 1]];
    }
    if (hasNext && labelNext) {
      labelNext.textContent = sectionNames[sectionIds[currentIndex + 1]];
    }
  }

  btnTop.addEventListener('click', () => scrollToSection('hero'));
  btnPrev.addEventListener('click', () => {
    const idx = getCurrentSectionIndex();
    if (idx > 0) scrollToSection(sectionIds[idx - 1]);
  });
  btnNext.addEventListener('click', () => {
    const idx = getCurrentSectionIndex();
    if (idx < sectionIds.length - 1) scrollToSection(sectionIds[idx + 1]);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => scrollToSection(dot.dataset.target));
  });

  window.addEventListener('scroll', throttle(updateNavigator), { passive: true });
  updateNavigator();
}
