let a = prompt("Enter first number: ");

let b = prompt("Enter second number: ");

// this returns a string
// let sum = a + b;

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Error, only numbers are allowed.")
}

let sum = parseInt(a) + parseInt(b);

// console.log('The sum is ' + sum);

// FINALLY will be executed even if we encounter a return statement before it
// otherwise, the code stops after a return statement
function main() {
    let x = 1;
    try {
        console.log('The sum is ' + sum * x);
        return true;
    } catch (error) {
        console.log('Error aa gaya bhai');
        console.log(error.name);
        return false;
    }
    finally {
        console.log("The code execution is completed and db connection is being closed.");
    }
}

let c = main();
