function splitPascalCase(input) {
  // let splittedText = text.split("");
  // let result = [];
  // while (splittedText.length > 0) {
  //   let currentWord = "";
  //   currentWord += splittedText.shift();
  //   while (
  //     splittedText.length > 0 &&
  //     splittedText[0] === splittedText[0].toLowerCase()
  //   ) {
  //     currentWord += splittedText.shift();
  //   }
  //   result.push(currentWord);
  // }
  // console.log(result.join(", "));

  const regex = /[A-Z][a-z]*/g;
  const matches = input.match(regex);
  return matches.join(", ");
}
