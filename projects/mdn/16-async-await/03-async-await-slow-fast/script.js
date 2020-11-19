function timeout(interval) {
  return new Promise(resolve => setTimeout(resolve, interval));
}

async function slowTimeTest() {
  await timeout(1000);
  await timeout(1000);
  await timeout(1000);
}

async function fastTimeTest() {
  const timeout1 = timeout(1000);
  const timeout2 = timeout(1000);
  const timeout3 = timeout(1000);

  await timeout1;
  await timeout2;
  await timeout3;
}

async function test(timeTest) {
  let startTime = Date.now();
  await timeTest();
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  alert(`Time taken for ${timeTest.name}: ${timeTaken} milliseconds`);
}

async function main_async_await() {
  await test(slowTimeTest);
  await test(fastTimeTest);
}

function main_async_then() {
  test(slowTimeTest).then(() => test(fastTimeTest));
}

function main_sync_then() {
  test(slowTimeTest).then(test(fastTimeTest));
}

const btn1 = document.querySelector('#main-async-await');
const btn2 = document.querySelector('#main-async-then');
const btn3 = document.querySelector('#main-sync-then');

btn1.addEventListener('click', main_async_await);
btn2.addEventListener('click', main_async_then);
btn3.addEventListener('click', main_sync_then);