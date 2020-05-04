// babel.config.js

console.log("12");
// module.exports = (api) => {
export default (api) => {
  console.log("1234");
  const isTest = api.env("test");
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
            // esmodules: true
          },
        },
      ],
      "@babel/preset-typescript",
    ],
  };
};
