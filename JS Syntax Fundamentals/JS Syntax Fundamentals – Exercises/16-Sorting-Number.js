function sortArray(arr) {

  // arr.sort((a, b) => a - b); // sort the array in ascending order
  // let result = [];
  // let i = 0;
  // let j = arr.length - 1;
  // while (i <= j) {
  //   if (i === j) {
  //     result.push(arr[i]); // push the last element if there's only one left
  //   } else {
  //     result.push(arr[i], arr[j]); // push the smallest and largest elements
  //   }
  //   i++;
  //   j--;
  // }
  // return result;

  let sorted = [...arr].sort((a, b) => a - b);
  let step = 0;
  let result = [];
  
  while (sorted.length > 0) {
    if (step % 2 == 0) {
      let firstEl = result.shift();
      result.push(firstEl);
    } else {
      let lastEl = result.pop();
      result.push(lastEl);
    }

    step++;
  }

  return result;

}
