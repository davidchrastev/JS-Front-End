function calculatePyramid(base, increment) {
  let stoneTotal = 0;
  let marbleTotal = 0;
  let lapisTotal = 0;
  let goldTotal = 0;
  let heightTotal = 0;
  let currentWidth = base;
  let currentLength = base;

  for (let i = 1; currentWidth >= 1 && currentLength >= 1; i++) {
    let stone = (currentWidth - 2) * (currentLength - 2) * increment;
    let perimeter = 2 * (currentWidth + currentLength) - 4;
    let decoration = i % 5 === 0 ? "lapis" : "marble";
    let decorationQty =
      perimeter * increment - (decoration === "lapis" ? 4 : 0);
    let gold = i === 1 ? increment : 0;

    stoneTotal += stone;
    if (decoration === "marble") {
      marbleTotal += decorationQty;
    } else {
      lapisTotal += decorationQty;
    }
    goldTotal += gold;
    heightTotal += increment;

    currentWidth -= 2;
    currentLength -= 2;
  }

  console.log(`Stone required: ${Math.ceil(stoneTotal)}`);
  console.log(`Marble required: ${Math.ceil(marbleTotal)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisTotal)}`);
  console.log(`Gold required: ${Math.ceil(goldTotal)}`);
  console.log(`Final pyramid height: ${Math.floor(heightTotal / increment)}`);
}
