// Function Scope

var globalVar = 'Global VAR variable'
let globalLet = 'Global LET variable'
const globalConst = 'Global CONST variable - I refuse to be reassigned!!!'

console.log('Outside Function - Global VAR : ', globalVar)
console.log('Outside Function - Global LET : ', globalLet)
console.log('Outside Function - Global CONST : ', globalConst)

function showGlobal() {
  var localVar = 'Local VAR variable'
  let localLet = 'Local LET variable'
  const localConst = 'Local CONST variable - I refuse to be reassigned!!!'
  
  console.log('Inside Function - Global VAR : ', globalVar)
  console.log('Inside Function - Global LET : ', globalLet)
  console.log('Inside Function - Global CONST : ', globalConst)
  console.log('Inside Function - Local VAR : ', localVar)
  console.log('Inside Function - Local LET : ', localLet)
  console.log('Inside Function - Local CONST : ', localConst)

  console.log(localVar = 'Alert!!! - localVar has changed inside function!!!')
  console.log(localLet = 'Alert!!! - localLet has changed inside function!!!')
   
  globalVar = 'Alert!!! - globalVar has changed inside function!!!'
  globalLet = 'Alert!!! - globalLet has changed inside function!!!'

  // Cannot be reassigned
  // globalConst = 'I want to change!!!'
  // localConst = 'Me too!!!'

  try {
    globalConst = 'Attempting reassignment' // Throws TypeError
  } catch (error) {
    console.error('Error reassigning globalConst:', error.message)
  }
  
  try {
    localConst = 'Attempting reassignment' // Throws TypeError
  } catch (error) {
    console.error('Error reassigning localConst:', error.message)
  }
}

showGlobal()

// console.log('Outside Function - Local VAR : ', localVar)
// console.log('Outside Function - Local LET : ', localLet)
// console.log('Outside Function - Local CONST : ', localConst)

// Local variables to the showGlobal function cannot be accessed outside the function - including var

/*
Difference Between var, let, and const:

var:

Function-scoped.
Can be redeclared in the same scope.

let and const:

Block-scoped (e.g., limited to {}).
Cannot be accessed outside the block they are defined in.

*/

console.log('OUTSIDE FUNCTION ALERT!!!! :-', globalVar)
console.log('OUTSIDE FUNCTION ALERT!!!! :-', globalLet)

// Block Scope

if (true) {
  var blockVar = 'I am block VAR'
  let blockLet = 'I am block LET'
  const blockConst = 'I am block CONST'

  console.log('Inside if', blockVar) // Accessible here
  console.log('Inside if', blockLet) // Accessible here
  console.log('Inside if', blockConst) // Accessible here
}

// Accessible here (VAR leaks out of the block)
console.log('Outside if', blockVar) 
// ReferenceError
// console.log('Outside if', blockLet)
// ReferenceError
// console.log('Outside if', blockConst) 
