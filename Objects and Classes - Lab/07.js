function meetings(arr) {
  let schedule = {};
  let successfulMeetings = [];

  for (let i = 0; i < arr.length; i++) {
    let [day, person] = arr[i].split(" ");
    if (schedule[day]) {
      console.log(`Conflict on ${day}!`);
    } else {
      console.log(`Scheduled for ${day}`);
      schedule[day] = person;
      successfulMeetings.push(`${day} -> ${person}`);
    }
  }

  console.log(successfulMeetings.join("\n"));
}
