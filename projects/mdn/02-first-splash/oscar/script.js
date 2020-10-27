// game variables
let answer = Math.floor(Math.random() * 100) + 1;
let guesses = [];

// presentation components: form
const form = document.querySelector("#form");
const formNumber = document.querySelector("#form #number");
const formSubmit = document.querySelector("#form #submit");

// presentation components: output
const outputGuesses = document.querySelector("#output #guesses");
const outputResult = document.querySelector("#output #result");
const outputHint = document.querySelector("#output #hint");
let outputReset;

console.log("answer", answer);
formNumber.focus();
form.addEventListener('submit', submitGuess);

function submitGuess(event) {

  event.preventDefault();

  // store guesses and update result
  let guess = Number(formNumber.value);
  guesses.push(guess);
  outputGuesses.textContent = "Previous guesses: " + guesses.join(" ");

  // check result and update others 
  if (guess === answer) {
    outputResult.textContent = "Correct";
    outputResult.style.background = "green";
    outputHint.textContent = "";
    stopGame();
  } else if (guesses.length === 10) {
    outputResult.textContent = "Game Over"
    outputHint.textContent = "";
    stopGame();
  } else {
    outputResult.textContent = "Wrong";
    outputResult.style.background = "red";
    outputHint.textContent = guess < answer ? "Too Low" : "Too High"
  }

  // reset and focus formNumber
  formNumber.value = null;
  formNumber.focus();
}

function stopGame() {

  // disable form
  formNumber.setAttribute("disabled", true);
  formSubmit.setAttribute("disabled", true);

  // create button "outputReset"
  outputReset = document.createElement("button");
  outputReset.textContent = "Start new game";
  outputHint.parentNode.appendChild(outputReset);
  outputReset.addEventListener("click", resetGame);

}

function resetGame() {

  // reset output elements
  outputGuesses.textContent = "";
  outputResult.textContent = "";
  outputHint.textContent = "";
  outputReset.parentNode.removeChild(outputReset);
  outputResult.style.background = "white";

  // reset form elements
  formNumber.removeAttribute("disabled");
  formSubmit.removeAttribute("disabled");
  formNumber.value = null;
  formNumber.focus();

  // reset answer and guess
  answer = Math.floor(Math.random() * 100) + 1;
  guesses = [];
  console.log("answer", answer);
  
}