let arr = [1, 2, 3, 4, 5];

console.log(arr);

arr[0] = 2834;
console.log(arr, typeof arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr.length);

let b = [4, 34, "Khush", 2353, "PocoLoco"];
console.log(b.toString());

console.log(b.join(" and "));

// removes the last element
b.pop();
// adds an element to the last
b.push(100);
console.log(b);

// removes the first element
b.shift();
console.log(b);

// adds element at the start
b.unshift("PocoLoco");
console.log(b);

// even after deletion, the length of array remains same
delete b[4];
console.log(b);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];

// even after this, all three arrays remain same
console.log(a1.concat(a2, a3));

let num = [1, 2, 3, 4, 5];
num.splice(1, 2);
//  splice(index, how many elements to delete)
// 2, 3 are deleted
console.log(num);

console.log(num.slice(1, 3));
console.log(num.reverse());

