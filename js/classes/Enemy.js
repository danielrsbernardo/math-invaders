class Enemy {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.velocity = { x: 0, y: 3 };
    this.width = 50;
    this.height = 50;
    this.color = "rgba(255, 0, 0, 0.55)";
    this.isActive = true;

    this.position = {
      x: Math.random() * (canvasWidth - this.width),
      y: -this.height,
    };
  }

  update(context) {
    this.draw(context);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
