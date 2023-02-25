function calculateBitcoinPurchase(goldMined) {
  const BITCOIN_PRICE = 11949.16;
  const GOLD_PRICE = 67.51;
  let totalMoney = 0;
  let bitcoinsBought = 0;
  let dayOfFirstBitcoin = -1;

  for (let i = 0; i < goldMined.length; i++) {
    let goldForTheDay = goldMined[i];
    if ((i + 1) % 3 === 0) {
      goldForTheDay *= 0.7;
    }
    let moneyForTheDay = goldForTheDay * GOLD_PRICE;
    totalMoney += moneyForTheDay;

    while (totalMoney >= BITCOIN_PRICE) {
      totalMoney -= BITCOIN_PRICE;
      bitcoinsBought++;
      if (dayOfFirstBitcoin === -1) {
        dayOfFirstBitcoin = i + 1;
      }
    }
  }

  console.log(`Bought bitcoins: ${bitcoinsBought}`);
  if (bitcoinsBought > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
