fetchCard = async (e) => {
  // Getting the Scryfall data.
  const response = await fetch(`https://api.scryfall.com/cards/random`);
  const card = await response.json();

  // Updating the card with the image data.
  const imageEl = document.getElementById("card");
  imageEl.src = card.image_uris.normal;
};

searchCard = async (e) => {
// Gets value from searchbar
  var sValue = document.getElementById("searchBar").value;
//Searches Scryfall api for card. Since I used fuzzy it doesnt have to be exact.
  const response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=` + sValue);
  const card = await response.json();

  // Updating the card with the image data.
  const imageEl = document.getElementById("card");
  imageEl.src = card.image_uris.normal;

};
