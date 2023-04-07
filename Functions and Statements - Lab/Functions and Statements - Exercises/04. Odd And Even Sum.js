function sumEvenOddDigits(num) {
  let evenSum = 0;
  let oddSum = 0;

  while (num > 0) {
    let digit = num % 10;

    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }

    num = Math.floor(num / 10);
  }

  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
