import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    react(),
    tailwind(), // ✅ Astro-managed Tailwind ONLY
  ],
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src/', import.meta.url).pathname,
      },
    },
  },
});
