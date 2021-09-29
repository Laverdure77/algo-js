const readlineSync = require("readline-sync");

let topLeftXPos = parseInt(readlineSync.question( "Give me the topleft X postion of the rectangle: "));
let topLeftYPos = parseInt(readlineSync.question( "Give me the topleft Y postion of the rectangle: "));
let width = parseInt(readlineSync.question( "Give me the width of the rectangle: "));
let length = parseInt(readlineSync.question( "Give me the length of the rectangle: "));

/* tlx,tly,trx,trry,blx,bly,brx,bry */
class rectangle {

    constructor(x,y,w,l,tlx,tly,trx,trry,blx,bly,brx,bry) {
        this.rX= x;
        this.rY= y;
        this.rW= w;
        this.rL= l;
        this.tlx=this.rX;
        this.tly=this.rY;
        this.trx=this.rX+this.rL;
        this.trry=this.rY;
        this.blx=this.rX;
        this.bly=this.rY-this.rW;
        this.brx=this.rX+this.rL ;
        this.bry=this.rY-this.rW ;
    }
    //this is a method computing if a point (x,y) is inside a rectangle.
    collides(x,y){
        let collision;
        if ((this.tlx <= x <= this.trx)&&(this.bly<= y <= this.tly)) {
            collision= true;
            console.log(collision);
            
        }
        else{
            collision= false;
            console.log(collision);
        }
    }
}


let rectangle1 = new rectangle(topLeftXPos,topLeftYPos,width,length);
let otherRectangle = new rectangle( 5,3,1,3)
/* rectangle1.coordrectangle; */
console.log(rectangle1);
console.log("bottomRight coord:" + rectangle1.brx+ ":" +rectangle1.bry);
console.log(otherRectangle);
console.log("OtherRectangle bottomRight coord:" + otherRectangle.brx+ ":" +otherRectangle.bry);
otherRectangle.collides(otherRectangle.tlx,otherRectangle.tly);

