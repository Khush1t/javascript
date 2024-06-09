let a = [1, 12, 7, 14, 5];
// let newArr = [];
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     newArr.push(element**2);
// }
// console.log(newArr);

let newArr = a.map((element) => {
    return element ** 2;
})
console.log(newArr);


const greaterThanSeven = (x) => {
    if(x > 7) {
        return true;
    }
    return false;
}
console.log(a.filter(greaterThanSeven));

let arr2 = [1, 2, 3, 4, 5, 6];
const red = (a, b) => {
    return a * b;
}
console.log(arr2.reduce(red));