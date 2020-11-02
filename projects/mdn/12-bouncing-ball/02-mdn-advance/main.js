// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = document.body.clientWidth;
const height = canvas.height = document.body.clientHeight;

let para = document.querySelector('p');
let count = 0;

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomSign() {
  return Math.random() < 0.5 ? -1 : 1;
}

// script to instantise 25 balls

const balls = [];

while (balls.length < 25) {
  let size = random(10,20);
  let ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(2,7) * randomSign(),
    random(2,7) * randomSign(),
    true,
    `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`,
    size
  );
  balls.push(ball);
  count++;
  para.textContent = 'Ball count: ' + count;
}

// script to instantsize evilCircle

let evilCircle = new EvilCircle(
  random(0, width),
  random(0, height),
  true
);
evilCircle.setControls();

// function to update frame

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    if (balls[i].exists) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }

  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect();
  requestAnimationFrame(loop);
}

loop();