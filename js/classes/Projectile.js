class Projectile {
  constructor(position) {
    this.position = position;

    this.radius = 10;
    this.color = "#ff0";
    this.velocity = 5;
    this.isActive = true;
  }

  update(context) {
    this.draw(context);
    this.position.y -= this.velocity;
  }

  draw(context) {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2,
      false,
    );
    context.fill();
  }
}
