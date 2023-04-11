var cardL = [];
var count = 0;
var cardSpot = 0;

cardList = async (e) => {
  colors = "";
  amount = "";
  cardL = [];
  count = 0;
  cardSpot = 0;

  if (document.getElementById("manaTypeWhite").checked) {
    colors = colors + "W";
  }
  if (document.getElementById("manaTypeBlue").checked) {
    colors = colors + "U";
  }
  if (document.getElementById("manaTypeBlack").checked) {
    colors = colors + "B";
  }
  if (document.getElementById("manaTypeRed").checked) {
    colors = colors + "R";
  }
  if (document.getElementById("manaTypeGreen").checked) {
    colors = colors + "G";
  }
  if (document.getElementById("manaTypeColorless").checked) {
    colors = "C";
  }
  search =
    "https://api.scryfall.com/cards/search?&order=name&q=color%3D" +
    colors +
    "+%28game%3Apaper%29";

  if (
    document.getElementById("manaAmount") != null ||
    document.getElementById("manaAmount") != ""
  ) {
    ph = document.getElementById("manaAmount").value;
    amount = "+cmc%3D" + ph;
    search = search + amount;
  }
  console.log(search);

  const response = await fetch(search);
  const card = await response.json();
  // Puts them all in custom array
  while (count <= card.total_cards) {
    cardL[count] = card.data[count];
    console.log(card.data[count]);
    count++;
    if (count >= 175) {
      break;
    }
  }
  cardCallRight();
};

// Moves card right
cardCallRight = async (e) => {
  const card = cardL[cardSpot];
  const imageEl = document.getElementById("card");
  imageEl.src = card.image_uris.normal;
  moveRight();
  //   cardSpot++;
  applyInfoAndImage(card);
};

// Moves card left
cardCallLeft = async (e) => {
  const card = cardL[cardSpot - 1];
  const imageEl = document.getElementById("card");
  imageEl.src = card.image_uris.normal;
  // cardSpot--;
  moveLeft();
  applyInfoAndImage(card);
};

// New idea create two seperate ones if left click it goes to new one but sends past vari to left
moveRight = async (e) => {
  cardSpot++;

  try {
    const cardLeft = cardL[cardSpot - 2];
    const imageEl = document.getElementById("cardL");
    imageEl.src = cardLeft.image_uris.normal;
  } catch {
    document.getElementById("cardL").src = "../images/mtgCardBack.jpg";
  }

  try {
    const cardRight = cardL[cardSpot];
    const imageEl2 = document.getElementById("cardR");
    imageEl2.src = cardRight.image_uris.normal;

    console.log(cardSpot);
  } catch {
    document.getElementById("cardR").src = "../images/mtgCardBack.jpg";
  }
};

moveLeft = async (e) => {
  cardSpot--;
  try {
    const cardLeft = cardL[cardSpot - 1];
    const imageEl = document.getElementById("cardL");
    imageEl.src = cardLeft.image_uris.normal;
  } catch {
    document.getElementById("cardL").src = "../images/mtgCardBack.jpg";
  }

  const cardRight = cardL[cardSpot + 1];
  const imageEl2 = document.getElementById("cardR");
  imageEl2.src = cardRight.image_uris.normal;

  console.log(cardSpot);
};

function applyInfoAndImage(card) {
  // Updating the card with the image data.
  let imageEl = document.getElementById("card");
  imageEl.src = card.image_uris.normal;

  // Updating the Card Information Box with attributes from 'card' object.
  let nameEl = document.getElementById("cardName");
  nameEl.textContent = card.name;

  let rarityEl = document.getElementById("cardRarity");
  //let raritySymbol = document.getElementById("raritySymbol");

  rarityImage = document.getElementById("raritySymbol");

  if (card.rarity == "common") {
    rarityEl.textContent = card.rarity;
    rarityEl.style.color = "black";
    rarityImage.src = "../images/commonSymbol.png";
  }
  if (card.rarity == "uncommon") {
    rarityEl.textContent = card.rarity;
    rarityEl.style.color = "#A0C3D3";
    rarityImage.src = "../images/uncommonSymbol.png";
  }
  if (card.rarity == "rare") {
    rarityEl.textContent = card.rarity;
    rarityEl.style.color = "#D1B572";
    rarityImage.src = "../images/rareSymbol.png";
  }
  if (card.rarity == "mythic") {
    rarityEl.textContent = card.rarity;
    rarityEl.style.color = "#E37704";
    rarityImage.src = "../images/mythicSymbol.png";
  }

  let setEl = document.getElementById("cardSet");
  setEl.textContent = card.set.toUpperCase();

  let flavorTextEl = document.getElementById("cardFlavorText");
  if (card.flavor_text != "") {
    flavorTextEl.textContent = card.flavor_text;
    flavorTextEl.style.visibility = "visible";
  } else {
    flavorTextEl.style.border = "none";
  }

  getPrice(card);
}

function getPrice(card) {
  // Link Elements
  let linkTCG = document.getElementById("linkTCG");
  let linkCH = document.getElementById("linkCH");
  // Price Elements
  let usdPrice = document.getElementById("USDprice");
  let usdFoilPrice = document.getElementById("USDfoilPrice");
  if (card.prices.usd != null) {
    usdPrice.textContent = "USD: $" + card.prices.usd;
  } else {
    usdPrice.textContent = "No USD Price Availbe";
  }
  if (card.prices.usd_foil != null) {
    usdFoilPrice.textContent = "USD Foil: $" + card.prices.usd_foil;
  } else {
    usdFoilPrice.textContent = "No USD Foil Price Available";
  }

  linkTCG.href = card.purchase_uris.tcgplayer;
  linkCH.href = card.purchase_uris.cardhoarder;
}

// function Clear() {
//   cardL = [];
//   console.log("Cleared")
// }
