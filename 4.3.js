const readlineSync = require("readline-sync");
let random = [];
/**
 * Return a random number between 1 and 10,
 * @param no parameter,
 */
function rand10() {
    return Math.floor(Math.random() * 10);
    
}

/** 
* Return an array ( length between 1 and 10) with random numbers  
between 1 and 10,
* @param  {number} n max size of the array,
*/
function multiRand(n) {
    
    for (let x = 0; x < n; x++) {
        random.push(rand10());
        
    }
}

let n = parseInt (readlineSync.question("Give the length of an array between 1 and 10: "));
if ((n<1)||(n>10)) {
    console.log("Try again with a valid number!");
    return;
    
} else {
    multiRand (n);
    
}


console.log(" random array : " + random);
