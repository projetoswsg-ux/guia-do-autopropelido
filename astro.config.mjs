import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://guia-do-autopropelido.vercel.app', // Substitua pela sua URL final se for diferente
  integrations: [sitemap()],
  output: 'static',
});
