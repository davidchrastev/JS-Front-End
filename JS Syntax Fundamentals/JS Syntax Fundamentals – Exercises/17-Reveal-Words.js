function revealWords(words, template) {
  // Split the words and template strings into arrays
  const wordArr = words.split(", ");
  const templateArr = template.split(" ");

  // Iterate through the template array and replace each * with a word of the same length
  const outputArr = templateArr.map((word) => {
    if (word.includes("*")) {
      const matchingWord = wordArr.find((w) => w.length === word.length);
      return matchingWord || word;
    }
    return word;
  });

  // Join the output array back into a string and return it
  return outputArr.join(" ");
}
