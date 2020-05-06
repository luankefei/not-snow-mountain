import Sprite from "../src/sprite";

const runInPlace = {
  lastAdvance: 0,
  PAGEFLIP_INTERVAL: 100,

  execute(sprite: Sprite, _: CanvasRenderingContext2D, time: number) {
    if (time - this.lastAdvance > this.PAGEFLIP_INTERVAL) {
      sprite.painter.advance();
      this.lastAdvance = time;
    }
  },
};

const moveLeftToRight = {
  lastMove: 0,

  execute(sprite: Sprite, context: CanvasRenderingContext2D, time: number) {
    if (this.lastMove !== 0) {
      // TODO: 这里的100，是因为每帧限定在100ms，速度控制的姿势不好
      sprite.left =
        sprite.left - sprite.velocityX * ((time - this.lastMove) / 100);

      if (sprite.left < 0) {
        sprite.left = context.canvas.width;
      }
    }

    this.lastMove = time;
  },
};

export { runInPlace, moveLeftToRight };
