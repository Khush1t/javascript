console.log('This is promises.');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No, the random number is not supported.");
    }
    setTimeout(() => {
        console.log('Yes, I am done');
        resolve("Khushwant");
    }, 3000);
})

prom1.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})

