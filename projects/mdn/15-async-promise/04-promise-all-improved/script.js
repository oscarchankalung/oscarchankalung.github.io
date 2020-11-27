const coffee = '../coffee.jpg';
const tea = '../tea.jpg';
const description = '../description.txt';
let assets = [coffee, tea, description];

assets = assets.map(asset => fetchAndDecode(asset));

Promise.all(assets).then(assets => {
  assets.map(asset => {
    if (typeof asset === 'object') {
      const objectURL = URL.createObjectURL(asset);
      const image = document.createElement('img');
      image.src = objectURL;
      document.body.appendChild(image);
    } else if (typeof asset === 'string') {
      const text = asset;
      const para = document.createElement('p');
      para.textContent = text;
      document.body.appendChild(para);
    }
  });
});

function fetchAndDecode (url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const type = response.headers.get('content-type');
        if (type.includes('image')) {
          return response.blob();
        } else if (type.includes('text')) {
          return response.text();
        }
      }
    })
    .catch(e => {
      console.log(`There has been a problem with your fetch operation: ${e.message}`);
    });
}
