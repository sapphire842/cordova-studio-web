# The Córdova Studio - Portfolio Website

Portfolio website for **Omar Córdova García**, an interior architecture and
design studio based in Walnut Creek, California.

Live site: [https://thecordovastudio.com/](https://thecordovastudio.com/)

## Tech Stack

- **Next.js 15** with the App Router
- **React 19**
- **TypeScript** in strict mode
- **Tailwind CSS 4**
- **GitHub Pages** static hosting with a custom domain

## Local Development

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To generate the static production export:

```bash
npm run build
```

The exported site is written to `out/`.

## Project Structure

```text
src/app/
  page.tsx                  Home page sections
  projects/[slug]/page.tsx  Project detail pages
  connect/page.tsx          Contact landing page
  thank-you/page.tsx        Form confirmation page
  layout.tsx                Root layout and metadata
src/components/             Page sections and shared UI
src/data/                   Portfolio project and service data
src/lib/                    Shared utilities
public/images/              Static image assets
public/CNAME                Custom domain configuration
```

## Deployment

The site is deployed to GitHub Pages at
[https://thecordovastudio.com/](https://thecordovastudio.com/).

Pushes to `main` trigger the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which installs dependencies, runs
`npm run build`, uploads the generated `out/` directory, and deploys it to
GitHub Pages.

`next.config.mjs` must retain `output: "export"` for this hosting setup.
