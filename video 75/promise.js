console.log('This is promises.');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No, the random number is not supported.");
    }
    else {
        setTimeout(() => {
            console.log('Yes, I am done');
            resolve("Khushwant");
        }, 3000);
    }
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No, the random number is not supported 2");
    }
    else {
        setTimeout(() => {
            console.log('Yes, I am done 2');
            resolve("Khushwant 2");
        }, 1000);
    }
})

let p3 = Promise.all([prom1, prom2]);
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})

