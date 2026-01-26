// tailwind.config.mjs
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}', // все файлы проекта
  ],
  theme: {
    extend: {}, // сюда можно добавлять кастомные стили
  },
  plugins: [
    typography, // подключаем плагин типографики
  ],
}
