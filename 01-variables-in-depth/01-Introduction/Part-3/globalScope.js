var globalVar = 'Global VAR variable'
let globalLet = 'Global LET variable'
const globalConst = 'Global CONST variable'

console.log('Outside Function - Var : ', globalVar)
console.log('Outside Function - Let : ', globalLet)
console.log('Outside Function - Const : ', globalConst)

function showGlobal() {
  console.log('Inside Function - Var : ', globalVar)
  console.log('Inside Function - Let : ', globalLet)
  console.log('Inside Function - Const : ', globalConst)
}

showGlobal()