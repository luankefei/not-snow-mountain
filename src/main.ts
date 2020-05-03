/**
 *
 */
class Game {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  spirits: any[];

  // 默认全屏创建
  constructor(id: string = "") {
    this.canvas = id
      ? getCanvasElementById(id)
      : createCanvas(screen.availWidth, screen.availHeight);
    this.context = getCanvasRenderingContext2D(this.canvas);
    this.spirits = [];
  }
}

function getCanvasElementById(id: string) {
  const canvas = document.getElementById(id) as HTMLCanvasElement;
  if (!canvas || canvas.constructor !== HTMLCanvasElement) {
    throw new TypeError(
      `The element of id "${id}" is not a HTMLCanvasElement. Make sure a <canvas id="${id}""> element is present in the document.`
    );
  }
  return canvas;
}

function getCanvasRenderingContext2D(
  node: HTMLCanvasElement
): CanvasRenderingContext2D {
  const context = node.getContext("2d");
  if (context === null) {
    throw new Error(
      "This browser does not support 2-dimensional canvas rendering contexts."
    );
  }
  return context;
}

function createCanvas(width: number, height: number) {
  const node = document.createElement("canvas");
  node.id = "canvas";
  node.width = width || screen.availWidth;
  node.height = height || screen.availHeight;
  document.body.appendChild(node);

  return node;
}

export { Game };
export default Game;
