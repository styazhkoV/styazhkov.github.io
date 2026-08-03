import pluginAstro from "eslint-plugin-astro";
import pluginTailwind from "eslint-plugin-tailwindcss";
import * as astroParser from "astro-eslint-parser";

export default [
  // JS/TS правила
  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module"
    },
    rules: {
      "no-unused-vars": "warn"
    }
  },

  // Astro правила
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      ecmaVersion: 2020,
      sourceType: "module"
    },
    plugins: {
      astro: pluginAstro
    }
  },

  // TailwindCSS правила
  {
    files: ["**/*.{js,ts,astro}"],
    plugins: {
      tailwindcss: pluginTailwind
    },
    settings: {
      tailwindcss: {
        config: "tailwind.config.mjs",
        cssFiles: ["src/style.css"], // путь обновлён
        removeDuplicates: true,
        callees: []
      }
    },
    rules: {
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off"
    }
  }
];
