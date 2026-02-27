# QuranAble - Edge Learning Infrastructure

This is the codebase for [QuranAble.com](https://quranable.com), a premium online Quranic educational platform engineered for zero-second load times and global accessibility.

## 🚀 Tech Stack
- **Framework:** Astro (v5+)
- **Styling:** Tailwind CSS (v4) via Vite
- **Architecture:** Static Site Generation (SSG) / Edge Delivery
- **SEO:** Dynamic Open Graph, JSON-LD Schema, Automated Sitemap

## 🧞 Project Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs all project dependencies                |
| `npm run dev`             | Starts local development server at `localhost:4321`|
| `npm run build`           | Builds the production-ready site to `./dist/`    |
| `npm run preview`         | Previews the production build locally            |

## 📁 Key Directories
- `src/layouts/BaseLayout.astro`: Contains the global UI shell, Google Tag Manager, and Search Console verification.
- `src/components/HeadSEO.astro`: The single source of truth for all Meta tags, Social sharing cards, and structured data.
- `src/pages/funnels/`: Contains highly optimized, compliance-ready landing pages for paid ad traffic.