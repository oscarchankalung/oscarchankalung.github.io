async function fetchAndDecode (url) {
  try {
    const response = await fetch(url);
    let content;

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const type = response.headers.get('content-type');
      if (type.includes('image')) {
        content = await response.blob();
      } else if (type.includes('text')) {
        content = await response.text();
      }
      return content;
    }
  } finally {
    console.log(`fetch attempt for "${url}" finished.`);
  }
}

async function displayContent (asset) {
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
}

const source = '../';
const coffee = 'coffee.jpg';
const tea = 'tea.jpg';
const description = 'description.txt';
let assets = [coffee, tea, description];
assets = assets.map(asset => source + asset);

Promise.resolve(assets)
  .then(assets => {
    return Promise.all(assets.map(asset => fetchAndDecode(asset)));
  })
  .then(urls => {
    return urls.map(url => displayContent(url));
  })
  .catch(e => {
    console.log(e);
  });
