import sprite from "../src/sprite";
import Game from "../src/main";
import { BallPainter } from "../src/painter";

test("create a sprite", () => {
  const game = new Game();
  const context = game.context;

  expect(() => {
    const ball = new sprite("ball", new BallPainter(75));

    ball.left = 320;
    ball.top = 160;
    ball.paint(context);
  }).not.toThrow();
});
