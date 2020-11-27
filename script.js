window.onload = function () {
  // navbar-icon
  const navTrigger = document.getElementById('nav-icon');
  const navContent = document.getElementById('nav-list');

  // activate button device width <= 700
  navTrigger.addEventListener('click', () => {
    const width = document.documentElement.clientWidth;
    if (width <= 700) {
      navTrigger.classList.toggle('invisible');
      navContent.classList.toggle('invisible');
      navContent.classList.contains('invisible')
        ? navTrigger.src = 'https://oscarchankalung.github.io/img/navbar-icon/icon-umbrella-thick-fold.png'
        : navTrigger.src = 'https://oscarchankalung.github.io/img/navbar-icon/icon-umbrella-thick-unfold.png';
    }
  });

  function dynamicNavbar () {
    const width = document.documentElement.clientWidth;
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

  // language-switch
  const languageButton = document.getElementsByClassName('language-button');
  const languageText = document.getElementsByClassName('introduction');

  for (let n = 0; n < languageButton.length; n++) {
    languageButton[n].addEventListener('click', () => {
      for (let m = 0; m < languageButton.length; m++) {
        if (m === n && !languageButton[m].classList.contains('visible')) {
          languageButton[m].classList.add('visible');
          languageText[m].classList.add('visible');
        } else if (m !== n && languageButton[m].classList.contains('visible')) {
          languageButton[m].classList.remove('visible');
          languageText[m].classList.remove('visible');
        }
      }
    });
  }
};
