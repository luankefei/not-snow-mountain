import sprite from "sprite";

class ImagePainter {
  image: HTMLImageElement;

  constructor(image: HTMLImageElement) {
    this.image = image;
  }

  paint(sprite: sprite, context: CanvasRenderingContext2D) {
    context.drawImage(
      this.image,
      sprite.left,
      sprite.top,
      sprite.width,
      sprite.height
    );
  }
}

interface ICell {
  x: number;
  y: number;
  width: number;
  height: number;
}

class SpriteSheetPainter {
  cells: ICell[];
  cellIndex: number = 0;
  spriteSheet: HTMLImageElement;

  constructor(cells: any, spriteSheet: HTMLImageElement) {
    this.cells = cells;
    this.spriteSheet = spriteSheet;
  }

  advance() {
    // loop
    if (this.cellIndex === this.cells.length - 1) {
      this.cellIndex = 0;
    } else {
      this.cellIndex++;
    }
  }

  paint(sprite: sprite, context: CanvasRenderingContext2D) {
    console.log(
      "=====> SpriteSheetPainter.paint",
      this.cellIndex,
      this.cells,
      this.spriteSheet
    );
    const cell = this.cells[this.cellIndex];
    // context.fillStyle = "rgb(255, 255, 255)";
    // context.fillRect(cell.x, cell.y, cell.width, cell.height);
    context.drawImage(
      this.spriteSheet,
      cell.x,
      cell.y,
      cell.width,
      cell.height,
      sprite.left,
      sprite.top,
      cell.width,
      cell.height
    );
  }
}

class BallPainter {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  paint(sprite: sprite, context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(
      sprite.left + sprite.width / 2,
      sprite.top + sprite.height / 2,
      this.radius,
      0,
      Math.PI * 2,
      false
    );
    context.clip();
    context.shadowColor = "rgb(0,0,0)";
    context.shadowOffsetX = -4;
    context.shadowOffsetY = -4;
    context.shadowBlur = 8;
    context.lineWidth = 2;
    context.strokeStyle = "rgb(100,100,195)";
    context.fillStyle = "rgba(30, 144,255,0.15)";
    context.fill();
    context.stroke();
  }
}

export { ImagePainter, SpriteSheetPainter, BallPainter };
