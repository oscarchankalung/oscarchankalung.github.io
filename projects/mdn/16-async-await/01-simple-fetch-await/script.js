async function myFetch(path) {

  let response = await fetch(path);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let blob = await response.blob();
    let objectURL = URL.createObjectURL(blob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  }
  
}

myFetch('../coffee.jpg')
.catch(e => {
  console.log(e)
})