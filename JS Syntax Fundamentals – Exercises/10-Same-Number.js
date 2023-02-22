function solve(number) {
  const numString = number.toString();

  const firstDigit = numString[0];

  let allSame = true;

  let sum = 0;

  for (let i = 0; i < numString.length; i++) {
    if (numString[i] !== firstDigit) {
      allSame = false;
    }
    sum += parseInt(numString[i]);
  }
  
  console.log(allSame);
  console.log(sum);
}
