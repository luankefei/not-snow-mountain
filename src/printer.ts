import Spirit from "spirit";

class ImagePainter {
  image: HTMLImageElement;

  constructor(image: HTMLImageElement) {
    this.image = image;
  }

  paint(spirit: Spirit, context: CanvasRenderingContext2D) {
    context.drawImage(
      this.image,
      spirit.left,
      spirit.top,
      spirit.width,
      spirit.height
    );
  }
}

class BallPainter {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  paint(spirit: Spirit, context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(
      spirit.left + spirit.width / 2,
      spirit.top + spirit.height / 2,
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

export { ImagePainter, BallPainter };
