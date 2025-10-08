const elmenySubcats = [
  "vicces", "hasznos", "luxus", "kézműves", "romantikus", "kreatív", "technológiai", "egészséges életmód"
];
const targySubcats = [
  "gyerekek", "felnőttek", "idősek", "párok", "barátok", "szülők", "kollégák", "tanárok"
];

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
});
