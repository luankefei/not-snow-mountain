import Sprite from "../src/sprite";

const runInPlace = {
  lastAdvance: 0,
  PAGEFLIP_INTERVAL: 1000,

  excute: function (sprite: Sprite, _: CanvasRenderingContext2D, now: number) {
    if (now - this.lastAdvance > this.PAGEFLIP_INTERVAL) {
      sprite.painter.advance();
      this.lastAdvance = now;
    }
  },
};

const moveLeftToRight = {
  lastMove: 0,

  execute: function (
    sprite: Sprite,
    _: CanvasRenderingContext2D,
    time: number
  ) {
    if (this.lastMove !== 0) {
      sprite.left -= sprite.velocityX * ((time - this.lastMove) * 1000);

      if (sprite.left < 0) {
        // TODO: 使用screen替代了canvas.width
        sprite.left = screen.width;
      }
    }
    this.lastMove = time;
  },
};

export { runInPlace, moveLeftToRight };
