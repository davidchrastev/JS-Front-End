function splitPascalCase(input) {
  const regex = /[A-Z][a-z]*/g;
  const matches = input.match(regex);
  return matches.join(", ");
}
