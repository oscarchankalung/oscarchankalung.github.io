window.onload=function(){
	let navToggle = document.getElementById('js-nav-toggle');
	let navMenu = document.getElementById('js-nav-menu');

	navToggle.addEventListener('click', function () {
		navMenu.classList.toggle('active-menu');
		navToggle.classList.toggle('active-toggle')
	});
}