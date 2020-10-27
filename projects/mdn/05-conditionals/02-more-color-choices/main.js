const select = document.querySelector('select');
const container = document.querySelector('div');

const theme = {
  'White': ['white', 'black'],
  'Black': ['black', 'white'],
  'Purple': ['purple', 'white'],
  'Yellow': ['yellow', 'darkgray'],
  'Psychedelic': ['lime', 'purple']
}

createOption(Object.keys(theme));

select.onchange = () => {
  const choice = select.value;
  updateColor(theme[choice][0], theme[choice][1]);
}

function createOption(options) {
  options.forEach((option) => {
    const selectItem = document.createElement('option');
    selectItem.value = option;
    selectItem.textContent = option;
    select.appendChild(selectItem);
  })
}

function updateColor(bgColor, textColor) {
  container.style.backgroundColor = bgColor;
  container.style.color = textColor;
}