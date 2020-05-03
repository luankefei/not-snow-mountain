import Spirit from "../src/spirit";
import Game from "../src/main";
import { BallPainter } from "../src/painter";

test("create a spirit", () => {
  const game = new Game();
  const context = game.context;

  expect(() => {
    const ball = new Spirit("ball", {
      paint: BallPainter,
    });

    ball.left = 320;
    ball.top = 160;
    ball.paint(context);
  }).not.toThrow();
});
