// Previous Code

let myTriangle = {
  a: 5,
  b: 7,
  getArea: function() {
    return(this.a * this.b) / 2
  },
  getHypotenuse: function() {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }
}

console.log(myTriangle)

// Classes create a blueprint

class Triangle {
  getArea() {
    return (this.a * this.b) / 2
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }
}
console.log('----------')
const triangle1 = new Triangle()
console.log(triangle1.a = 34)
console.log(triangle1.b = 29)
console.log(triangle1.getArea())
console.log(triangle1.getHypotenuse().toFixed(3))
console.log(triangle1)
console.log('----------')
const triangle2 = new Triangle()
console.log(triangle2.a = 39)
console.log(triangle2.b = 87)
console.log(triangle2.getArea())
console.log(triangle2.getHypotenuse().toFixed(3))
console.log(triangle2)

console.log('---------- Constructors -----------')
// Constructors

class TriangleClass {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  getArea() {
    return (this.a * this.b) / 2
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }
}

console.log('---------- 1')
let triangle3 = new TriangleClass(5, 8)

console.log(triangle3)
console.log(triangle3.getArea())
console.log(triangle3.getHypotenuse().toFixed(3))

console.log('---------- 2')
let triangle4 = new TriangleClass(9, 13)

console.log(triangle4)
console.log(triangle4.getArea())
console.log(triangle4.getHypotenuse().toFixed(3))