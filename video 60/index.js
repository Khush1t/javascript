console.log("This is the strings tutorial.");

let a = "Khushwant";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);
console.log(a[9]);
console.log(a[10]);

// Strings are immutable.
// strings once defined can not be manipulated. this is the immutability property of the strings in js.
// a[0] = "Z";
// console.log(a);

console.log(a.length);

let your_name = "Khushwant";
let friends_name = "PocoLoco";

console.log("Your name is " + your_name + " and your friend's name is " + friends_name);
console.log(`Your name is ${your_name} and your friend's name is ${friends_name}.`);

let b = "String";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

// [1, 5) -> 1 is included, 5 is not included
console.log(your_name.slice(1, 5));

console.log(b.replace("Str", "Ptr"));

console.log(b.concat(your_name, "Concat"));

// string_name.trim() -> this can be used to remove the white spaces from a string.
let x = "      This is another string.      ";
console.log(x.trim());
