function generateIconUrl2(symbol) {
  let lowerCasedSymbol = symbol.toLowerCase();
  let img =
    "https://assets.coincap.io/assets/icons/" + lowerCasedSymbol + "@2x.png";

  return {
    url: img,
  };
}

let myImage = generateIconUrl2("BTC");
console.log(myImage);
