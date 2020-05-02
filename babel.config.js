// await (babel.loadPartialConfigAsync || babel.loadPartialConfig)(args);
// babel.config.js
module.exports = (api) => {
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
