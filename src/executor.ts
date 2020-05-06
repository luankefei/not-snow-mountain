import Sprite from "../src/sprite";

const runInPlace = {
  lastAdvance: 0,
  PAGEFLIP_INTERVAL: 100,

  execute(sprite: Sprite, _: CanvasRenderingContext2D, now: number) {
    if (now - this.lastAdvance > this.PAGEFLIP_INTERVAL) {
      sprite.painter.advance();
      this.lastAdvance = now;
    }
  },
};

const moveLeftToRight = {
  lastMove: 0,

  execute(sprite: Sprite, context: CanvasRenderingContext2D, time: number) {
    if (this.lastMove !== 0) {
      sprite.left -= sprite.velocityX * ((time - this.lastMove) * 1000);

      if (sprite.left < 0) {
        sprite.left = context.canvas.width;
      }
    }
    this.lastMove = time;
  },
};

export { runInPlace, moveLeftToRight };
