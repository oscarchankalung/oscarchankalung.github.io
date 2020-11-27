function HttpError (response, message) {
  Error.call(this, message);
  this.name = 'HttpError';
  this.response = response;
};

function CardFactory () {
  this.client_id = 'f5ef9bd3e2444bfaba636329f2438a82';
  this.client_secret = 'oymYHiN7qgMXOVNvVGUP22LT4PodTW6f';
  this.authorize_url = 'https://us.battle.net/oauth/token';
  this.card_url = 'https://us.api.blizzard.com/hearthstone/cards?locale=en_US&';
  this.access_token = null;
  this.cardCount = null;
};

CardFactory.prototype.setToken = async function () {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', this.client_id);
  params.append('client_secret', this.client_secret);

  const response = await fetch(this.authorize_url, {
    method: 'POST',
    body: params,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  if (!response.ok) {
    throw new HttpError(response, 'Fail to retrieve access token');
  } else {
    const json = await response.json();
    this.access_token = json.access_token;
  }
};

CardFactory.prototype.setCardCount = async function () {
  const params = new URLSearchParams();
  params.append('setGroup', 'wild');
  params.append('pageSize', 1);

  const response = await fetch(this.card_url + params, {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + this.access_token }
  });

  if (!response.ok) {
    throw new HttpError(response, 'Fail to retrieve card count');
  } else {
    const json = await response.json();
    this.cardCount = json.cardCount;
  }
};

CardFactory.prototype.getCard = async function (cardPage) {
  const params = new URLSearchParams();
  params.append('setGroup', 'wild');
  params.append('pageSize', 1);
  params.append('page', cardPage);

  const response = await fetch(this.card_url + params, {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + this.access_token }
  });

  if (!response.ok) {
    throw new HttpError(response, 'Fail to retrieve card');
  } else {
    const json = await response.json();
    return json.cards[0];
  }
};

CardFactory.init = async function () {
  const cardFactory = new CardFactory();
  await cardFactory.setToken();
  await cardFactory.setCardCount();
  return cardFactory;
};

export default CardFactory;
