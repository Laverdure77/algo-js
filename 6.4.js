const readlineSync = require("readline-sync");

// class definition
class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    get name(){
        return (this.firstname +" , "+ this.lastname);
    }

    
    set name ( fullName ){
        
        const namesArr = fullName.split(" ");
        this.firstname = namesArr[0];
        this.lastname = namesArr[1];
    }
    sayHello (){
        console.log("Hello, " + this.firstname + " " + this.lastname+ "!")
    }
}



let fname = readlineSync.question( "what is your first name? :");
let lname = readlineSync.question( "what is your last name? :");

let Person1 = new Person ( fname, lname);
console.log ( Person1);
console.log ( Person1.name);
let newName = readlineSync.question( "what is the new full name? :");
Person1.name = newName;
console.log ( Person1 );
console.log ( Person1.name);
