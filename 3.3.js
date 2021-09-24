let arr1 = [1, 2, 3, 4, 5] ;
let arr2 = [];

for (let x = 0; x < arr1.length; x++) {
    arr2.push(arr1[x]);
}

console.log("Original array is :" + arr1);
console.log("Copy array is : " + arr2);