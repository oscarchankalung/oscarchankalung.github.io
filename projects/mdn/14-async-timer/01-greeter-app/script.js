const input = document.querySelector('input');
const greetBtn = document.querySelector('.greet');
const cancelBtn = document.querySelector('.cancel');
let greeting;

cancelBtn.disabled = true;

greetBtn.addEventListener('click', () => {
  cancelBtn.disabled = false;
  greeting = setTimeout(greet, 5000, input.value);
})

cancelBtn.addEventListener('click', () => {
  clearTimeout(greeting);
  cancelBtn.disabled = true;
  alert('Greeting cancalled!');
})

function greet(name) {
  alert(`Hello ${name}!`);
  cancelBtn.disabled = true;
}