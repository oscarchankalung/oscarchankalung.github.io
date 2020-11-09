let coffee = '../coffee.jpg'
let tea = '../tea.jpg'
let description = '../description.txt'
let assets = [coffee, tea, description];

assets = assets.map(asset => fetchAndDecode(asset));

Promise.all(assets).then(assets => {
  
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

})

function fetchAndDecode(url) {
  return fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      let type = response.headers.get('content-type');
      if (type.includes('image')) {
        return response.blob()
      } else if (type.includes('text')) {
        return response.text()
      }
    }
  })
  .catch(e => {
    console.log(`There has been a problem with your fetch operation: ${e.message}`);
  })
}
