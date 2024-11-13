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
