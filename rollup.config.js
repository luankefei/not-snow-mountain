import fs from "fs";
import { rollup } from "rollup";
import typescript from "@rollup/plugin-typescript";
// import sourcemaps from "rollup-plugin-sourcemaps";

// rollup.config.js
const config = {
  input: "src/main.ts",
  plugins: [
    typescript({
      exclude: "node_modules/**",
      module: "ESNext",
    }),
    // sourcemaps(),
  ],
  output: {
    name: "$",
    file: "dist/index.js",
    format: "iife",
  },
};

// export default
export default rollup(config)
  .then((bundle) => bundle.generate(config.output))
  .then(({ output: [{ code }] }) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(config.output.file, code, (err) => {
        if (err) return reject(err);

        console.log("TODO: without gzipped");
        resolve();
      });
    });
  });
