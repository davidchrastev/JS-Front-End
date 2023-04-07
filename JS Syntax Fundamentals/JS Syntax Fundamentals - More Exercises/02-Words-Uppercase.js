function uppercaseWords(str) {
  const words = str.match(/\w+/g);
  const uppercaseWords = words.map((word) => word.toUpperCase());
  const result = uppercaseWords.join(", ");
  return result;
}
