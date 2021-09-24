const readlineSync = require("readline-sync");
let AX = parseInt (readlineSync.question("Pt A coordinates x: ")) ;
let AY = parseInt (readlineSync.question("Pt A coordinates y: ")) ;
let BX = parseInt (readlineSync.question("Pt B coordinates x: ")) ;
let BY = parseInt (readlineSync.question("Pt B coordinates y: ")) ;



function calcDistance(ax,ay,bx,by) {

    let dist= ( Math.sqrt(Math.pow((by-ay),2)+ Math.pow((bx-ax),2)));
    console.log("distance between Point A and B is :"+ dist);
}

calcDistance (AX,AY,BX,BY);
