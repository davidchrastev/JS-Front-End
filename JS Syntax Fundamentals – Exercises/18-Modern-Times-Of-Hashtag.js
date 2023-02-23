function findSpecialWords(input) {
  const regex = /#(\w+)\b/g;
  const matches = input.match(regex);
  const specialWords = [];

  if (matches !== null) {
    matches.forEach((match) => {
      const word = match.slice(1);
      if (/^[a-zA-Z]+$/.test(word)) {
        specialWords.push(word);
      }
    });
  }

  return specialWords.join("\n");
}
