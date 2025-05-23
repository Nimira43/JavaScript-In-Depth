
// Global
var globalVariable = 10

function outer() {
  // Local
  var globalVariable = 20

  if (true) {
    // Local
    var globalVariable = 30
    console.log(globalVariable)    // Prints 30
  }
  console.log(globalVariable)   // Prints 30
}

function main() {
  outer()
  console.log(globalVariable);   // Prints 10
} 
    
main()