let a = prompt("Enter first number: ");

let b = prompt("Enter second number: ");

// this returns a string
// let sum = a + b;

if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("Error, only numbers are allowed.")
}

let sum = parseInt(a) + parseInt(b);

// console.log('The sum is ' + sum);

try {
    console.log('The sum is ' + sum * x);
} catch (error) {
    console.log('Error aa gaya bhai');   
    console.log(error.name);
}
