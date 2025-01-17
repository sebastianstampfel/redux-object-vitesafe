import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/redux-object.js"),
      name: "ReduxObjectVitesafe",
      // the proper extensions will be added
      fileName: "redux-object-vitesafe",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["core-js"],
      //   output: {
      //     // Provide global variables to use in the UMD build
      //     // for externalized deps
      //     globals: {
      //       vue: "Vue",
      //     },
      //   },
    },
  },
});
