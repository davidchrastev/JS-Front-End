function solve(numberOne, numberTwo, operator) {
  // '+', '-', '*', '/', '%', '**'
  switch (operator) {
    case "+":
      console.log(numberOne + numberTwo);
      break;
    case "-":
      console.log(numberOne - numberTwo);
      break;
    case "*":
      console.log(numberOne * numberTwo);
      break;
    case "/":
      console.log(numberOne / numberTwo);
      break;
    case "%":
      console.log(numberOne % numberTwo);
      break;
    case "**":
      console.log(numberOne ** numberTwo);
      break;
  }
}
