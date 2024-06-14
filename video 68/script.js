// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

// to select a particular element
document.getElementById("redBox").style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "green";

// it returns the elements in a node list
console.log(document.querySelectorAll(".box"));

let boxes = document.querySelectorAll(".box");
boxes.forEach(e => {
    e.style.backgroundColor = "yellowgreen";
})