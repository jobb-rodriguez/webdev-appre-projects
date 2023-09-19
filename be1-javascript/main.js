class Entity {
    constructor(name){
        this.name = name;
        this.date_created = new Date(Date.now());
    }

    walk() {
        console.log(`${this.name} is walking`);
    }

    getDateCreated() {
        console.log(`${this.name} was created on ${this.date_created}`);
    }
}

class Robot extends Entity {
    constructor(name) {
        super(name);
        this.legs = 2;
    }

    walk() {
        console.log(`${this.name} is walking with ${this.legs} legs--brrrrt`);
    }
}

class Cat extends Entity {
    constructor(name) {
        super(name);
        this.legs = 4;
    }

    walk() {
        console.log(`${this.name} is walking with ${this.legs} legs--meooow`);
    }

    growl() {
        console.log('Purrrr~^^');
    }
}

const Baymax = new Robot("Baymax");
const Tom = new Cat("Tom");

Baymax.walk();
Tom.walk();
Baymax.getDateCreated();
Tom.getDateCreated();
Tom.growl();