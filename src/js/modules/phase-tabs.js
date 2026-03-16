export function initPhaseTabs() {
  const phaseTabs = document.querySelectorAll('.phase-tab');
  const phaseContents = document.querySelectorAll('.phase-content');
  if (!phaseTabs.length) return;

  phaseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      phaseTabs.forEach(t => t.classList.remove('active'));
      phaseContents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-phase');
      document.getElementById(targetId)?.classList.add('active');
    });
  });
}
