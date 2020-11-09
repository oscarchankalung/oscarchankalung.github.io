async function fetchAndDecode(url) {

  try {

    let response = await fetch(url);

    let content;

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      let type = response.headers.get('content-type');
      if (type.includes('image')) {
        content = await response.blob()
      } else if (type.includes('text')) {
        content = await response.text()
      }
      return content;
    }

  } finally {
    console.log(`fetch attempt for "${url}" finished.`);
  }
}

async function displayContent() {

  let coffee = '../coffee.jpg'
  let tea = '../tea.jpg'
  let description = '../description.txt'
  let assets = [coffee, tea, description];

  assets = assets.map(asset => fetchAndDecode(asset));

  assets = await Promise.all(assets);
    
  assets.map(asset => {
    if (typeof asset === 'object') {
      let objectURL = URL.createObjectURL(asset);
      let image = document.createElement('img');
      image.src = objectURL;
      document.body.appendChild(image);
    } else if (typeof asset === 'string') {
      let text = asset;
      let para = document.createElement('p');
      para.textContent = text;
      document.body.appendChild(para);
    }
  })

}

displayContent()
.catch(e => {
  console.log(e);
})