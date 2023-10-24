import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // vite.config.js

  build: {
    outDir: "build", // O 'dist' si deseas cambiarlo
  },

  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
