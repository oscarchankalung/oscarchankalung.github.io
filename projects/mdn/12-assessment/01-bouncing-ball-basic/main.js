// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = document.body.clientWidth;
const height = canvas.height = document.body.clientHeight;

// function to generate random number

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomSign () {
  return Math.random() < 0.5 ? -1 : 1;
}

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(2, 7) * randomSign(),
    random(2, 7) * randomSign(),
    `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`,
    size
  );

  balls.push(ball);
}

function loop () {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();
