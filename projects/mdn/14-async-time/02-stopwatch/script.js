const countWatch = document.querySelector('.count-watch');
const dateWatch = document.querySelector('.date-watch');

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

let lastDatedelta = 0;
let datedelta = 0;
let secondCount = 0;

let startTime;
let stopwatch;

start.addEventListener('click', () => {
  startTime = Date.now();
  stopwatch = setInterval(refreshTime, 1000, startTime);
  start.disabled = true;
});

pause.addEventListener('click', () => {
  startTime = null;
  clearInterval(stopwatch);
  start.disabled = false;
  lastDatedelta = datedelta;
})

reset.addEventListener('click', () => {
  startTime = null;
  clearInterval(stopwatch);
  start.disabled = false;
  lastDatedelta = 0;
  datedelta = 0;
  secondCount = 0;
  displayTime();
})

function refreshTime(startTime) {
  secondCount++;
  datedelta = (Date.now() - startTime) + lastDatedelta;
  displayTime();
}

function displayTime() {
  displayWatch(countWatch, secondCount * 1000);
  displayWatch(dateWatch, datedelta);
}

function displayWatch(watch, time) { 
  let hours = Math.floor(time / 1000 / 3600);
  let minutes = Math.floor(time / 1000 % 3600 / 60);
  let seconds = Math.floor(time / 1000 % 60);
  let milliseconds = time % 1000;

  let displayHours = hours.toString().padStart(2, '0');
  let displayMinutes = minutes.toString().padStart(2, '0');
  let displaySeconds = seconds.toString().padStart(2, '0');
  let displayMilliseconds = milliseconds.toString().padStart(3, '0');

  watch.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
}

displayTime();