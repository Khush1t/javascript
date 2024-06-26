// let obj = {
//     a: 1,
//     b: "Khush"
// };

// console.log(obj);

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };
// rabbit.__proto__ = animal;


class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is created.");
    }
    eats() {
        console.log("Kha raha hoon");
    }
    jumps() {
        console.log("Kood raha hoon");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("Object is created and it is a lion");
    }
    // method overriding
    eats() {
        // this will call the eats method of the super class(Animal) as well
        super.eats();
        console.log("Sher kha raha hai");
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Bagheera")
console.log(l);