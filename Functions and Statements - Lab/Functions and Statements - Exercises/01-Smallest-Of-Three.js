function smallestNumber(numberOne, numberTwo, numberThree) {
  let arr = [numberOne, numberTwo, numberThree];
  let min = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log(min);
}
