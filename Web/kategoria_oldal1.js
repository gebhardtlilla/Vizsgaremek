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

<<<<<<< HEAD
document.getElementById("alkalomBtn").addEventListener("click", () => {
  fetch("/alkalmak")
    .then(response => response.json())
    .then(renderSubcategories)
    .catch(error => console.error('Hiba az alkalmak lekérésekor:', error));
});

document.getElementById("stilusBtn").addEventListener("click", () => {
  fetch("/stilusok")
    .then(response => response.json())
    .then(renderSubcategories)
    .catch(error => console.error('Hiba a stílusok lekérésekor:', error));
});

document.getElementById("celcsoportBtn").addEventListener("click", () => {
  fetch("/celcsoportok")
    .then(response => response.json())
    .then(renderSubcategories)
    .catch(error => console.error('Hiba a célcsoportok lekérésekor:', error));
});
=======
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
>>>>>>> 0dba4a8b5e4078a2161cba5a3c36670e5a2b21ae
