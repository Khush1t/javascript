let random_num = Math.random();
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the operation you want to perform: ");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random_num > 0.1) {
    // perform correct operations
    alert(`The result is: ${eval(`${a} ${c} ${b}`)}`);
}

else {
    // perform faulty operations

    c = obj[c];
    alert(`The result is: ${eval(`${a} ${c} ${b}`)}`);
}