/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "sorting-utils",
      fileName: "sorting-utils",
    },
  },
  resolve: { alias: { "@": resolve(__dirname, "./src") } },
  plugins: [dts({ outDir: "dist" })],
});
