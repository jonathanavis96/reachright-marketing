// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  // Important for GitHub Pages project sites:
  // In production, serve under the repo subpath so assets resolve correctly.
  // Example site URL: https://<user>.github.io/reachright-marketing/
  base: mode === "production" ? "/reachright-marketing/" : "/",

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Safe defaults; not strictly required but nice to be explicit.
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
}));
