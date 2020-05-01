import { rollup } from "rollup";
import typescript from "@rollup/plugin-typescript";
import sourcemaps from "rollup-plugin-sourcemaps";

// rollup.config.js
export default rollup({
  input: "src/main.ts",
  plugins: [
    typescript({
      exclude: "node_modules/**",
      module: "ESNext",
    }),
    sourcemaps(),
  ],
  output: {
    file: "bundle.js",
    format: "iife",
  },
});
