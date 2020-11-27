window.onload = function () {
  const navToggle = document.getElementById('js-nav-toggle');
  const navMenu = document.getElementById('js-nav-menu');

  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active-menu');
    navToggle.classList.toggle('active-toggle');
  });
};
