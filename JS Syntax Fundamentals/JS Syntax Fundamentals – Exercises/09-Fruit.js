function calculateFruitCost(fruit, weight, pricePerKg) {
  let kgWeight = weight / 1000;
  let cost = kgWeight * pricePerKg;
  let formattedCost = cost.toFixed(2);
  let formattedWeight = kgWeight.toFixed(2);

  console.log(
    `I need $${formattedCost} to buy ${formattedWeight} kilograms ${fruit}.`
  );
}
