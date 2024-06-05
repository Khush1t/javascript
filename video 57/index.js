console.log("this is video 57");

let a = 1;

for (let i = 0; i < 15; i++) {
    console.log(a + i);
}

// for in loop is used for objects
let obj = {
    name: "Khushwant",
    role: "Software Developer",
};

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
for (const key in obj) {
    let element = obj[key];
    console.log(key, element);
}

// for of loop is used for arrays and strings
// for (const iterator of object) {
    
// }
for (const c of "Khush") {
    console.log(c);
}

console.log("\nWhile loop");
// while loop
let i = 1;1
while (i < 6) {
    console.log(i);
    i++;
}

console.log("\nDo-While loop");
// do while loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j < 6);