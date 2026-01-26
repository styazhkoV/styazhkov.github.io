import { defineConfig } from 'astro/config';
// import tailwind from '@astrojs/tailwind';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://styazhkov.github.io',
  integrations: [],

  // Если ты тестируешь локально, trailingSlash может влиять на 404
  trailingSlash: 'ignore',

  vite: {
    plugins: [tailwindcss()]
  }
});