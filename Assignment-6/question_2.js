// Create a class Shape
// with properties width and height
// and methods getArea().
// Create two classes Rectangle and Triangle that inherit from the Shape class
// and implement the getArea() method for their respective shapes.

class Shape {
  widht = 0.0;
  height = 0.0;
  constructor(widht, height) {
    this.widht = widht;
    this.height = height;
  }
  getArea() {
    return this.height * this.widht;
  }
}

class Rectangle extends Shape {
  constructor(widht, height) {
    super(widht, height);
  }
  getArea() {
    return this.height * this.widht;
  }
}
class Triangle extends Shape {
  constructor(widht, height) {
    super(widht, height);
  }
  getArea() {
    return 0.5 * (this.height * this.widht);
  }
}

let rectangle1 = new Rectangle(10, 20);
console.log(rectangle1.getArea());