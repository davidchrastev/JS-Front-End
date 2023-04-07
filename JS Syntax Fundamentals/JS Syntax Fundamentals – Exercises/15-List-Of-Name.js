function solve(arr) {
  
  // let items = arr;
  // items.sort((a, b) => a.localeCompare(b));
  
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(`${i + 1}.${items[i]}`);
  // }

  return [...names]
  .sort((firstName, secondName) => firstName.localeCompare(secondName))
  .map((name, index) => `${index + 1}.${name}`)
  .join('\n');

}
