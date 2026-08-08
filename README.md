# Ramsha Art Studio — GitHub Pages starter

This is the first standalone version of the Ramsha Art Studio website.

## Files

- `index.html` — Home/gallery
- `portfolio.html` — Portfolio
- `about.html` — About
- `contact.html` — Contact
- `painting.html` — Reusable individual painting page
- `style.css` — Design and responsive layout
- `script.js` — Painting data, gallery and individual painting pages
- `images/` — Placeholder images

## How to add your real paintings

1. Put your painting JPG/PNG files in the `images` folder.
2. Open `script.js`.
3. For each painting, change:
   - `id`
   - `title`
   - `image`
   - `status`
   - `price`
   - `size`
   - `medium`

Example:

{
  id: "my-painting",
  title: "My Painting",
  image: "images/my-painting.jpg",
  status: "Available",
  price: "450 USD (Shipping already included)",
  size: "16 x 16 Inches",
  medium: "Acrylic on canvas"
}

## Important placeholders to replace

Search the files for:

- `YOUR_EMAIL@example.com`
- `https://wa.me/`
- `https://instagram.com/`

and replace them with your real contact links.

The mailing-list button is also a placeholder until you provide your signup URL.

## GitHub Pages

Create a GitHub repository, upload all files/folders in this directory, then enable GitHub Pages from the repository's Pages settings and select the `main` branch.

After the site works on its GitHub URL, your Hostinger domain can be connected to GitHub Pages using GitHub's custom-domain/DNS instructions.
