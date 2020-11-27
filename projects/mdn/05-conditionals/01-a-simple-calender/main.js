// variables: DOM

const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

// variables: constant

const gregorian = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31
};

// function and event

document.addEventListener('DOMContentLoaded', () => {
  console.log('onload');
  createOption(Object.keys(gregorian));
  selectEvent();
});
select.addEventListener('change', () => {
  selectEvent();
});

function selectEvent () {
  const choice = select.value;
  console.log(choice);
  createCalendar(gregorian[choice], choice);
}

function createOption (options) {
  for (let i = 0; i < options.length; i++) {
    const selectItem = document.createElement('option');
    selectItem.value = options[i];
    selectItem.textContent = options[i];
    select.appendChild(selectItem);
  }
}

function createCalendar (days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}
