// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    // console.log(data);
    return data;
}

async function main() {

    console.log('doing a task');
    console.log('doing another task');
    console.log('Loading Data');

    let data = await getData();
    console.log(data);

    console.log('data is loaded');
}
main();

// data.then((v) => {
//     console.log(data);
//     console.log('task 2');
// })