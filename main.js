const testNumeral = numeral(10878700).format('$0,0.00');
console.log(testNumeral);


// DOM Section:

let coinsSection = document.querySelector(".coinsSection");

function renderCoin(data){
    let row = document.createElement("div");
    row.classList.add ("coins-row");

    let rank = document.createElement("div");
    rank.textContent = data.rank;

    let coinNameContainer = document.createElement("div");
    coinNameContainer.classList.add("coin-name-container");

    let nameContainerImg = document.createElement("img");
    let symbolLowerCased = data.symbol.toLowerCase();
    let imageUrl =
      "https://assets.coincap.io/assets/icons/" + symbolLowerCased + "@2x.png";
    nameContainerImg.src = imageUrl;
    nameContainerImg.setAttribute("width","30");
    nameContainerImg.setAttribute("height","30");
    
    let nameContainerText = document.createElement("div");

    let nameContainerName = document.createElement("div");
    nameContainerName.classList.add("coin-name");
    nameContainerName.textContent = data.name;
    
    let nameContainerSymbol = document.createElement("div");
    nameContainerSymbol.classList.add("coin-symbol");
    nameContainerSymbol.textContent = data.symbol;

    
    let price = document.createElement("div");
    price.textContent = numeral(data.priceUsd).format('$0,0.00');

    let marketCap = document.createElement("div");
    marketCap.textContent = numeral(data.marketCapUsd).format("($ 0.00 a)");

    let vwp = document.createElement("div");
    vwp.textContent = numeral(data.vwap24Hr).format('$0,0.00');

    let supply = document.createElement("div");
    supply.textContent =numeral(data.supply).format("($ 0.00 a)");

    let volume = document.createElement("div");
    volume.textContent = numeral(data.volumeUsd24Hr).format("($ 0.00 a)");

    let change = document.createElement("div");
    change.textContent = numeral(data.changePercent24Hr).format("(0.000 %)");


    nameContainerText.appendChild(nameContainerName);
    nameContainerText.appendChild(nameContainerSymbol);
    
    coinNameContainer.appendChild(nameContainerImg);
    coinNameContainer.appendChild(nameContainerText);

    row.appendChild(rank);
    row.appendChild(coinNameContainer);
    row.appendChild(price);
    row.appendChild(marketCap);
    row.appendChild(vwp);
    row.appendChild(supply);
    row.appendChild(volume);
    row.appendChild(change);

    coinsSection.appendChild(row);
}

//errorSection:

function renderError(msg) {
  let errorContainer = document.createElement("div");
  errorContainer.textContent = msg;
  errorContainer.classList.add("error");

  coinsSection.appendChild(errorContainer);
}




//Fetch Section :

let baseUrl = "https://api.coincap.io/v2";
let assetsUrl = baseUrl + "/assets";

async function getAssetsList() {
    let response = await fetch(assetsUrl);
    let body = await response.json();
  
    return body.data;
  }

  async function renderCoinsList() {
    let list = await getAssetsList();
    
    list.forEach (function (item) {
        renderCoin(item);
    });}
  
    renderCoinsList().catch(function(error) {
       
      renderError("ERRRRRRRRRROR...!")

    });
