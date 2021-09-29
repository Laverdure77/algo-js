// Variables definition;
let array1 = [1,2,3,4,5,6,7,8,9];

/*Function definition;
swap two elements of an array,
@param array: array to be swapped,
@param indexA: postion in the array that will change value,
@param indexB: position of the new value */
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

