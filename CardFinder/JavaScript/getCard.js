fetchCard = async (e) => {
  // Getting the Scryfall data.
  const response = await fetch(`https://api.scryfall.com/cards/random`);
  const card = await response.json();
  console.log(card);
  applyInfoAndImage(card);
  // Updating the card with the image data.
  // const imageEl = document.getElementById("card");
  // imageEl.src = card.image_uris.normal;
  
};

searchCard = async (e) => {
// Gets value from searchbar
var sValue = document.getElementById("searchBar").value;
//Searches Scryfall api for card. Since I used fuzzy it doesnt have to be exact.
// were all const before
let response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=` + sValue);
let card = await response.json();
//alert(card.name);
// Logging the card that was searched
console.log(card)
applyInfoAndImage(card);
document.getElementById("cardL").src = "../images/mtgCardBack.jpg";
document.getElementById("cardR").src = "../images/mtgCardBack.jpg";
cardL = [];


};

function applyInfoAndImage(card)
{
  // Updating the card with the image data.
  let imageEl = document.getElementById("card");
  imageEl.src = card.image_uris.normal;

  // Updating the Card Information Box with attributes from 'card' object.
  let nameEl = document.getElementById("cardName");
  nameEl.textContent = card.name;

  let rarityEl = document.getElementById("cardRarity");
  //let raritySymbol = document.getElementById("raritySymbol");

  rarityImage = document.getElementById("raritySymbol");
  
  if (card.rarity == "common")
  {
    rarityEl.textContent = card.rarity;
    rarityEl.style.color = "black";
    rarityImage.src = "../images/commonSymbol.png";
  }
  if (card.rarity == "uncommon")
  {
    rarityEl.textContent = card.rarity;
    rarityEl.style.color = "#A0C3D3";
    rarityImage.src = "../images/uncommonSymbol.png"
  }
  if (card.rarity == "rare")
  {
    rarityEl.textContent = card.rarity;
    rarityEl.style.color = "#D1B572";
    rarityImage.src = "../images/rareSymbol.png"
  }
  if (card.rarity == "mythic")
  {
    rarityEl.textContent = card.rarity;
    rarityEl.style.color = "#E37704";
    rarityImage.src = "../images/mythicSymbol.png"
  }
  
  let setEl = document.getElementById("cardSet");
  setEl.textContent = card.set.toUpperCase();

  let flavorTextEl = document.getElementById("cardFlavorText");
  if (card.flavor_text != "")
  {
    flavorTextEl.textContent = card.flavor_text;
    flavorTextEl.style.visibility = "visible";
  }
  else{
    flavorTextEl.style.border = "none";
  }
  
  getPrice(card);
}

function getPrice(card)
{  // Link Elements
   let linkTCG = document.getElementById("linkTCG");
   let linkCH = document.getElementById("linkCH");
   // Price Elements
   let usdPrice = document.getElementById("USDprice");
   let usdFoilPrice = document.getElementById("USDfoilPrice");
   if (card.prices.usd != null)
   {
      usdPrice.textContent = "USD: $" + card.prices.usd;
   }
   else
   {
      usdPrice.textContent = "No USD Price Availbe";
   }
   if (card.prices.usd_foil != null)
   {
      usdFoilPrice.textContent = "USD Foil: $" + card.prices.usd_foil;
   }
   else
   {
      usdFoilPrice.textContent = "No USD Foil Price Available"
   }
   

   linkTCG.href = card.purchase_uris.tcgplayer;
   linkCH.href = card.purchase_uris.cardhoarder;
}


 