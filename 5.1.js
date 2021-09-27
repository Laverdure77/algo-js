const readlineSync = require("readline-sync");

let mySerie = {};
let casting = [];


/** Asking how many members in the casting of a serie, 
and store the name of the full casting in aan array named 'Casting'
 * @param : none

*/
function serieCasting () {
    let actorsNum= readlineSync.question("How many actors in the casting ? :");
    for (let x = 0; x < actorsNum ; x++) {
        let actorsName = readlineSync.question("Actor name ? :");
        casting.push(actorsName);
    }
}


/** Asking the user, his favorite serie and production date,
calling casting function,
Store all the answers in an object.

 * @param : none

*/
function askTvSerie() {
    let name= readlineSync.question(" What is the name of your favorite serie?: ") ;
    let prodYear= readlineSync.question(" When was it first released ( Year )?: ") ;
    serieCasting ();
    /* console.log(casting); */
    mySerie.name = name;
    mySerie.prodYear = prodYear;
    mySerie.casting = casting ;
}

askTvSerie ();
console.log (mySerie);





