function rotateArray(input, rotations) {
  for (let i = 0; i < rotations; i++) {
    let temp = input.shift();
    input.push(temp);
  }
  console.log(input.join(" "));
}
