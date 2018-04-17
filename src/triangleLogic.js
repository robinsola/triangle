// var type = "";
//
export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  debugger;
   if ((this.side1 < (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
     return "not a triangle";
   }
};

//
// Triangle.prototype.triangleChecker = function() {
//   if (isNaN(this.side1) || isNaN(this.side2) || isNaN(this.side3)) {
//     type = "please enter numbers";
//   } else if ((this.side1 + this.side2 <= this.side3) || (this.side2 + this.side3 <= this.side1) || (this.side1 + this.side3 <= this.side2)) {
//     type = "This isn't a triangle";
//   } else if (this.side1 === this.side2 && this.side2 === this.side3) {
//     type = "equalateral";
//   } else if ((this.side1 === this.side2 && this.side2 !== this.side3) || (this.side1 !== this.side2 && this.side2 === this.side3) || (this.side1 === this.side3 && this.side2 !== this.side3)) {
//     type = "isoceles";
//   } else if (this.side1 !== this.side2 && this.side1 !== this.side3) {
//     type = "scalene";
//   }
//   return type;
// };
