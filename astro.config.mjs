import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://guia-do-autopropelido.vercel.app', // ← troque pela sua URL final
  integrations: [sitemap()],
  output: 'static',
});
