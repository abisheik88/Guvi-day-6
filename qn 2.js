class Circle{
  constructor(radius,colour){
    this.radius=radius;
    this.colour=colour;

  }
  getRadius(){
    return this.radius
  }
  getArea(){
    return 3.14*this.radius*this.radius
  }
  getCircumference(){
    return 2*3.14*this.radius
  }
}
var values = new Circle(5,"blue")
console.log("radius:"+ values.getRadius())
console.log("Area:"+ values.getArea())
console.log("Circumference:"+ values.getCircumference())