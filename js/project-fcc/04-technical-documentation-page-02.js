window.onload = function() {

	// js-toggle
	let navTrigger = document.getElementById('js-toggle');
	let navContent = document.getElementById('navigation');

	navTrigger.addEventListener('click', function() {
		navTrigger.classList.toggle('border')
		navContent.classList.toggle('active')
	});

	// js-angle
	let angleTrigger = document.getElementsByClassName('js-angle');
	let angleAwesome = document.getElementsByClassName('fa-angle');
	let angleContent = document.getElementsByClassName('articles');

	for (let n = 0; n < angleTrigger.length; n++) {
		angleTrigger[n].addEventListener('click', function() {
			angleContent[n].classList.toggle('active');
			angleContent[n].classList.contains('active') 
			? angleAwesome[n].classList.replace('fa-angle-down', 'fa-angle-up')
			: angleAwesome[n].classList.replace('fa-angle-up', 'fa-angle-down');
		});
	}

	// show current when device width >= 920
	let currentAwesome = document.getElementsByClassName('js-angle current')[0];
	let currentContent = document.getElementsByClassName('articles current')[0];

	function unfoldCurrent() {
		let width = document.documentElement.clientWidth;
		if (width >= 920 && !currentContent.classList.contains('active')) {
			currentAwesome.classList.replace('fa-angle-down', 'fa-angle-up');
			currentContent.classList.toggle('active');
		};
	};

	window.addEventListener('resize', unfoldCurrent);
	unfoldCurrent();
};