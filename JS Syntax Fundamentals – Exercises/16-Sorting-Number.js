function sortArray(arr) {
  arr.sort((a, b) => a - b); // sort the array in ascending order
  let result = [];
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (i === j) {
      result.push(arr[i]); // push the last element if there's only one left
    } else {
      result.push(arr[i], arr[j]); // push the smallest and largest elements
    }
    i++;
    j--;
  }
  return result;
}
