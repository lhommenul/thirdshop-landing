// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

const DEFAULT_LOCALE = "en";

// https://astro.build/confi
export default defineConfig({
    prefetch: true,
  vite: {    
      plugins: [tailwindcss()],  
  },

  i18n: {
      locales: ["en", "fr"],
      defaultLocale: DEFAULT_LOCALE,
      routing: {
          prefixDefaultLocale: true,
          fallbackType: "rewrite"
      },
      fallback: {
          fr: DEFAULT_LOCALE
      }
  },

  env: {
      schema: {
          DEFAULT_LOCALE: envField.string({ context: "client", access: "public", default: DEFAULT_LOCALE }),
      }
  },

  adapter: node({
    mode: "standalone"
  })
});