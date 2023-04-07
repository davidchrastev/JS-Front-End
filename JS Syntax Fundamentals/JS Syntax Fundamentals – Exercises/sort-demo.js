let numbers = [31, 2, 432, 32, 5, -1];
let names = ['Kiro', 'Pesho', 'Gosho', 'David']


//ascending
numbers.sort((num1, num2) => {
    return num1 - num2;
});


console.log(numbers);

//ascending Strings
names.sort((firstName, secondName) => {
    return firstName.localeCompare(secondName);
});

console.log(names);

//descending
numbers.sort((num1, num2) => {
    return num2 - num1;
});


console.log(numbers);

//descending Strings 
names.sort((firstName, secondName) => {
    return secondName.localeCompare(firstName);
});

console.log(names);


