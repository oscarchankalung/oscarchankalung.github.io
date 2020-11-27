function Library () {
  this.view = document.querySelector('.library');
  this.history = [];
};

Library.prototype.updateHistory = function (cardPage, cardImage) {
  this.removeHistory(cardPage);
  this.addHistory(cardPage, cardImage);
};

Library.prototype.removeHistory = function (cardPage) {
  for (let i = 0; i < this.history.length; i++) {
    if (this.history[i] === cardPage) {
      this.history.splice(i, 1);
      this.view.removeChild(this.view.childNodes[i]);
      break;
    }
  };
};

Library.prototype.addHistory = function (cardPage, cardImage) {
  this.history.unshift(cardPage);
  const button = document.createElement('img');
  button.className = 'history';
  button.id = `cardPage#${cardPage}`;
  button.src = cardImage;
  this.view.prepend(button);
};

export default Library;
