let arr=[1, 2, 3, 4, 5] ;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum= new Number((sum+arr[i]));
    
}
console.log('the average value is:'+ (sum/arr.length));