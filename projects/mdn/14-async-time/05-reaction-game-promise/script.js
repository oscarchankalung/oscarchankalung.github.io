const button = document.querySelector('.start');
const spinner = document.querySelector('.spinner');
const result = document.querySelector('.result');

let rotateCount = 0;
let startTime = null;
let rAF;

/* Helper Functions */

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function draw (timestamp) {
  if (!startTime) {
    startTime = timestamp;
  }

  rotateCount = (timestamp - startTime) / 5;

  if (rotateCount > 359) {
    rotateCount %= 360;
  }

  spinner.style.transform = `rotate(${rotateCount}deg)`;
  return requestAnimationFrame(draw);
}

function timeout (ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

/* Main Game */

spinner.style.display = 'none';
result.style.display = 'none';
button.addEventListener('click', main);

async function main () {
  await startGame();
  await setEndgame();
  resetGame();
}

async function startGame () {
  button.style.display = 'none';
  spinner.style.display = 'block';
  rAF = draw();
  await timeout(random(5000, 8000));
  cancelAnimationFrame(rAF);
}

function setEndgame () {
  spinner.style.display = 'none';
  result.style.display = 'inline-block';
  result.textContent = 'Players Go!!';

  return new Promise((resolve, reject) => {
    document.addEventListener('keydown', keyHandler);

    async function keyHandler (e) {
      let isOver = false;

      if (e.key === 'a' || e.key === 'A') {
        result.textContent = 'Player 1 Won!!';
        isOver = true;
      } else if (e.ley === 'l' || e.key === 'L') {
        result.textContent = 'Player 2 Won!!';
        isOver = true;
      }

      if (isOver) {
        document.removeEventListener('keydown', keyHandler);
        await timeout(3000);
        resolve();
      }
    }
  });
}

function resetGame () {
  button.style.display = 'inline-block';
  result.style.display = 'none';
  result.textContent = '';
}
