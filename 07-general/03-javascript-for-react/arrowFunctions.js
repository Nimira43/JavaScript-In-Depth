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

const message = () => console.log('This is a message')
message()



// Callbacks

const numbers = [44, 16, 4, 33, 27, 7, 14, 10]

// Regular Function
const double = numbers.map(function (number) {
  return number * 2
})
console.log(double)

// Arrow Function
const double2 = numbers.map((number) => number * 2)
console.log(double2)
