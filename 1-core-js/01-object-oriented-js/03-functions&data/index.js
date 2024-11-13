// Right hand triangle - area

function getTriangleArea(a, b) {
  return (a * b) / 2
}

// Right hand triangle - hypotenuse

function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2)
}

console.log(getTriangleArea(5, 7))
console.log(getTriangleHypotenuse(5, 7).toFixed(3))
console.log('---')
console.log(getTriangleArea(9, 14))
console.log(getTriangleHypotenuse(9, 14).toFixed(3))
console.log('---')
console.log(getTriangleArea(22, 17))
console.log(getTriangleHypotenuse(22, 17).toFixed(3))

// Mixing functions and data in a Object
console.log('---')
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
console.log(myTriangle.a)
console.log(myTriangle.b)
console.log(myTriangle.getArea().toFixed(3))
console.log(myTriangle.getHypotenuse().toFixed(3))
console.log('---')
console.log(myTriangle)
console.log(myTriangle.a = 22)
console.log(myTriangle.b = 17)
console.log(myTriangle.getArea().toFixed(3))
console.log(myTriangle.getHypotenuse().toFixed(3))
console.log(myTriangle)

// A better way is to use classes
