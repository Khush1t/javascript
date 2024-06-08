let array = [1, 23, 4, 75, 10];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

array.forEach((element, index) => {
    console.log(element, index);
});

let obj = {
    a: 1,
    b: 2, 
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

for (const iterator of array) {
    console.log(iterator);
}

