function processChunk(targetThickness, initialThickness) {
  const operations = [
    { name: "Cut", factor: 4 },
    { name: "Lap", factor: 0.8 },
    { name: "Grind", factor: 1 },
    { name: "Etch", factor: 1 },
    { name: "X-ray", factor: -1 },
    { name: "Transporting and washing", factor: 0 },
  ];

  function applyOperation(thickness, operation) {
    if (operation.factor < 0) {
      
      if (thickness <= 0) {
        throw new Error("");
      }
      thickness += operation.factor;
    } else {
      thickness *= operation.factor;
    }

    return Math.floor(thickness);
  }

  console.log(`Processing chunk ${initialThickness} microns`);
  let thickness = initialThickness;
  const operationsCount = {};
  while (thickness > targetThickness) {
    let bestOperation = null;
    let bestFactor = 0;
    for (const op of operations) {
      const newThickness = applyOperation(thickness, op);
      const factor = thickness - newThickness;
      if (factor > bestFactor) {
        bestOperation = op;
        bestFactor = factor;
      }
    }
    thickness = applyOperation(thickness, bestOperation);
    operationsCount[bestOperation.name] =
      (operationsCount[bestOperation.name] || 0) + 1;
    if (bestOperation.factor !== 0) {
      thickness = applyOperation(thickness, operations[5]);
    }
  }
  console.log(`Finished crystal ${thickness} microns`);
  for (const opName in operationsCount) {
    console.log(`${opName} x${operationsCount[opName]}`);
  }
  console.log("Transporting and washing");
}

const input = [1375, 50000];
for (let i = 1; i < input.length; i++) {
  processChunk(input[0], input[i]);
}