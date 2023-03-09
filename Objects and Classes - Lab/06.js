function phoneBook(arr) {
  let phoneBook = {};
  for (let i = 0; i < arr.length; i++) {
    let [name, phone] = arr[i].split(" ");
    phoneBook[name] = phone;
  }
  for (let name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
  }
}
