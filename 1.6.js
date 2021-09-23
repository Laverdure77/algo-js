const readlineSync = require("readline-sync");
var rest;
let firstnumber = readlineSync.question("Give me one integer number:");
let secondnumber = readlineSync.question("Give me another one!:");
rest = firstnumber % secondnumber;
console.log("the rest of the integer division is " + rest);
