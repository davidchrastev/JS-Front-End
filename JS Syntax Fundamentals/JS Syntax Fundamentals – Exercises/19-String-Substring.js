function solve(word, text) {
  text.toLowerCase();
  let check = text.split(" ");

  for (let i = 0; i < check.length; i++) {
    let current = check[i].toLowerCase();
    if (current === word) {
      return word;
    }
  }

  return word + " not found!";
}
