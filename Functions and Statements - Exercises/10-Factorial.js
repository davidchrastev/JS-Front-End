function factorialDivision(numberOne, numberTwo) {
  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  let factorial1 = factorial(numberOne);
  let factorial2 = factorial(numberTwo);
  let division = factorial1 / factorial2;
  console.log(division.toFixed(2));
}
