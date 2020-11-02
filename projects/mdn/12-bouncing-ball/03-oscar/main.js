// setup canvas

const para = document.querySelector('p');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = document.body.clientWidth;
const height = canvas.height = document.body.clientHeight;

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomSign() {
  return Math.random() < 0.5 ? -1 : 1;
}

// create 25 balls

const balls = [];
while (balls.length < 25) {
  let size = random(10,20);
  let ball = new Ball(
    random(0, width),
    random(0, height),
    random(2,7) * randomSign(),
    random(2,7) * randomSign(),
    size,
    `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`,
  );
  balls.push(ball);
  para.textContent = 'Ball count: ' + balls.length;
}
// create evilCircle

const evilCircle = new EvilCircle();
evilCircle.setControls();

// update frame

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect();
  requestAnimationFrame(loop);
}
loop();