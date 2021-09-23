const readlineSync = require("readline-sync");
let favnumber = readlineSync.question("What is your favorite number?");
while (!(favnumber == 42)) {
    console.log('Bad luck!');
    favnumber = readlineSync.question("Choose another one! :");
}
console.log( 'Well done, me too !');