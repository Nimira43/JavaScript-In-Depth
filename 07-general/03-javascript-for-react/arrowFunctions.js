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


// Calling Functions - After

function regular() {
  console.log('Regular')
}

const arrow = () => console.log('Arrow')

regular()
arrow()

// Calling Functions - Before

regular2()
// arrow2()

function regular2() {
  console.log('Regular')
}

const arrow2 = () => console.log('Arrow')

/*

Error with arrow2:
  
arrowFunctions.js:54 
Uncaught ReferenceError: Cannot access 'arrow2' before initialization
 
*/

// This Binding

const person = {
  name: 'Bob',
  sayHelloRegular: function () {
    console.log('Regular: ', this.name)
    console.log(this)
  },
  // sayHelloArrow: () => console.log('Arrow: ', this.name)
  sayHelloArrow: () => console.log(this)
}

person.sayHelloRegular()
person.sayHelloArrow()

/*
 
Function Type	        How this is Determined	            Typical Use Case
-------------         ----------------------              ----------------
Regular Function	    Bound dynamically to the            Methods in objects, 
                      caller (the object that             constructors
                      invokes it)

Arrow Function	      Lexically bound to the outer        Callbacks, one-liners, 
                      scope (where the function           closures
                      was defined)	liners, closures
 
*/