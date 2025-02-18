// LET - Temporal Dead Zone
// console.log(message1)
let message1 = 'Will this work?'         // No      TDZ ends
console.log(message1)                    // Yes 

// CONST - Temporal Dead Zone
// console.log(message2)
const message2 = 'Or this?'              // No      TDZ ends
console.log(message2)                    // Yes

// VAR
console.log(message3)
var message3 = 'What about this?'        // Undefined
console.log(message3)                    // Yes 

// UNDECLARED VARIABLE
// console.log(message4)                 // not defined
message4 = 'Whats going to happen here?'
console.log(message4)                    // It works (??)