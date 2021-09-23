const readlineSync = require("readline-sync");
let Age = readlineSync.question("What's your age?");
if (Age>=18) {
    console.log("You are an adult");
}
 else   {
    console.log("You are not yet an adult");
 }