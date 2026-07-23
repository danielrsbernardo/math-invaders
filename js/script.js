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

let enemies = [];
setInterval(() => {
  enemies.push(new Enemy(canvasWidth, canvasHeight));
}, 5000);

let projectiles = [];

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
  context.fillStyle = "rgba(0,0,0,0.9)";
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  if (keys.left.pressed) {
    player.velocity.x = -8;
  } else if (keys.right.pressed) {
    player.velocity.x = 8;
  } else {
    player.velocity.x = 0;
  }

  update();
  enemies.forEach((enemy) => {
    enemy.update(context);
    if (enemy.position.y >= canvas.height) {
      enemy.isActive = false;
    }
  });

  enemies = enemies.filter((e) => e.isActive);

  projectiles.forEach((projectile) => {
    projectile.update(context);

    if (projectile.position.y <= 0) {
      projectile.isActive = false;
    }
  });

  projectiles = projectiles.filter((e) => e.isActive);

  projectiles.forEach((projectile) => {
    enemies.forEach((enemy) => {
      if (
        projectile.position.x > enemy.position.x &&
        projectile.position.x < enemy.position.x + enemy.width &&
        projectile.position.y > enemy.position.y &&
        projectile.position.y < enemy.position.y + enemy.height
      ) {
        enemy.isActive = false;
        projectile.isActive = false;
      }
    });
  });

  enemies.forEach((enemy) => {
    if (
      enemy.position.x + enemy.width > player.position.x &&
      enemy.position.x < player.position.x + player.width &&
      enemy.position.y + enemy.height > player.position.y &&
      enemy.position.y < player.position.y + player.height
    ) {
      resetGame();
    }
  });

  enemies.forEach((enemy) => {
    if (enemy.position.y + enemy.height > canvas.height) {
      resetGame();
    }
  });
};

const update = () => {
  player.update(canvasWidth, context);
};

const resetGame = () => {
  player.position.x = canvasWidth / 2 - 25;
  player.position.y = canvasHeight - 50;
  player.velocity.x = 0;
  player.velocity.y = 0;
  enemies = [];
  projectiles = [];
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

    case " ":
      projectiles.push(
        new Projectile({
          x: player.position.x + player.width / 2,
          y: player.position.y,
        }),
      );

    default:
      break;
  }
});
