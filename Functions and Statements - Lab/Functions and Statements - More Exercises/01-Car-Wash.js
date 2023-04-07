function calculateCleanness(commands) {
  let result = 10;

  for (let i = 1; i < commands.length; i++) {
    let currentCommand = commands[i];

    switch (currentCommand) {
      case "soap":
        result += 10;
        break;

      case "water":
        result = result + result * 0.2;
        break;

      case "vacuum cleaner":
        result = result + result * 0.25;
        break;
      case "mud":
        result = result - result * 0.1;
        break;
    }
  }

  console.log(`The car is ${result.toFixed(2)}% clean.`);
}
