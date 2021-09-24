let arr=[100, 101, 102];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum= new Number((sum+arr[i]));
    
}
console.log('the sum is:'+ sum);