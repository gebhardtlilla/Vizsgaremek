const elmenySubcats = [
  "vicces", "hasznos", "luxus", "kézműves", "romantikus", "kreatív", "technológiai", "egészséges életmód"
];
const targySubcats = [
  "gyerekek", "felnőttek", "idősek", "párok", "barátok", "szülők", "kollégák", "tanárok"
];

const API_BASE = "http://localhost:3000";

function renderSubcategories(cats) {
  const div = document.getElementById("subcategories");
  div.innerHTML = `
    <div class="subcat-list">
      ${cats.map(cat => `<div class="subcat-item">${cat}</div>`).join('')}
    </div>
  `;
}

document.getElementById("elmenyBtn").addEventListener("click", () => {
  renderSubcategories(elmenySubcats);
});
document.getElementById("targyBtn").addEventListener("click", () => {
  renderSubcategories(targySubcats);
});

window.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username');
  const welcomeDiv = document.getElementById('welcomeMessage');
  
  if (username && welcomeDiv) {
    welcomeDiv.textContent = `Üdvözöllek, ${username}! Köszönjük, hogy itt vagy! 🎉`;
  }

  // Load occasions list when user clicks Alkalmak
  const alkalmakBtn = document.getElementById('alkalmakFilterBtn');
  const filterListDiv = document.getElementById('filterList');
  const giftResultsDiv = document.getElementById('giftResults');

  async function loadOccasions() {
    filterListDiv.textContent = 'Betöltés...';
    giftResultsDiv.innerHTML = '';
    try {
      const res = await fetch(`${API_BASE}/alkalmak`);
      const occasions = await res.json();
      if (!Array.isArray(occasions)) {
        filterListDiv.textContent = 'Nem sikerült betölteni az alkalmakat.';
        return;
      }
      filterListDiv.innerHTML = `
        <div class="subcat-list">
          ${occasions.map(o => `<button class="subcat-item" data-alkalom-id="${o.id}">${o.nev}</button>`).join('')}
        </div>
      `;

      // Attach click handlers to each occasion to load gifts
      filterListDiv.querySelectorAll('[data-alkalom-id]').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const id = e.currentTarget.getAttribute('data-alkalom-id');
          await loadGiftsForOccasion(id);
        });
      });
    } catch (e) {
      filterListDiv.textContent = 'Hálózati hiba az alkalmak betöltése közben.';
    }
  }

  async function loadGiftsForOccasion(alkalomId) {
    giftResultsDiv.textContent = 'Ajándékok betöltése...';
    try {
      const res = await fetch(`${API_BASE}/alkalmak/${alkalomId}/ajandekok`);
      const gifts = await res.json();
      if (!Array.isArray(gifts)) {
        giftResultsDiv.textContent = 'Nem található ajándék ehhez az alkalomhoz.';
        return;
      }
      if (gifts.length === 0) {
        giftResultsDiv.textContent = 'Nincs találat.';
        return;
      }
      giftResultsDiv.innerHTML = `
        <ul>
          ${gifts.map(g => `<li>${g.nev}</li>`).join('')}
        </ul>
      `;
    } catch (e) {
      giftResultsDiv.textContent = 'Hálózati hiba az ajándékok betöltése közben.';
    }
  }

  if (alkalmakBtn) {
    alkalmakBtn.addEventListener('click', loadOccasions);
  }
});
