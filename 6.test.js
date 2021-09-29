/* let radius = 1;
let surface= ((Math.PI)*Math.pow(radius,2));
console.log( surface); */

class Film {
    constructor(cast) {
      this.cast = cast;
    }
    get firstCastMember() {
      return this.cast[0];
    }
    set firstCastMember(val) {
      this.cast[0] = val;
    }
  }
  
  let starWars = new Film(["Mark Hamill", "Harrison Ford"]);
  console.log(starWars.firstCastMember); // Mark Hammil
  starWars.firstCastMember = "Carrie Fisher";
  console.log(starWars.firstCastMember); // Carrie Fisher
  