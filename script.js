window.onload = function() {

	// navbar-icon
	let navTrigger = document.getElementById("nav-icon"); 
	let navContent = document.getElementById("nav-list");

	// activate button device width <= 700
	navTrigger.addEventListener('click', function() {
		let width = document.documentElement.clientWidth;
		if (width <= 700) {
			navTrigger.classList.toggle('invisible');
			navContent.classList.toggle('invisible');
			navContent.classList.contains('invisible')
			? navTrigger.src = 'img/navbar-icon/icon-umbrella-thick-fold.png'
			: navTrigger.src = 'img/navbar-icon/icon-umbrella-thick-unfold.png';
		}
	});

	function dynamicNavbar() {
		let width = document.documentElement.clientWidth;
		// hide navbar when device width > 700
		if (width > 700) {
			navContent.classList.remove('invisible');
			navTrigger.classList.remove('invisible');
			navTrigger.src = 'img/navbar-icon/icon-umbrella-thick-unfold.png';
		}
		// show navbar when device width <= 700
		if (width <= 700) {
			navContent.classList.add('invisible');
			navTrigger.classList.add('invisible');
			navTrigger.src = 'img/navbar-icon/icon-umbrella-thick-fold.png';
		}
	}
	window.addEventListener('resize', dynamicNavbar);
	dynamicNavbar();

	// language-switch
	let languageButton = document.getElementsByClassName('language-button');
	let languageText = document.getElementsByClassName('introduction');

	for (let n = 0; n < languageButton.length; n++) {
		languageButton[n].addEventListener('click', function() {
			for (let m = 0; m < languageButton.length; m++) {
				if (m == n && !languageButton[m].classList.contains('visible')) {
					languageButton[m].classList.add('visible');
					languageText[m].classList.add('visible');
				} else if (m != n && languageButton[m].classList.contains('visible')) {
					languageButton[m].classList.remove('visible');
					languageText[m].classList.remove('visible');
				}
			}
		})
	}

};