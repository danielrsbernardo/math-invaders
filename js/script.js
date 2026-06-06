const canvas = document.querySelector("#canvas");

const context = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const position = {
  x: canvasWidth / 2 - 25,
  y: canvasHeight - 50,
};

const velocity = {
  x: 0,
  y: 0,
};

const player = new Player(position, velocity);

const keys = {
  left: {
    pressed: false,
  },

  right: {
    pressed: false,
  },
};

const loop = () => {
  requestAnimationFrame(loop);
  context.fillStyle = "#000";
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  if (keys.left.pressed) {
    player.velocity.x = -7;
  } else if (keys.right.pressed) {
    player.velocity.x = 7;
  } else {
    player.velocity.x = 0;
  }

  update();
};

const update = () => {
  player.update(canvasWidth, context);
};

loop();

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      keys.left.pressed = true;

      break;

    case "ArrowRight":
      keys.right.pressed = true;

      break;

    default:
      break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      keys.left.pressed = false;

      break;

    case "ArrowRight":
      keys.right.pressed = false;

      break;

    default:
      break;
  }
});
