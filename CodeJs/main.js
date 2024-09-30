let baseUrl = "https://api.coincap.io/v2";
let assetsUrl = baseUrl + "/assets";
let exchangesUrl = baseUrl + "/exchanges";

async function getAssetsList() {
  let response = await fetch(assetsUrl);
  let body = await response.json();

  return body.data;
}

function renderItem(asset) {
  let assetRank = asset.rank;
  let assetName = asset.name;
  let assetPrice = asset.priceUsd;

  console.log(assetRank + ". " + assetName + " $" + assetPrice);
}

async function displayAssets() {
  let list = await getAssetsList();

  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    renderItem(item);
  }
}

displayAssets();
