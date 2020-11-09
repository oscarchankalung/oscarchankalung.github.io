function timeout(message, interval) {
  return new Promise((resolve, reject) => {
    if (message === '' || typeof message !== 'string') {
      reject('Message is empty or not a string');
    } else if (interval < 0 || typeof interval !== 'number') {
      reject('Interval is negative or not a number');
    } else {
      setTimeout(resolve, interval, message);
    }
  })
}

timeout('Hello there!', 3000)
.then(message => alert(message))
.catch(error => console.log('Error:' + error));