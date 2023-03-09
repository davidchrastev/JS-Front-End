function addressBook(arr) {
  let book = {};

  for (let i = 0; i < arr.length; i++) {
    let [name, address] = arr[i].split(":");
    book[name] = address;
    console.log(`${name} -> ${address}`);
  }

  let sortedNames = Object.keys(book).sort();
  for (let i = 0; i < sortedNames.length; i++) {
    let name = sortedNames[i];
    console.log(`${name} -> ${book[name]}`);
  }
}
