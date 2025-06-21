class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log('Pee Pee Pee');
    }
    eat() {
        console.log('Kha le bhai');
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    soundOfLion() {
        console.log('Sheer Chitta hi kahde');
    }
    eat() {
        super.eat();
        console.log('Sheer ne kha liya bhai');
    }
    introOfLion() {
        console.log('I am Sheer Babu');
    }
}

let a = new Lion("Sheer");
a.sound()
a.eat()
a.soundOfLion()
a.introOfLion()