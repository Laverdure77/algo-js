const readlineSync = require("readline-sync");

// class definition
class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    sayHello (){
        console.log("Hello, " + this.firstname + " " + this.lastname+ "!")
    }
}

let fname = readlineSync.question( "what is your first name? :");
let lname = readlineSync.question( "what is your last name? :");

let Person1 = new Person ( fname, lname);
console.log ( Person1);
Person1.sayHello();
