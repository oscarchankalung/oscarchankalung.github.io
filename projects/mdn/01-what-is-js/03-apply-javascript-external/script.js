// Function: creates a new paragraph and appends it to the bottom of the HTML body.
function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

// 1. Get references to all the buttons on the page in an array format.
const buttons = document.querySelectorAll('button');

// 2. Loop through all the buttons and add a click event listener to each one.
for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}

// When any button is pressed, the createParagraph() function will be run.