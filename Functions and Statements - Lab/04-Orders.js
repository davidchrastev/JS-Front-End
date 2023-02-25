function calculateTotalPrice(product, quantity) {
  let pricePerUnit;
  switch (product) {
    case "coffee":
      pricePerUnit = 1.5;
      break;
    case "water":
      pricePerUnit = 1.0;
      break;
    case "coke":
      pricePerUnit = 1.4;
      break;
    case "snacks":
      pricePerUnit = 2.0;
      break;
    default:
      console.log("Invalid product");
      return;
  }
  const totalPrice = pricePerUnit * quantity;
  console.log(totalPrice.toFixed(2));
}
