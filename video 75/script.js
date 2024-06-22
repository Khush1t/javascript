console.log("This is the first statement");
console.log("This is the second statement");

setTimeout(() => {
    console.log("This is inside timeout ");
}, 0);
setTimeout(() => {
    console.log("This is inside timeout 2");
}, 100);

console.log("This is the end statement");


const callback = (arg) => {
    console.log(arg);
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("khushwant");
    document.head.append;
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);
