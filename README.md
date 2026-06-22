# Sip & Crisp

Premium static website for **Sip & Crisp** — fresh juices, milkshakes, chocolates, pizzas, and sandwiches in BTM Layout, Bangalore.

## Stack

- **Vite 6** + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- **React Router v7** for client-side routing
- **react-helmet-async** for per-page SEO
- **Lucide React** for icons

Built to deploy as a static site on GitHub Pages (user/org site at root URL).

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/ (+ 404.html for GH Pages)
npm run preview   # preview production build
```

## Logo

Place your logo at `public/images/logo.png`. It is used in the navbar, footer, and as the favicon.

## Updating content

| Content | File |
|---|---|
| Menu items & prices | `src/data/menu.ts` |
| Customer reviews | `src/data/reviews.ts` |
| Locations & hours | `src/data/locations.ts` |
| Phone, email, site URL | `src/data/site.ts` |
| Gallery images | `src/data/gallery.ts` |

## Customer reviews

Reviews are stored manually in `src/data/reviews.ts` (copied from your Google Maps listing). Update `googleStats` for the overall rating/total count, and the `reviews` array for individual reviews. Set `source: 'google'` on each review to show the Google attribution badge.

## Contact form

By default, the contact form opens WhatsApp with a pre-filled message. To use email instead, set a Formspree ID:

```bash
# .env
VITE_FORMSPREE_ID=your_formspree_id
```

## Deploy to GitHub Pages

This site is configured for a **user/org GitHub Pages site** (repo named `YOUR_USERNAME.github.io`, served at root).

### 1. Update site URL

In `src/data/site.ts`, replace `YOUR_USERNAME` in `siteUrl` with your GitHub username.

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial Sip & Crisp website"
git remote add origin git@github.com:YOUR_USERNAME/YOUR_USERNAME.github.io.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to **Settings → Pages** in your repo
2. Under **Source**, select **GitHub Actions**
3. The deploy workflow runs automatically on every push to `main`
4. Site goes live at `https://YOUR_USERNAME.github.io/`

### GitHub Pages routing

After build, `scripts/postbuild.js` copies `index.html` to `404.html` so direct links (e.g. `/menu`) work on refresh.

## Project structure

```
src/
├── data/          # Menu, reviews, locations — edit these
├── components/    # Reusable UI
├── pages/         # One component per route
├── styles/        # Global CSS + Tailwind theme
└── App.tsx        # Route definitions
```
# sip-and-crisp
