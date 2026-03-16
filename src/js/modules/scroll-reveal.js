export function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const siblings = Array.from(card.parentElement.children);
        const cardIndex = siblings.indexOf(card);

        setTimeout(() => {
          card.classList.add('visible');
        }, cardIndex * 100);

        observer.unobserve(card);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });
}
