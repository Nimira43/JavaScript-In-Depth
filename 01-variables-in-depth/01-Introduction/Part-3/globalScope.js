var globalVar = 'Global VAR variable'
let globalLet = 'Global LET variable'
const globalConst = 'Global CONST variable'

console.log('Outside Function - Global Var : ', globalVar)
console.log('Outside Function - Global Let : ', globalLet)
console.log('Outside Function - Global Const : ', globalConst)

function showGlobal() {
  var localVar = 'Local VAR variable'
  let localLet = 'Local LET variable'
  const localConst = 'Local CONST variable'
  console.log('Inside Function - Global Var : ', globalVar)
  console.log('Inside Function - Global Let : ', globalLet)
  console.log('Inside Function - Global Const : ', globalConst)
  console.log('Inside Function - Local Var : ', localVar)
  console.log('Inside Function - Local Let : ', localLet)
  console.log('Inside Function - Local Const : ', localConst)


}

showGlobal()



// console.log('Outside Function - Local Var : ', localVar)
// console.log('Outside Function - Local Let : ', localLet)
// console.log('Outside Function - Local Const : ', localConst)

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