function functionScope() {
  var localVar = 'I am a local variable'
}

functionScope()

console.log(localVar)    // functionScope.js:7  Uncaught ReferenceError: localVar is not defined