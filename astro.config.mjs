import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  site: 'https://styazhkov.github.io',

  // Настройки URL
  trailingSlash: 'ignore',

  // Интеграции
  integrations: [],

  // Vite конфигурация
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Styazhkov Site',
          short_name: 'Styazhkov',
          start_url: '/',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#000000',
          icons: [
            { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
          ]
        }
      })
    ],
    server: {
      fs: {
        strict: true,
        allow: ['src', 'public']
      }
    },
    build: {
      sourcemap: false,
      minify: 'esbuild'
    }
  }
});
