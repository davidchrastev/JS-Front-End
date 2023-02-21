function solve(day, age) {

  if (age < 0 || age > 122) {
    console.log("Error!");
  }

  switch (day) {
    case "Weekday":
      if (age >= 0 && age <= 18) {
        console.log(12 + "$");
      }

      if (age > 18 && age <= 64) {
        console.log(18 + "$");
      }

      if (age > 64 && age <= 122) {
        console.log(12 + "$");
      }

      break;
    case "Weekend":
      if (age >= 0 && age <= 18) {
        console.log(15 + "$");
      }

      if (age > 18 && age <= 64) {
        console.log(20 + "$");
      }

      if (age > 64 && age <= 122) {
        console.log(15 + "$");
      }

      break;
    case "Holiday":
      if (age >= 0 && age <= 18) {
        console.log(5 + "$");
      }

      if (age > 18 && age <= 64) {
        console.log(12 + "$");
      }

      if (age > 64 && age <= 122) {
        console.log(10 + "$");
      }

      break;
  }
}
