class Animal {

    static greeting = "Hello"; //static property
    constructor(nm){;
    this.name = nm;
    }
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
        
    }

}

class Dog extends Animal {
}

class Cat extends Animal{

}

let Chien = new Dog ("Bobby");
let Chat = new Cat ("Kitty");

console.log( Chien);
/* console.log("Accessing Dog.greeting static property");  */
/* console.log(Dog.greeting); */
console.log(Chien.sayHello());

console.log( Chat);
console.log(Chat.sayHello());

/* let Dog = new Animal( "Bobby");
let Cat = new Animal( "Kitty"); */

/* console.log("Accessing Animal.greeting static property"); 
console.log(Animal.greeting);
console.log("Dsiplay Dog class"); 
console.log(Dog);
console.log(Dog.greeting); */
