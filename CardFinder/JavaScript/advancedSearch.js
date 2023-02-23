var cardL = [];
var count = 0;
var cardSpot = 0;

cardList = async (e) => {
    // Calls for one mana white cards
  const response = await fetch(
    `https://api.scryfall.com/cards/search?q=c%3Awhite+mv%3D1`
  );
  const card = await response.json();
    // Puts them all in custom array
  while (card.has_more == true && count <= 175) {
    cardL[count] = card.data[count];
    console.log(card.data[count]);
    count++;
  }
};

// Moves card right
cardCallRight = async (e) => {
  const card = cardL[cardSpot];
  const imageEl = document.getElementById("card");
  imageEl.src = card.image_uris.normal;
  cardSpot++;
};

// Moves card left
cardCallLeft = async (e) => {
    const card = cardL[cardSpot];
    const imageEl = document.getElementById("card");
    imageEl.src = card.image_uris.normal;
    cardSpot--;
  };
