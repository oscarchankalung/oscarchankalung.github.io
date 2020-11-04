const directory = document.querySelector('.projects-directory');

const owner = 'oscarchankalung';
const repo = 'oscarchankalung.github.io'
const path = 'projects/mdn'
const href = 'https://oscarchankalung.github.io/'
const request = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`

function getContent(request, create, parent) {
  fetch(request)
  .then(response => response.json())
  .then(json => create(json, parent))
}

// create folder
function createFolder(contents, parent) {
  for (content of contents) {
    if (content.type === 'dir') {

      let folder = document.createElement('li');
      let code = document.createElement('code');
      folder.className = 'folder';
      code.textContent = content.name;
      folder.appendChild(code);
      parent.appendChild(folder);

      getContent(request + '/' + content.name, createSubFolder, folder);
    }
  }
}

// create subfolder and anchor
function createSubFolder(contents, parent) {
  let folder = document.createElement('ul')
  for (content of contents) {
    if (content.type === 'dir') {

      let subfolder = document.createElement('li');
      let anchor = document.createElement('a');
      let code = document.createElement('code');

      subfolder.className = 'subfolder';
      anchor.href = href + content.path;
      code.textContent = content.name;

      anchor.appendChild(code);
      subfolder.appendChild(anchor);
      folder.appendChild(subfolder);

    }
  }
  parent.appendChild(folder);
}

getContent(request, createFolder, directory);