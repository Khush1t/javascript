console.log("This is the first statement");
console.log("This is the second statement");

setTimeout(() => {
    console.log("This is inside timeout ");
}, 0);
setTimeout(() => {
    console.log("This is inside timeout 2");
}, 100);

console.log("This is the end statement");