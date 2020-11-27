const coffee = fetchAndDecode('../coffee.jpg', 'blob');
const tea = fetchAndDecode('../tea.jpg', 'blob');
const description = fetchAndDecode('../description.txt', 'text');

Promise.all([coffee, tea, description]).then(values => {
  console.log(values);

  const objectURL1 = URL.createObjectURL(values[0]);
  const objectURL2 = URL.createObjectURL(values[1]);
  const descText = values[2];

  const image1 = document.createElement('img');
  const image2 = document.createElement('img');
  const para = document.createElement('p');

  image1.src = objectURL1;
  image2.src = objectURL2;
  para.textContent = descText;

  document.body.appendChild(image1);
  document.body.appendChild(image2);
  document.body.appendChild(para);
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
