const readlineSync = require("readline-sync");

let mySerie = {};
let casting = [];
let randomizeCasting = [];

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

/* let array1 = [1,2,3,4,5,6,7,8,9]; */

//Function definition;

/*
function swapElement
swap two elements of an array,
@param array: array to be swapped,
@param indexA: postion in the array that will change value,
@param indexB: position of the new value */
function swapElement (array, indexA, indexB) {
    tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
    /* console.log(tmp); */
    }
// loop based on prévious function;
    for(var position= casting.length-1; position>=1; position--){
	
        let indexA=Math.floor(Math.random()*(position+1));  
        let swapLog= [ position,indexA]
        swapElement (casting, position,indexA);
        /* console.log( swapLog); */
    }
console.log( 'New casting '+ casting);




/* function randomizeCast() {


    
} */