import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/index.js", // The entry point for your library
      name: "FeedbackFab", // Global variable name for UMD builds
      fileName: (format) => `feedback-fab.${format}.js`, // Output filenames
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    minify: false,
  },
});
