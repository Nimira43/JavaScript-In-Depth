function getRectangleArea(width, height) {
  return width * height
}
console.log(getRectangleArea(7, 4))

// Explicit return
const getRectangleArea2 = (width, height) => {
  return width * height
}
console.log(getRectangleArea2(7, 4))

// Implicit return
const getRectangleArea3 = (width, height) =>  width * height
console.log(getRectangleArea3(7, 4))