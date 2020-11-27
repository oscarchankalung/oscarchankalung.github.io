const spinner = document.querySelector('div');

let spinning = false;
let rotateCount = 0;
let startTime = null;
let rAF;

document.body.addEventListener('click', () => {
  spinning = !spinning;
  spinning ? draw() : cancelAnimationFrame(rAF);
});

function draw (timestamp) {
  // set startTime
  if (!startTime) {
    startTime = timestamp;
  }

  // set rotateCount
  rotateCount = (timestamp - startTime) / 5;

  // set maximum rotateCount
  if (rotateCount > 359) {
    rotateCount %= 360;
  }
  spinner.style.transform = `rotate(${rotateCount}deg)`;
  rAF = requestAnimationFrame(draw);
}
