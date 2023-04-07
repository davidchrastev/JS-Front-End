function solve(number) {

    if (number >= 0 && number <= 2) {
        console.log('baby');
    }

    if (number >= 3 && number <= 13) {
        console.log('child');
    }

    if (number >= 14 && number <= 19) {
        console.log('teenager');
    }

    if (number >= 20 && number <= 65) {
        console.log('adult');
    }

    if (number >= 66) {
        console.log('elder');
    }

    if (number < 0) {
        console.log('out of bounds');
    }

}