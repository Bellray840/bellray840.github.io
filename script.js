/* EDIT ONLY THIS LIST TO ADD YOUR PAINTINGS */
const paintings = [
  {
    image: "through-the-silence.jpg",
    title: "Through the Silence",
    status: "Available",
    price: "450 USD (Shipping already included)",
    size: "16 × 16 inches",
    medium: "Acrylic on canvas",
    description: ""
  },
  {
    image: "painting-02.jpg",
    title: "Your Painting Title",
    status: "Available",
    price: "300 USD (Shipping already included)",
    size: "12 × 18 inches",
    medium: "Acrylic on canvas",
    description: ""
  }
];

/* DO NOT EDIT BELOW */
function paintingIndex(){return parseInt(new URLSearchParams(location.search).get("id"),10)}
function card(p,i){
  return `<a class="painting-card" href="painting.html?id=${i}">
    <img src="images/${p.image}" alt="${p.title}" loading="lazy">
    <div class="painting-info"><div>${p.status}</div><div>Price: ${p.price}</div><div>Size: ${p.size}</div></div>
  </a>`;
}
function load(){
  const g=document.querySelector("#gallery");
  if(g) g.innerHTML=paintings.map(card).join("");
  const i=paintingIndex(),p=paintings[i];
  if(p && document.querySelector("#painting-title")){
    document.title=p.title+" — Ramsha Art Studio";
    document.querySelector("#painting-image").src="images/"+p.image;
    document.querySelector("#painting-image").alt=p.title;
    document.querySelector("#painting-title").textContent=p.title;
    document.querySelector("#painting-status").textContent=p.status;
    document.querySelector("#painting-price").textContent="Price: "+p.price;
    document.querySelector("#painting-size").textContent="Size: "+p.size;
    document.querySelector("#painting-medium").textContent="Medium: "+p.medium;
    document.querySelector("#painting-description").textContent=p.description;
  }
  const b=document.querySelector(".menu-button"),m=document.querySelector(".mobile-menu");
  if(b&&m)b.onclick=()=>m.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded",load);
