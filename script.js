
/*
  Ramsha Art Studio
  Replace the sample painting data below with your real paintings.
*/

const paintings = [
  {
    id: "through-the-silence",
    title: "Through the Silence",
    image: "images/painting-01.svg",
    status: "Available",
    price: "450 USD (Shipping already included)",
    size: "16 x 16 Inches",
    medium: "Acrylic on canvas"
  },
  {
    id: "painting-02",
    title: "Night House",
    image: "images/painting-02.svg",
    status: "Available",
    price: "180 USD (Shipping already included)",
    size: "10 x 10 Inches",
    medium: "Acrylic on canvas"
  },
  {
    id: "painting-03",
    title: "Warm Windows",
    image: "images/painting-03.svg",
    status: "Available",
    price: "270 USD (Shipping already included)",
    size: "16 x 16 Inches",
    medium: "Acrylic on canvas"
  },
  {
    id: "painting-04",
    title: "The Last House Standing",
    image: "images/painting-04.svg",
    status: "Sold",
    price: "495 USD (Shipping already included)",
    size: "18 x 24 Inches",
    medium: "Acrylic on canvas"
  },
  {
    id: "painting-05",
    title: "Green Night",
    image: "images/painting-05.svg",
    status: "Sold (Open for commission)",
    price: "300 USD (Shipping already included)",
    size: "12 x 18 Inches",
    medium: "Acrylic on canvas"
  },
  {
    id: "painting-06",
    title: "Blue Evening",
    image: "images/painting-06.svg",
    status: "Sold (Open for commission)",
    price: "470 USD (Shipping already included)",
    size: "18 x 24 Inches",
    medium: "Acrylic on canvas"
  },
  {
    id: "painting-07",
    title: "The Quiet Cabin",
    image: "images/painting-07.svg",
    status: "Sold",
    price: "270 USD (Shipping already included)",
    size: "12 x 18 Inches",
    medium: "Acrylic on canvas"
  },
  {
    id: "painting-08",
    title: "After Midnight",
    image: "images/painting-08.svg",
    status: "Sold (Open for commission)",
    price: "300 USD (Shipping already included)",
    size: "12 x 18 Inches",
    medium: "Acrylic on canvas"
  }
];

function makeCard(painting) {
  const card = document.createElement("article");
  card.className = "painting-card";
  card.innerHTML = `
    <a href="painting.html?id=${encodeURIComponent(painting.id)}" aria-label="View ${escapeHtml(painting.title)}">
      <img src="${painting.image}" alt="${escapeHtml(painting.title)}">
      <div class="painting-info">
        <span class="status">${escapeHtml(painting.status)}</span>
        <span>Price: ${escapeHtml(painting.price)}</span><br>
        <span>Size: ${escapeHtml(painting.size)}...</span>
      </div>
    </a>
  `;
  return card;
}

function renderGallery(elementId) {
  const gallery = document.getElementById(elementId);
  if (!gallery) return;
  paintings.forEach(p => gallery.appendChild(makeCard(p)));
}

function renderPaintingDetail() {
  const container = document.getElementById("painting-detail");
  if (!container) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const painting = paintings.find(p => p.id === id) || paintings[0];

  document.title = `${painting.title} — Ramsha Art Studio`;

  container.innerHTML = `
    <div class="painting-top">
      <a class="back-link" href="index.html" aria-label="Back to gallery">←</a>
    </div>
    <img class="painting-hero" src="${painting.image}" alt="${escapeHtml(painting.title)}">
    <section class="painting-copy">
      <h1>${escapeHtml(painting.title)}</h1>
      <div class="details">
        <div>${escapeHtml(painting.status)}</div>
        <div>Price: ${escapeHtml(painting.price)}</div>
        <div>Size: ${escapeHtml(painting.size)}</div>
        <div>Medium: ${escapeHtml(painting.medium)}</div>
      </div>
      <p class="purchase">
        To purchase the artwork, please head over to the contact page where I have listed my WhatsApp, Instagram and Email.
      </p>
      <a class="page-link" href="contact.html">Go to Page Contact</a>
    </section>
  `;
}

function setupMenu() {
  document.querySelectorAll(".menu-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const nav = button.closest(".site-header").querySelector(".main-nav");
      const open = nav.classList.toggle("open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery("gallery");
  renderGallery("portfolio-gallery");
  renderPaintingDetail();
  setupMenu();
});
