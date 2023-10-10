import { defineConfig } from "vite";
import { resolve } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  base: "/restaurant-css-framework/",
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about", "index.html"),
        contact: resolve(root, "contact", "index.html"),
        menu: resolve(root, "menu", "index.html"),
        galerie: resolve(root, "galerie", "index.html"),
        signature: resolve(root, "galerie", "signature/index.html"),
        starters: resolve(root, "galerie", "starters/index.html"),
        maincourses: resolve(root, "galerie", "maincourses/index.html"),
        desserts: resolve(root, "galerie", "desserts/index.html"),
      },
    },
  },
});
