/**
 *
 */

class Sprite {
  top: number;
  left: number;
  width: number;
  height: number;
  velocityX: number;
  velocityY: number;

  name: string;
  painter: any;
  visible: boolean;
  animating: boolean;
  behaviors: any[];

  constructor(name: string, painter: any, behaviors: any[]) {
    if (painter !== undefined) this.painter = painter;

    this.top = 0;
    this.left = 0;
    this.width = 10;
    this.height = 10;
    this.velocityX = 0;
    this.velocityY = 0;

    this.name = name;
    this.visible = true;
    this.animating = false;
    this.behaviors = behaviors || [];

    return this;
  }

  paint(context: CanvasRenderingContext2D) {
    if (this.painter !== undefined && this.visible) {
      this.painter.paint(this, context);
    }
  }

  update(context: CanvasRenderingContext2D, time: number) {
    for (const b of this.behaviors) {
      b.execute(this, context, time);
    }
  }
}

export default Sprite;
