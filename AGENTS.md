# Cordova Studio Website

## About
Portfolio website for **Omar Córdova García** — Interior Architecture & Design studio based in Walnut Creek, CA. BFA in Interior Architecture & Design from Academy of Art University.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS 4
- **Deployment:** GitHub Pages (static export via `next build`)
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`) — auto-deploys on push to main

## Architecture
- `src/app/page.tsx` — Home page (Hero + About + Portfolio grid + Services + Contact sections)
- `src/app/projects/[slug]/page.tsx` — Individual project detail pages
- `src/app/layout.tsx` — Root layout with Navigation + Footer
- `src/components/` — Section components (Hero, About, Portfolio, Services, Contact, etc.)
- `src/data/projects.ts` — Project data (title, slug, description, images, category, location)
- `src/data/services.ts` — Services data
- `src/lib/utils.ts` — Shared utilities (scroll reveal hook, etc.)
- `public/images/` — Static images (headshot, hero background, portfolio project images)

## GitHub Pages Configuration
- `next.config.ts` has `output: 'export'` and `basePath: '/cordova-studio-web'`
- All image paths in components must account for the basePath
- Pattern: `const basePath = "/cordova-studio-web"` then `src={`${basePath}/images/...`}`
- Check existing components (e.g. `ProjectCard.tsx`, `Hero.tsx`) for the exact pattern

## Design System
- **Color palette:** charcoal (#1a1a1a), warm-white (#f5f0eb), accent (#c4a882)
- **Typography:** Playfair Display (serif headings) + Inter (sans body)
- **Aesthetic:** Minimal, editorial, architecture-firm feel. Dark hero → light content sections.
- **Animations:** Subtle intersection-observer scroll reveals (`.fade-in` class via `useReveal` hook)

## Portfolio Projects (4)
1. **National Geographic HQ** (San Francisco) — Commercial HQ interior
2. **2190 Vallejo Street Residence** (San Francisco) — Victorian residence renovation
3. **Las Palmas Restaurant** — Restaurant interior design
4. **Indawo Yolwandle Assisted Living Center** — South African-inspired community center

## Portfolio Images
Images are extracted from Omar's Issuu portfolio. Full-res pages from the Issuu CDN:
- Base URL: `https://image.isu.pub/240519201107-20ecfb1995aeaea73e14d0738ee4b1a3/jpg/page_{N}.jpg`
- Pages 1-36 available. Currently using select pages per project.
- Images are portfolio pages (contain renders + floor plans + text), not standalone photos.

## Contact & Social
- Email: omar@cordova.studio
- Instagram: @cordova.studio
- LinkedIn: omar-cordova-garcia
- Thumbtack: Cordova Studio, Walnut Creek CA
- Fiverr: https://www.fiverr.com/s/WEj49BL

## Development
```bash
npm install --legacy-peer-deps
npm run dev        # Local dev server
npm run build      # Static export to out/
```

## Deployment
Push to `main` triggers GitHub Actions → builds → deploys to GitHub Pages.
Live URL: https://aijayadams.github.io/cordova-studio-web/

## Stock Images
Hero background (`hero-bg.jpg`) is from Unsplash (free license). Portfolio images are from Omar's Issuu portfolio.
