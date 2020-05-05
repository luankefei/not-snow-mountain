// babel.config.js

// module.exports = (api) => {
export default (api) => {
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
