import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ghPages({
      // Опции плагина
      branch: "gh-pages",
      repo: "https://github.com/KUstimenko/3d-portfolio.git",
      dir: "dist",
    }),
  ],
});
