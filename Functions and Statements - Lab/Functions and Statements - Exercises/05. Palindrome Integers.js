function checkPalindromes(arr) {
    
  function isPalindrome(num) {
    let reversedNum = parseInt(num.toString().split("").reverse().join(""));
    return num === reversedNum;
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(isPalindrome(arr[i]) ? "true" : "false");
  }
}
