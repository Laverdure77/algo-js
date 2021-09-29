class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let Cat1 = new Cat( "Skitty", 9);
let Cat2 = new Cat( "Pixel", 6);

console.log( Cat1.name + " is "+ Cat1.age + " years old");
console.log( Cat2.name + " is "+ Cat2.age + " years old");
