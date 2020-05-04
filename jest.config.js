// await (babel.loadPartialConfigAsync || babel.loadPartialConfig)(args);

export default {
  // module.exports = {
  // testEnvironment: "jest-environment-jsdom-fourteen",
  testEnvironment: "jsdom",

  // testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
  },
  setupFiles: ["jest-canvas-mock"],
};
