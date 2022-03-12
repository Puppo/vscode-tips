import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vscode-tips-and-tricks/",
  build: {
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
    },
  },
  plugins: [react()],
});
