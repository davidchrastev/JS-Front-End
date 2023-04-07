function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let expenses = 0;
  let shieldCount = 0;

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0) {
      expenses += helmetPrice;
    }
    if (i % 3 === 0) {
      expenses += swordPrice;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      expenses += shieldPrice;
      shieldCount++;
      if (shieldCount % 2 === 0) {
        expenses += armorPrice;
      }
    }
  }

  return `Gladiator expenses: ${expenses.toFixed(2)} aureus`;
}
