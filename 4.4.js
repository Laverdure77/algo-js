const readlineSync = require("readline-sync");
let random = [];
let arr= new Array;
let sum = 0;
let max = 0;
let min = 0;
/* 
Return the average value of an array
@param (array) arr: Evaluated array
 */
function  AverageArray (arr) {
for (let i = 0; i < arr.length; i++) {
    sum= new Number((sum+arr[i]));
    
}
console.log('the average value of the array is:'+ (sum/arr.length));
}

/* 
Return the min and max value of an array
@param (array) arr: Evaluated array
 */
function MinMax(arr) {
    
    for (let x = 0; x < arr.length; x++) {
        if (max < arr[x]) {
            max = arr[x];
        } 
        
    }
    for (let x = 0; x < arr.length; x++) {
        if (min > arr[x]) {
            min = arr[x];
        } 
        
    }
    
    console.log(" Maximum value is " + max);
    console.log(" Minimum value is " + min);
}

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
        arr.push(rand10());
        
    }
}

let n = parseInt (readlineSync.question("Give the length of an array between 1 and 10: "));
if ((n<1)||(n>10)) {
    console.log("Try again with a valid number!");
    return;
    
} else {
    multiRand (n);
    
}


console.log(" random array : " + arr);
AverageArray (arr);
MinMax(arr);

