const readlineSync = require("readline-sync");
/* var integerfirstnumber;
var multiply; */
let firstnumber = readlineSync.question("Give me one number with decimals:");
let secondnumber = readlineSync.question("Give me another one!:");
var integerfirstnumber = Math.trunc(firstnumber.replace(",", "."));
console.log(integerfirstnumber);
var multiply = integerfirstnumber*secondnumber.replace(",", ".");
console.log("The product of them is " + multiply);
