const timeoutWatch = document.querySelector('.timeout-watch');
const intervalWatch = document.querySelector('.interval-watch');

const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

let timeoutDelta = 0;
let timeoutDelay = 1000;
let intervalDelta = 0;
const intervalDelay = 1000;

let startTime;
let timeout;
let interval;

start.addEventListener('click', () => {
  startTime = Date.now();
  recursiveTimeout();
  interval = setInterval(refreshInterval, intervalDelay, startTime);
  start.disabled = true;
});

reset.addEventListener('click', () => {
  startTime = null;
  clearTimeout(timeout);
  clearInterval(interval);
  start.disabled = false;
  timeoutDelta = 0;
  intervalDelta = 0;
  displayWatch(timeoutWatch, timeoutDelta);
  displayWatch(intervalWatch, intervalDelta);
});

function recursiveTimeout () {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    refreshTimeout(startTime);
    return recursiveTimeout();
  }, timeoutDelay);
}

function refreshTimeout (startTime) {
  timeoutDelta = (Date.now() - startTime);
  timeoutDelay = 1000 - timeoutDelta % 1000;
  displayWatch(timeoutWatch, timeoutDelta);
}

function refreshInterval (startTime) {
  intervalDelta = (Date.now() - startTime);
  displayWatch(intervalWatch, intervalDelta);
}

function displayWatch (watch, time) {
  const hours = Math.floor(time / 1000 / 3600);
  const minutes = Math.floor(time / 1000 % 3600 / 60);
  const seconds = Math.floor(time / 1000 % 60);
  const milliseconds = time % 1000;

  const displayHours = hours.toString().padStart(2, '0');
  const displayMinutes = minutes.toString().padStart(2, '0');
  const displaySeconds = seconds.toString().padStart(2, '0');
  const displayMilliseconds = milliseconds.toString().padStart(3, '0');

  watch.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
}

displayWatch(timeoutWatch, timeoutDelta);
displayWatch(intervalWatch, intervalDelta);
