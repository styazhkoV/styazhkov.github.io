import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://styazhkov.github.io',
  integrations: [tailwind()],
  // Если ты тестируешь локально, trailingSlash может влиять на 404
  trailingSlash: 'ignore' 
});