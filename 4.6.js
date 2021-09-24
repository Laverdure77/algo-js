const readlineSync = require("readline-sync");
let x = parseInt (readlineSync.question(" Give me a number: ")) ;


console.log (x);
function factorialize(num) {
    if (num < 0) 
          console.log(-1);
    else if (num == 0) 
        console.log(1);
    else {
        console.log( (num * factorialize(num - 1)));
    }
}

factorialize(x);



