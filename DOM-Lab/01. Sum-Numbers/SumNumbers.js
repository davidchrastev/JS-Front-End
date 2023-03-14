function calc() {
    // TODO: sum = num1 + num2
    const firstEl = document.getElementById("num1");
    const secondEl = document.getElementById("num2");
    const sumInput = document.getElementById("sum");

    let num1 = Number(firstEl.value);
    let num2 = Number(secondEl.value);
    let sum = num1 + num2;

    sumInput.value = sum;
}
