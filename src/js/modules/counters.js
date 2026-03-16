export function initCounters() {
  const statsGrid = document.querySelector('.stats-grid');
  if (!statsGrid) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(statsGrid);
}

function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(counter => {
    const text = counter.textContent;
    if (text.includes('+') || text === '∞' || text === '¥') return;

    const target = parseInt(text);
    if (isNaN(target)) return;

    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = text;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, 50);
  });
}
