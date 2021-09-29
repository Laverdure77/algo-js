const readlineSync = require("readline-sync");

let xP = parseInt(readlineSync.question( "Give me the xpos of the center: "));
let yP = parseInt(readlineSync.question( "Give me the ypos of the center: "));
let rd = parseInt(readlineSync.question( "Give me the radius of the circle: "));

/* console.log(rd); */

class Circle {
    // this is the constructor
    constructor(xP,yP,radi) {
    this.xPos = xP;
    this.yPos = yP;
    this.radius = radi;
    }
    //this is a method moving the circle centre position
    moveCircle(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
        console.log("the new circle center position is :" +this.xPos +"," +this.yPos)
    }
    //this is a getter accessor computing the surface of the circle
    get surface(){
        return ((Math.PI)*Math.pow(this.radius,2));
    }
}

let circle1= new Circle ( xP, yP,rd);
console.log("xPosition:" +circle1.xPos, "yPosition:" +circle1.yPos, "Radius:" +circle1.radius);
let xOff = parseInt(readlineSync.question( "Give me the xOffset of the center: "));
let yOff = parseInt(readlineSync.question( "Give me the yOffset of the center: "));
circle1.moveCircle(xOff, yOff);
circle1.surface;
console.log("the surface of the circle is " + circle1.surface);






