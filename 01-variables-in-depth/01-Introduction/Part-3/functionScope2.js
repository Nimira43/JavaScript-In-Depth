// Global
var globalVariable = 10

function outer() {
  // Local
  var globalVariable = 20

  if (true) {
    // Local
    var globalVariable = 30   
    
    // globalVariable here on line 11 is actually the same variable 
    // as globalVariable on line 7. 
    // On line 11 globalVariable is reassigned to the value of 
    // 30 - hence the console.log on line 18 reads... 
    
    console.log(globalVariable)    // Prints 30
  }
  
  // ... and remains 30 when console logging on line 23

  console.log(globalVariable)   // Prints 30
}

function main() {
  outer()
  console.log(globalVariable);   // Prints 10
} 
    
main()

// This is the problem when using VAR - it's not scoped with if, for and while blocks. With LET and CONST they are block scoped.