import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  site: 'https://styazhkov.github.io',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Styazhkov | Системный и бизнес-аналитик',
          short_name: 'Styazhkov',
          start_url: '/',
          display: 'standalone',
          background_color: '#f8fafc',
          theme_color: '#3b82f6',
          icons: [
            { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
          ],
        },
      }),
    ],
    build: {
      sourcemap: false,
      minify: 'esbuild',
    },
  },
});
