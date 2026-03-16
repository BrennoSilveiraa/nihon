export async function renderCards() {
  const res = await fetch('./data/places.json');
  const data = await res.json();

  for (const section of data.sections) {
    const sectionEl = document.getElementById(section.id);
    if (!sectionEl) continue;

    const container = sectionEl.querySelector('.container');
    if (!container) continue;

    for (const category of section.categories) {
      const block = document.createElement('div');
      block.className = 'category-block';

      if (category.title) {
        block.innerHTML = `
          <div class="category-header">
            <span class="category-icon">${category.icon}</span>
            <div>
              <h3>${category.title}</h3>
              <p>${category.description}</p>
            </div>
          </div>
        `;
      }

      const grid = document.createElement('div');
      grid.className = 'cards-grid';

      for (const place of category.places) {
        grid.appendChild(createPlaceCard(place));
      }

      block.appendChild(grid);
      container.appendChild(block);
    }
  }
}

function createPlaceCard(place) {
  const card = document.createElement('article');
  card.className = 'place-card' + (place.isFavorite ? ' local-fav' : '');
  card.setAttribute('data-aos', 'fade-up');

  let html = '';

  if (place.badge) {
    html += `<div class="card-badge ${place.badge.type}">${place.badge.label}</div>`;
  }

  html += `
    <div class="card-header">
      <h4>${place.name}</h4>
      <span class="card-location">📍 ${place.location}</span>
    </div>
    <p>${place.description}</p>
  `;

  if (place.tags && place.tags.length) {
    html += '<div class="card-tags">';
    for (const tag of place.tags) {
      html += `<span class="tag">${tag}</span>`;
    }
    html += '</div>';
  }

  if (place.tip) {
    html += `<div class="card-tip">💡 ${place.tip}</div>`;
  }

  card.innerHTML = html;
  return card;
}
