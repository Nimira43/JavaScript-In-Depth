class Triangle {
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`)
    
    if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid a: ${b}`)

    this.a = a
    this.b = b
  }
  getArea() {
    return (this.a * this.b) / 2
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }
  message() {
    return `Triangle - Side A: ${this.a}, Side B: ${this.b}, Area: ${this.getArea()}`
  }
}

const triangle = new Triangle(12, 18)
console.log(triangle)
console.log(triangle.message())