function spiceMustFlow(startingYield) {
  let days = 0;
  let totalSpice = 0;

  while (startingYield >= 100) {
    let currentSpice = startingYield - 26;
    totalSpice += currentSpice;
    startingYield -= 10;
    days++;
  }

  if (totalSpice >= 26) {
    totalSpice -= 26;
  }

  console.log(days);
  console.log(totalSpice);
}
