const readlineSync = require("readline-sync");
let x = readlineSync.question("Give me a number between 1 and 7?");
if ((x>=1)&&(x<=7)) {
    
    if (x==1) {
        console.log("day of the week is Monday") ;
        return;
    }
    else  if  (x==2) {
        console.log("day of the week is Tuesday") ;
        return;
    }
    else  if  (x==3) {
        console.log("day of the week is Wednesday") ;
        return;
    }
    else  if  (x==4) {
        console.log("day of the week is Thursday") ;
        return;
    }
    else  if  (x==5) {
        console.log("day of the week is Friday") ;
        return;
    }
    else  if  (x==6) {
        console.log("day of the week is Saturday") ;
        return;
    }
    else  if  (x==7) {
        console.log("day of the week is Sunday") ;
        return;
    }


}
else{
    console.log("Wrong Number!");
}