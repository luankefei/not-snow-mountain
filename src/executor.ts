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

export { runInPlace };
