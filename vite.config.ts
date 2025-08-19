// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Explicitly mark this as a single-page app
  appType: "spa",

  server: {
    host: "::", // dev only
    port: 8080,
  },

  // Important for GitHub Pages project sites:
  // In production, serve under the repo subpath so assets resolve correctly.
  // Example site URL: https://<user>.github.io/reachright-marketing/
  base: "/",

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
}));
