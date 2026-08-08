/*
=========================================================
RAMSHA ART STUDIO — EASY PAINTING EDITING
=========================================================
Only edit the PAINTINGS list below.

Put your painting photo inside the "images" folder.
The filename here must exactly match the image filename.
=========================================================
*/

const paintings = [
  {
    image: "through-the-silence.jpg",
    title: "Through the Silence",
    status: "Available",
    price: "450 USD (Shipping included)",
    size: "16 × 16 inches",
    medium: "Acrylic on canvas",
    description: ""
  },
  {
    image: "painting-02.jpg",
    title: "Your Painting Title",
    status: "Available",
    price: "300 USD (Shipping included)",
    size: "12 × 18 inches",
    medium: "Acrylic on canvas",
    description: ""
  }
];

/* You normally do not need to edit anything below this line. */

const qs = (s) => document.querySelector(s);

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}

function renderGallery() {
  const gallery = qs("#gallery");
  if (!gallery) return;

  gallery.innerHTML = paintings.map((p, i) => `
    <article class="art-card">
      <button class="art-image-button" type="button" data-painting="${i}" aria-label="View ${escapeHTML(p.title)}">
        <div class="art-image-wrap">
          <img src="images/${encodeURIComponent(p.image)}" alt="${escapeHTML(p.title)}" loading="lazy">
          <span class="view-art">View artwork</span>
        </div>
      </button>
      <div class="art-caption">
        <h2>${escapeHTML(p.title)}</h2>
        <p>${escapeHTML(p.size)} · ${escapeHTML(p.medium)}</p>
        <p class="art-status">${escapeHTML(p.status)}</p>
      </div>
    </article>
  `).join("");

  gallery.querySelectorAll(".art-image-button").forEach(button => {
    button.addEventListener("click", () => openPainting(Number(button.dataset.painting)));
  });
}

function openPainting(index) {
  const p = paintings[index];
  const modal = qs("#painting-modal");
  if (!p || !modal) return;

  qs("#modal-image").src = `images/${p.image}`;
  qs("#modal-image").alt = p.title;
  qs("#modal-title").textContent = p.title;
  qs("#modal-status").textContent = p.status;
  qs("#modal-price").textContent = p.price;
  qs("#modal-size").textContent = p.size;
  qs("#modal-medium").textContent = p.medium;

  const desc = qs("#modal-description");
  desc.textContent = p.description || "";

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closePainting() {
  const modal = qs("#painting-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setupModal() {
  const modal = qs("#painting-modal");
  if (!modal) return;

  qs("#modal-close").addEventListener("click", closePainting);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closePainting();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePainting();
  });
}

function setupMenu() {
  const button = qs(".menu-button");
  const menu = qs(".mobile-menu");
  if (!button || !menu) return;

  button.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => menu.classList.remove("open"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  setupModal();
  setupMenu();
});
