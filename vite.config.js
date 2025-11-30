import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    react(),
    UnoCSS() // handles virtual:uno.css imports
  ],
  resolve: {
    alias: [
      { find: "path", replacement: "path-browserify" }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        // if you have global SCSS variables you can import them here:
        additionalData: `@use "src/styles/variables.scss" as *;`
      }
    }
  }
});
