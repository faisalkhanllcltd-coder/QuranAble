// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // CRITICAL: This is required for the sitemap and SEO tags to generate absolute URLs!
  site: 'https://quranable.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap()
  ]
});