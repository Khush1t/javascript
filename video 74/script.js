let buttom = document.getElementById("btn");

buttom.addEventListener("click", () => {
    // alert("I was clicked.");
    document.querySelector(".box").innerHTML = "<b> Yayyy! </b> The button was clicked.";
})
