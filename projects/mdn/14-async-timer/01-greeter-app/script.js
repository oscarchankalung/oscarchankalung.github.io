const input = document.querySelector('input');
const greetBtn = document.querySelector('.greet');
const cancelBtn = document.querySelector('.cancel');
let greeting;

input.value = "Oscar";
cancelBtn.disabled = true;

greetBtn.addEventListener('click', () => {
  greetBtn.disabled = true;
  cancelBtn.disabled = false;
  greeting = setTimeout(greet, 5000, input.value);
})

cancelBtn.addEventListener('click', () => {
  clearTimeout(greeting);
  greetBtn.disabled = false;
  cancelBtn.disabled = true;
  alert('Greeting cancalled!');
})

function greet(name) {
  alert(`Hello ${name}!`);
  greetBtn.disabled = false;
  cancelBtn.disabled = true;
}