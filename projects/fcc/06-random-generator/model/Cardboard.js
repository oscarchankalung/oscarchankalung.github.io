function Cardboard () {
  this.view = document.querySelector('.cardboard');
}

Cardboard.prototype.renderCardboard = function (card) {
  this.view.innerHTML = '';

  const cardInfoLeft = document.createElement('div');
  const cardInfoRight = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardName = document.createElement('p');
  const cardFlavorText = document.createElement('p');
  const cardText = document.createElement('p');
  const cardArtistName = document.createElement('p');

  cardInfoLeft.classList.add('card-info', 'left');
  cardInfoRight.classList.add('card-info', 'right');
  cardImage.className = 'card-image';
  cardName.className = 'card-name';
  cardFlavorText.className = 'card-flavor-text';
  cardText.className = 'card-text';
  cardArtistName.className = 'card-artist-name';

  cardImage.src = card.image;
  cardName.textContent = card.name;
  cardFlavorText.textContent = card.flavorText;
  cardText.innerHTML = card.text;
  cardArtistName.textContent = `Artist: ${card.artistName}`;

  cardInfoLeft.appendChild(cardImage);
  cardInfoRight.appendChild(cardName);
  cardInfoRight.appendChild(cardFlavorText);
  cardInfoRight.appendChild(cardText);
  cardInfoRight.appendChild(cardArtistName);
  this.view.appendChild(cardInfoLeft);
  this.view.appendChild(cardInfoRight);
};

export default Cardboard;
