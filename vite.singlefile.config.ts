import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// Used only to produce a single self-contained HTML file for quick sharing/preview.
// The real app is built normally via `npm run build` (see vite.config.ts).
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: "dist-singlefile",
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
  },
});
