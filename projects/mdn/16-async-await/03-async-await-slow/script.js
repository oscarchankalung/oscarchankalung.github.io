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

async function main_sync_await() {
  await test(slowTimeTest);
  await test(fastTimeTest);
}

function main_sync_callback() {
  test(slowTimeTest).then(() => test(fastTimeTest));
}

function main_async_callback() {
  test(slowTimeTest).then(test(fastTimeTest));
}

main_async_callback()