const readlineSync = require("readline-sync");

let l = readlineSync.question("What is the length of the rectangle?: ");
let L = readlineSync.question("What is the widthth of the rectangle?: ");
/**
 * Calculate the surface of a rectangle
 * @param  {number} l width of the rectangle
 * @param  {number} L Length of the rectangle
 */
function calcSurface(l,L) {
    return (l*L);
}
console.log(" the surface of the rectangle is :" + calcSurface(l,L));