import Cardboard from './model/Cardboard.js';
import Library from './model/Library.js';
import Control from './model/Control.js';
import CardFactory from './model/CardFactory.js';

const app = new App();

function App () {
  CardFactory.init().then(cardFactory => {
    this.cardFactory = cardFactory;
    this.cardboard = new Cardboard();
    this.library = new Library();
    this.control = new Control();

    this.cardCount = this.cardFactory.cardCount;
    this.cardPage = null;
    this.card = null;

    this.control.btnRand.style.visibility = 'visible';
    this.control.view.addEventListener('click', (event) => this.handleControl(event));
    this.library.view.addEventListener('click', (event) => this.handleControl(event));
  });
};

App.prototype.handleControl = async function (event) {
  this.setCardPage(event.target.id);
  this.setVisibility();
  this.card = await this.cardFactory.getCard(this.cardPage);
  this.cardboard.renderCardboard(this.card);
  this.library.updateHistory(String(this.cardPage), this.card.image);
};

App.prototype.setCardPage = function (buttonID) {
  if (buttonID === 'rand') {
    this.cardPage = this.randomCardPage();
  } else if (buttonID === 'prev') {
    this.cardPage--;
  } else if (buttonID === 'next') {
    this.cardPage++;
  } else if (buttonID.match(/cardPage#\d+/)) {
    this.cardPage = buttonID.replace(/cardPage#/, '');
  }
};

App.prototype.randomCardPage = function () {
  const newCardPage = Math.floor(Math.random() * this.cardCount) + 1;
  return this.cardPage !== newCardPage ? newCardPage : this.randomCardPage();
};

App.prototype.setVisibility = function () {
  const showPrev = this.cardPage && this.cardPage > 1;
  const showNext = this.cardPage && this.cardPage < this.cardCount;
  const prevVisibility = showPrev ? 'visible' : 'hidden';
  const nextVisibility = showNext ? 'visible' : 'hidden';
  this.control.btnPrev.style.visibility = prevVisibility;
  this.control.btnNext.style.visibility = nextVisibility;
};
