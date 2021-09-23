const readlineSync = require("readline-sync");
let minAge = readlineSync.question("Enter minimum age?");
let maxAge = readlineSync.question("Enter maximum age?");
if (minAge>maxAge) {
    console.log('retry with minAge below maxAge');
    return;
}
let Age = readlineSync.question("What's your age?");
if ((Age>minAge)&&(Age<maxAge)) {
    console.log("Current age is between min and max");
} 
else   {
    console.log("Current age is NOT between min and max");
}