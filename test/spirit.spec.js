import Spirit from "../src/spirit";
import Game from "../src/main";

test("create a spirit", () => {
  const game = new Game();
  const context = game.context;
  const radius = 75;

  expect(() => {
    const ball = new Spirit("ball", {
      paint: function (spirit, context) {
        context.beginPath();
        context.arc(
          spirit.left + spirit.width / 2,
          spirit.top + spirit.height / 2,
          radius,
          0,
          Math.PI * 2,
          false
        );
        context.clip();
        context.shadowColor = "rgb(0,0,0)";
        context.shadowOffset = -4;
        context.shadowOffsetY = -4;
        context.shadowBlur = 8;
        context.lineWidth = 2;
        context.strokeStyle = "rgb(100,100,195)";
        context.filStyle = "rgba(30, 144,255,0.15)";
        context.fill();
        context.stroke();
      },
    });

    ball.left = 320;
    ball.top = 160;
    ball.paint(context);
  }).not.toThrow();
});
