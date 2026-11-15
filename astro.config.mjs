import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cantinhodigital.shop',
  output: 'static',
  integrations: [tailwind({
    applyBaseStyles: true
  })],
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
