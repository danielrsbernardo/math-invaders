class Player {
  constructor(position, velocity) {
    this.position = position;
    this.velocity = velocity;
    this.width = 150;
    this.height = 50;
  }

  update(canvasWidth, context) {
    this.draw(context);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x <= 0) {
      this.position.x = 0;
    } else if (this.position.x + this.width >= canvasWidth) {
      this.position.x = canvasWidth - this.width;
    }
  }

  draw(context) {
    context.fillStyle = "#fff";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
