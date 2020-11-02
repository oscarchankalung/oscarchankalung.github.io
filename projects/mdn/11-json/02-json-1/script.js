const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json')
.then(response => response.json())
.then(json => displayCatInfo(json))

function displayCatInfo(cats) {
  let total = 0;
  let female = 0;

  for (let i = 0; i < cats.length; i++) {
    // update motherInfo
    if (i < cats.length - 1) {
      motherInfo += `${ cats[i].name }, `;
    } else {
      motherInfo += `and ${ cats[i].name }.`;
    }

    // update kittenInfo
    for (let j = 0; j < cats[i].kittens.length; j++) {
      if (cats[i].kittens[j].gender === 'f') {
        female++;
      }
      total++;
    }
  }

  kittenInfo = `There are ${ total } kittens in total, ${ female } females and ${ total - female } males.`;
  
  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);