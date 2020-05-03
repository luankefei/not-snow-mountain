// import "jest-canvas-mock";
import Game from "../src/main.ts";

test("getCanvasElement with incurrent id, to equal TypeError", () => {
  expect(() => {
    const game = new Game("flying-tiger");
  }).toThrowError(TypeError);
});

test("getCanvasElement with incurrent nodeType, to equal TypeError", () => {
  const node = document.createElement("div");
  node.id = "flying-tiger";
  document.body.appendChild(node);
  expect(() => {
    const game = new Game(node.id);
  }).toThrowError(TypeError);
});

test("Game.canvas is instance of HTMLCanvasElement", () => {
  // const node = document.createElement("canvas");

  // console.log("----->", node);
  // node.id = "flying-tiger";
  // document.body.appendChild(node);
  const game = new Game();
  expect(game.canvas instanceof HTMLCanvasElement).toBeTruthy();
});

test("new Game to get context type", () => {
  // const node = document.createElement("canvas");
  // node.id = "flying-tiger";
  // document.body.appendChild(node);
  const game = new Game();
  expect(game.context.constructor).toBe(CanvasRenderingContext2D);
});
