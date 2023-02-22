function solve(start, end) {
    let sum = 0;
    var numbers = "";

    for (let i = start; i <= end; i++) {
        sum += i;
        numbers += i + " ";
    }

    console.log(numbers);
    console.log("Sum: " + sum);
}