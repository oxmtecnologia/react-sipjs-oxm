import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "react-sipjs-oxm",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});