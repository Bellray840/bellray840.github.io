# Ramsha Art Studio — Professional Easy-Edit Version

## What changed

- Removed the Portfolio page completely.
- Navigation is now Home / About / Contact.
- Home is the artwork gallery.
- Clicking an artwork opens its own professional detail page.
- Responsive desktop + mobile layout.
- Cleaner typography and spacing.
- More professional artwork cards with hover effect.
- Lazy-loading for gallery images.
- Basic SEO title and description.
- Accessible navigation labels.
- Simple painting data system so you don't need to create HTML pages.

## Adding a painting

1. Put the painting photo inside `images/`.
2. Open `script.js`.
3. At the top, copy an existing painting block.
4. Change the filename, title, status, price, size, medium and description.

Example:

```js
{
  image: "my-painting.jpg",
  title: "My Painting",
  status: "Available",
  price: "300 USD (Shipping included)",
  size: "12 × 18 inches",
  medium: "Acrylic on canvas",
  description: "Optional description."
},
```

The filename must exactly match the actual file in `images/`.

## Your contact links

Search the files for:

- `YOUR_WHATSAPP_LINK`
- `YOUR_INSTAGRAM_LINK`
- `YOUR_EMAIL`
- `YOUR_CHAT_LINK`
- `YOUR_MAILING_LIST_LINK`

Replace those with your real links.

## GitHub Pages

Upload the contents of this folder to your GitHub repository. Keep `index.html` in the repository's main/root folder.

Then use:

Settings → Pages → Deploy from a branch → main → /(root) → Save

