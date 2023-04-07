function calculateDistance(values) {
  let x1 = values[0];
  let y1 = values[1];
  let x2 = values[2];
  let y2 = values[3];

  const distance1 = Math.sqrt(x1 * x1 + y1 * y1);
  const distance2 = Math.sqrt(x2 * x2 + y2 * y2);
  const distance3 = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

  if (Number.isInteger(distance1)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  if (Number.isInteger(distance2)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  if (Number.isInteger(distance3)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

calculateDistance([3, 0, 0, 4]);
calculateDistance([2, 1, 1, 1]);