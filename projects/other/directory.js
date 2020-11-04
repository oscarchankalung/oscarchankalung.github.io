const directory = document.querySelector('#projects-div');

const owner = 'oscarchankalung';
const repo = 'oscarchankalung.github.io'
const path = 'projects/other'
const href = 'https://oscarchankalung.github.io/'
const request = `https://api.github.com/repos/${owner}`

let repos = [];

async function getRequest() {
  const response = await fetch(`${request}/${repo}/contents/${path}`)
  return response.json();
}

async function getRepos(contents) {
  console.log(contents);
  for (content of contents) {
    if (content.type === 'file' && content.size === 0)
    repos.push({name: content.name, html: content._links.html});
  }
  console.log(repos);
  return repos;
}

async function getAbout(repos) {
  for (let i in repos) {
    const response = await fetch(`${request}/${repos[i].name}`);
    const json = await response.json();
    repos[i].description = await json.description;
  }
  return repos;
}

async function createDirectory(repos) {
  for (let i in repos) {
    const div = document.createElement('div');
    const name = document.createElement('h3');
    const anchor = document.createElement('a');
    const code = document.createElement('code');
    const description = document.createElement('p');

    div.className = 'projects-directory';
    anchor.href = repos[i].html;
    code.textContent = repos[i].name;
    description.textContent = repos[i].description;

    name.appendChild(anchor);
    anchor.appendChild(code);
    div.appendChild(name);
    div.appendChild(description);
    directory.appendChild(div)
  }
}

getRequest()
.then(contents => getRepos(contents))
.then(repos => getAbout(repos))
.then(repos => createDirectory(repos))
