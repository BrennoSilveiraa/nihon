export function initMapsButtons() {
  document.querySelectorAll('.place-card').forEach(card => {
    const h4 = card.querySelector('h4');
    const loc = card.querySelector('.card-location');
    if (!h4 || !loc) return;

    const placeName = h4.textContent.trim();
    const locationText = loc.textContent.replace(/📍\s*/, '').trim();

    const query = encodeURIComponent(placeName + ' ' + locationText + ' Japan');
    const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + query;

    const btn = document.createElement('a');
    btn.href = mapsUrl;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.className = 'card-maps-btn';
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg> Ver no Google Maps';

    card.appendChild(btn);
  });
}
