function solve(numberOne, operator, numberTwo) {
  let result = 0;

  switch (operator) {
    case "+":
      result = numberOne + numberTwo;
      break;
    case "-":
      result = numberOne - numberTwo;
      break;
    case "/":
      result = numberOne / numberTwo;
      break;

    case "*":
      result = numberOne * numberTwo;
      break;
  }

  return result.toFixed(2);
}
