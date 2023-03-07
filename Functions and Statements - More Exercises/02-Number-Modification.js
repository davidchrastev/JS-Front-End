function numberModification(number) {
  let digits = number.toString().split("");
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }

  let average = sum / digits.length;
  let result = number;

  while (average < 5) {
    result += "9";
    sum += 9;
    digits.push("9");
    average = sum / digits.length;
  }

  return result;
}


console.log(numberModification(1234)); // 12349
console.log(numberModification(555)); // 555
console.log(numberModification(123456)); // 1234569