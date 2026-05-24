# RoadLine Tire & Auto Template

A static website template for tire shops, auto service businesses, wheel shops, small dealers, and similar appointment-based service companies.

https://shafkat-ali.github.io/tire-auto-service-template/

## Pages

- `index.html` - homepage with hero, tire finder, highlights, and conversion sections
- `services.html` - filterable service menu for tires, repair, and dealer account offers
- `quote.html` - working demo quote request form using `localStorage`

## Assets

Generated local demo images are included in `assets/images/` so the template works on GitHub Pages without hotlinking stock images.

## Customize

- Edit `assets/styles.css` for colors, spacing, and layout.
- Edit each HTML file for the client's brand, service list, pricing, phone, hours, and address.
- Replace `assets/images/` with client-approved shop, team, inventory, or vehicle photos when available.
- Connect the quote form in `assets/app.js` to Formspree, Netlify Forms, a CRM, or a backend API for production.

## Run Locally

```bash
python -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

## Publish To A New GitHub Repo

From inside this folder:

```bash
git init
git add .
git commit -m "Initial tire auto service website template"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/tire-auto-service-template.git
git push -u origin main
```

For GitHub Pages, open the repository settings and enable Pages from the `main` branch root.
