class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if(value.length < 5) {
            console.log("The name is too short!");
            return;
        }
        this._name = value;
    }
}

let a = new User("Khush");
console.log(a.name);

// this will print the name is too short
a.name = "blah";
console.log(a);
