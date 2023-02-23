function validityChecker(x1, y1, x2, y2) {
  const distances = [
    {
      points: `{${x1}, ${y1}} to {0, 0}`,
      distance: Math.sqrt(x1 * x1 + y1 * y1),
    },
    {
      points: `{${x2}, ${y2}} to {0, 0}`,
      distance: Math.sqrt(x2 * x2 + y2 * y2),
    },
    {
      points: `{${x1}, ${y1}} to {${x2}, ${y2}}`,
      distance: Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)),
    },
  ];

  distances.forEach(({ points, distance }) => {
    if (Number.isInteger(distance)) {
      console.log(`${points} is valid`);
    } else {
      console.log(`${points} is invalid`);
    }
  });
}
