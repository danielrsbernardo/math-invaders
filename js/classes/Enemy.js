class Enemy {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.velocity = { x: 0, y: 1 };
    this.width = 50;
    this.height = 50;
    this.color = "#f00";
    this.isActive = true;

    this.position = {
      x: Math.random() * canvasWidth,
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
