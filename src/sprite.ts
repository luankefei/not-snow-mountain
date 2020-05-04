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
    console.log("sprite constructor", name, painter);
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
    console.log("Sprint ==========> ", this.painter, this.visible);
    if (this.painter !== undefined && this.visible) {
      console.log("in");
      this.painter.paint(this, context);
    }
  }

  update(context: CanvasRenderingContext2D, time: number) {
    for (let i = 0; i < this.behaviors.length; i++) {
      this.behaviors[i].execute(this, context, time);
    }
  }
}

export default Sprite;
