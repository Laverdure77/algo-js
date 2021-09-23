const readlineSync = require("readline-sync");
let sum = 0;
let z=0;
let x = readlineSync.question("Give me a number: ");
for (let y = 0; y < x; y++) {
    let z = new Number( readlineSync.question( "Give me another number:" ));
    (sum += z);
}
console.log(" The sum of the last " + x +" numbers is "+ sum + "!");
