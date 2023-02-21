function solve(numberOne, numberTwo, numberThree) {
    if (numberOne > numberTwo && numberOne > numberThree) {
        console.log('The largest number is ' + numberOne + '.');
    }

    if (numberTwo > numberOne && numberTwo > numberThree) {
        console.log('The largest number is ' + numberTwo + '.');
    }

    if (numberThree > numberTwo && numberOne < numberThree) {
        console.log('The largest number is ' + numberThree + '.');
    }
}