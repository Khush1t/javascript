let random_num = Math.random();
let first, second, third;

// generates the first word
if(random_num < 0.33) {
    first = "Crazy";
}
else if(random_num < 0.66 && random_num >= 0.33) {
    first = "Awesome";
}
else {
    first = "Fire";
}

// generates the second word
random_num = Math.random()
if(random_num < 0.33) {
    second = "Engine";
}
else if(random_num < 0.66 && random_num >= 0.33) {
    second = "Foods";
}
else {
    second = "Garments";
}

// generates the third word
random_num = Math.random()
if(random_num < 0.33) {
    third = "Bros";
}
else if(random_num < 0.66 && random_num >= 0.33) {
    third = "Limited";
}
else {
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);