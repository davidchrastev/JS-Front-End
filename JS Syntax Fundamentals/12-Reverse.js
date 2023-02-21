function solve(number, arr) {
    let reversed = [];

    for (let index = number - 1; index >= 0; index--){
        reversed.push(arr[index]);
    }

    let output = reversed.join(' ', reversed);

    console.log(output);
}