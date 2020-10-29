/* Looping through images */

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

for (let i = 1; i <= 5; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  newImage.onclick = (event) => {
    displayedImage.src = event.target.src;
  }
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

btn.onclick = () => {
  if (btn.className === 'dark') {
    btn.className = 'light';
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.className = 'dark';
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}