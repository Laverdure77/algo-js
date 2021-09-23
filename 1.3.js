const readlineSync = require("readline-sync");
let Name = readlineSync.question("What's your name?");
console.log("Hello " + Name);