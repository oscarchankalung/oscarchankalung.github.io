const button = document.querySelector('.start');
const spinner = document.querySelector('.spinner');
const result = document.querySelector('.result');

let rotateCount = 0;
let startTime = null;
let rAF;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function draw(timestamp) {
  if (!startTime) {
    startTime = timestamp;
  }

  rotateCount = (timestamp - startTime) / 5;

  if (rotateCount > 359) {
    rotateCount %= 360;
  }

  spinner.style.transform = `rotate(${rotateCount}deg)`;
  rAF = requestAnimationFrame(draw);
}

spinner.style.display = "none";
result.style.display = "none";
button.addEventListener('click', start);

function start() {
  button.style.display = 'none';
  spinner.style.display = 'block'
  draw();
  setTimeout(setEndgame, random(3000, 8000));
}

function setEndgame() {
  cancelAnimationFrame(rAF);
  spinner.style.display = 'none';
  result.style.display = 'inline-block';
  result.textContent = 'Players Go!!';
    
  document.addEventListener('keydown', keyHandler);

  function keyHandler(e) {
    let isOver = false;

    if (e.key === 'a') {
      result.textContent = 'Player 1 Won!!'
      isOver = true;
    } else if (e.ley === 'l') {
      result.textContent = 'Player 2 Won!!'
      isOver = true;
    }

    if (isOver) {
      document.removeEventListener('keydown', keyHandler);
      setTimeout(reset, 3000);
    }
  }
}

function reset() {
  button.style.display = 'inline-block';
  result.style.display = 'none';
  result.textContent = '';
}
