function findSpecialWords(input) {
  // const regex = /#(\w+)\b/g;
  // const matches = input.match(regex);
  // const specialWords = [];

  // if (matches !== null) {
  //   matches.forEach((match) => {
  //     const word = match.slice(1);
  //     if (/^[a-zA-Z]+$/.test(word)) {
  //       specialWords.push(word);
  //     }
  //   });
  // }

  // return specialWords.join("\n");

  let text = input;

  let words = text.split(" ");
  let result = [];

  for (const word of words) {
    if (word.length > 1 && word.startsWith("#") && checkIfWordIsValid(word)) {
      result.push(word.slice(1));
    }
  }

  console.log(result.join('\n'));

  function checkIfWordIsValid(currentWord) {
      return [...currentWord.toLowerCase()]
      .slice(1)
      .map((symbol) => symbol.charCodeAt(0))
      .every((charCode) => charCode >= 97 && charCode <= 122);
  }
}
