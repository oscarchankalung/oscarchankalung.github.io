const header = document.querySelector('header');
const section = document.querySelector('section');

// Obtaining the JSON
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = () => {
  const superHeroesText = request.response;
  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

// Populating the header
function populateHeader (json) {
  const myH1 = document.createElement('h1');
  myH1.textContent = `
    ${json.squadName}
  `;
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = `
    Hometown: ${json.homeTown} // 
    Formed: ${json.formed}
  `;
  header.appendChild(myPara);
}

// Creating the hero information cards
function showHeroes (json) {
  const heros = json.members;

  for (let i = 0; i < heros.length; i++) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = heros[i].name;
    myPara1.textContent = 'Secret identity: ' + heros[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heros[i].age;
    myPara3.textContent = 'Superpowers:';

    const powers = heros[i].powers;
    for (let j = 0; j < powers.length; i++) {
      const myListItem = document.createElement('li');
      myListItem.textContent = powers[j];
      myList.appendChild(myListItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

// Converting between objects and text

const myJSON = { name: 'Chris', age: '38' };
console.log(myJSON);
const myString = JSON.stringify(myJSON);
console.log(myString);
