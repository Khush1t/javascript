function nice(name) {
    console.log("Hey there, are you " + name + " ?");
    console.log("Yes, I am " + name + ".");
    console.log(name + ", Nice to meet you");
}
// nice("Khushwant");
// nice("PocoLoco");

// function sum(a, b) {
//     console.log(a + b);
// }
// sum(2, 6);

// c is the default parameter
// function sum2(a, b, c = 4) {

// }

function sum(a, b, c = 10) {
    // console.log(a + b);
    return a + b + c;
}
result1 = sum(2, 6);
result2 = sum(21, 6);
result3 = sum(1234, 346, 500);

console.log("\nThe sum of these numbers is: ", result1);
console.log("\nThe sum of these numbers is: ", result2);
console.log("\nThe sum of these numbers is: ", result3);

const func1 = (x) => {
    console.log("I am an arrow function", x);
}

func1(34);
func1(344);
func1(4578);