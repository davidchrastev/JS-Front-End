function sum(numberOne, numberTwo, numberThree) {
  let sum = numberOne + numberTwo;

  function subtract(sum, number) {
    return sum - number;
  }

  console.log(subtract(sum, numberThree));
}
