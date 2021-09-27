// Variables definition;
let array1 = [1,2,3,4,5,6,7,8,9];

//Function definition;
function swapElement (array, indexA, indexB) {
    tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
    console.log(tmp);
    }
// loop based on prévious function;
    for(var position= array1.length-1; position>=1; position--){
	
        let indexA=Math.floor(Math.random()*(position+1));  
        let swapLog= [ position,indexA]
        swapElement (array1, position,indexA);
        console.log( swapLog);
    }
console.log(array1);

