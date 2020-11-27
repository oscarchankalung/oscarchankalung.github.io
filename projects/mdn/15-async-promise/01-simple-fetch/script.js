const promise = fetch('../coffee.jpg');

const prmoise2 = promise.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response.blob();
  }
});

const promise3 = prmoise2.then(myBlob => {
  const objectURL = URL.createObjectURL(myBlob);
  const image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
});

const errorCase = promise3.catch(e => {
  console.log(`There has been a problem with your fetch operation: ${e.message}`);
});
