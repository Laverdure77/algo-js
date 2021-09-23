const readlineSync = require("readline-sync");
let Name = readlineSync.question("What's your name?");
let firstName = readlineSync.question("What's your first name?");
let city = readlineSync.question("Where do you come from?");
console.log("Happy to meet you " + Name + " "+ firstName+ " from " + city + "!");