// export default {
module.exports = {
  testEnvironment: "jsdom",

  // testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
  },
};
