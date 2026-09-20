import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://guia-do-autopropelido.vercel.app',
  integrations: [sitemap()],
  output: 'static',
});
