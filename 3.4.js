let givenarray = [-2,2,18,4,5];
let max = 0;
let min = 0;

for (let x = 0; x < givenarray.length; x++) {
    if (max < givenarray[x]) {
        max = givenarray[x];
    } 
    
}
for (let x = 0; x < givenarray.length; x++) {
    if (min > givenarray[x]) {
        min = givenarray[x];
    } 
    
}

console.log(" Maximum value is " + max);
console.log(" Minimum value is " + min);