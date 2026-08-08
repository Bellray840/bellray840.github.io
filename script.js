/*
=========================================================
RAMSHA ART STUDIO — PAINTINGS
=========================================================
YOU ONLY NEED TO EDIT THIS SECTION.

Put your image inside the "images" folder, then add/edit
one block below.

image   = exact image filename
title   = painting title
status  = "Available" or "Sold"
price   = price text
size    = size
medium  = medium
description = optional description
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

/* =======================================================
   YOU DON'T NEED TO EDIT BELOW THIS LINE.
======================================================= */

const qs = (selector) => document.querySelector(selector);

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function getPaintingIndex() {
  const value = Number.parseInt(new URLSearchParams(location.search).get("id"), 10);
  return Number.isInteger(value) ? value : -1;
}

function renderGallery() {
  const gallery = qs("#gallery");
  if (!gallery) return;

  gallery.innerHTML = paintings.map((painting, index) => `
    <article class="art-card">
      <a href="painting.html?id=${index}" class="art-image-link" aria-label="View ${escapeHTML(painting.title)}">
        <div class="art-image-wrap">
          <img src="images/${encodeURIComponent(painting.image)}"
               alt="${escapeHTML(painting.title)}"
               loading="lazy">
          <span class="view-art">View artwork</span>
        </div>
      </a>
      <div class="art-caption">
        <h2>${escapeHTML(painting.title)}</h2>
        <p>${escapeHTML(painting.size)} · ${escapeHTML(painting.medium)}</p>
        <p class="art-status">${escapeHTML(painting.status)}</p>
      </div>
    </article>
  `).join("");
}

function renderPainting() {
  const title = qs("#painting-title");
  if (!title) return;

  const painting = paintings[getPaintingIndex()];

  if (!painting) {
    qs("#painting-content").innerHTML = `
      <div class="not-found">
        <h1>Artwork not found</h1>
        <p>Please return to the home page and select an artwork.</p>
        <a class="text-link" href="index.html">Back to artwork</a>
      </div>`;
    return;
  }

  document.title = `${painting.title} — Ramsha Art Studio`;

  qs("#painting-image").src = `images/${painting.image}`;
  qs("#painting-image").alt = painting.title;
  title.textContent = painting.title;
  qs("#painting-status").textContent = painting.status;
  qs("#painting-price").textContent = painting.price;
  qs("#painting-size").textContent = painting.size;
  qs("#painting-medium").textContent = painting.medium;

  const description = qs("#painting-description");
  if (painting.description) {
    description.textContent = painting.description;
  } else {
    description.remove();
  }
}

function setupMenu() {
  const button = qs(".menu-button");
  const menu = qs(".mobile-menu");
  if (!button || !menu) return;

  button.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.classList.remove("open"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  renderPainting();
  setupMenu();
});
