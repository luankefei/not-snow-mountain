import Spirit from "spirit";

function ballPainter(spirit: Spirit, context: CanvasRenderingContext2D) {
  const radius = 75;
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
  context.shadowOffsetX = -4;
  context.shadowOffsetY = -4;
  context.shadowBlur = 8;
  context.lineWidth = 2;
  context.strokeStyle = "rgb(100,100,195)";
  context.fillStyle = "rgba(30, 144,255,0.15)";
  context.fill();
  context.stroke();
}

export { ballPainter };
