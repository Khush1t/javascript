console.log("Hey this should print in the console.")

// var defines the variable globally
// var a = 6;
// var b = 21;

// let defines the variable in the block only
let a = 6;
a += 1;
{
    let a = 37;
    console.log(a);
}
console.log(a);
// takes the definition within the block only
// this will give the output 37 7

var b = 6;
b += 1;
{
    var b = 37;
    console.log(b);
}
console.log(b);
// globally defined 
// this will give the output 7

var c = "Khushwant";
console.log(typeof a, typeof b, typeof c);


let x = "Khushwant";
let y = 75;
let z = 75.75;
let p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// defining object
let obj = {
    "name": "Khushwant",
    "job code": 7575
}

console.log(obj)
obj.salary = "75cr"
console.log(obj)