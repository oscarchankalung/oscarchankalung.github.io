// navbar-icon
let navTrigger = document.getElementById('nav-icon'); 
let navContent = document.getElementById('nav-list');

// activate button device width <= 700
navTrigger.addEventListener('click', function() {
	let width = document.documentElement.clientWidth;
	if (width <= 700) {
		navTrigger.classList.toggle('invisible');
		navContent.classList.toggle('invisible');
		navContent.classList.contains('invisible')
		? navTrigger.src = 'https://oscarchankalung.github.io/img/navbar-icon/icon-umbrella-thick-fold.png'
		: navTrigger.src = 'https://oscarchankalung.github.io/img/navbar-icon/icon-umbrella-thick-unfold.png';
	}
});

function dynamicNavbar() {
	let width = document.documentElement.clientWidth;
	// hide navbar when device width > 700
	if (width > 700) {
		navContent.classList.remove('invisible');
		navTrigger.classList.remove('invisible');
		navTrigger.src = 'https://oscarchankalung.github.io/img/navbar-icon/icon-umbrella-thick-unfold.png';
	}
	// show navbar when device width <= 700
	if (width <= 700) {
		navContent.classList.add('invisible');
		navTrigger.classList.add('invisible');
		navTrigger.src = 'https://oscarchankalung.github.io/img/navbar-icon/icon-umbrella-thick-fold.png';
	}
}
window.addEventListener('resize', dynamicNavbar);
dynamicNavbar();