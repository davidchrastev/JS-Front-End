function solve(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      row += n + " ";
    }
    // Print row
    console.log(row.trim());
  }
}

solve(3);
