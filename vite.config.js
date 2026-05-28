import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        privacyPolicy: fileURLToPath(
          new URL("./politica-de-privacidade/index.html", import.meta.url),
        ),
      },
    },
  },
});
