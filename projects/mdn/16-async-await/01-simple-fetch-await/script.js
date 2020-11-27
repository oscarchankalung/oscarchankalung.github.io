async function myFetch (path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    const image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  }
}

myFetch('../coffee.jpg')
  .catch(e => {
    console.log(e);
  });
