function solve(countPeople, typeOfGroup, dayOfWeek) {
  let price = 0;

  switch (typeOfGroup) {
    case "Students":
      if (dayOfWeek === "Friday") {
        price = countPeople * 8.45;
      }
      if (dayOfWeek === "Saturday") {
        price = countPeople * 9.80;
      }
      if (dayOfWeek === "Sunday") {
        price = countPeople * 10.46;
      }

      if (countPeople >= 30) {
        price = price - (price * 0.15);
      }
      break;

    case "Business":
      if (countPeople >= 100) {
        countPeople -= 10;
      }

      if (dayOfWeek === "Friday") {
        price = countPeople * 10.90;
      }
      if (dayOfWeek === "Saturday") {
        price = countPeople * 15.60;
      }
      if (dayOfWeek === "Sunday") {
        price = countPeople * 16;
      }
      break;

    case "Regular":
      if (dayOfWeek === "Friday") {
        price = countPeople * 15;
      }
      if (dayOfWeek === "Saturday") {
        price = countPeople * 20;
      }
      if (dayOfWeek === "Sunday") {
        price = countPeople * 22.50;
      }

      if (countPeople >= 10 && countPeople <= 20) {
        price = price - (price * 0.05);
      }

      break;
  }


  console.log("Total price: " + price.toFixed(2));
}
