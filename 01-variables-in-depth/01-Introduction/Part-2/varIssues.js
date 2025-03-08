var message = 'This is a message'
// create a memory address for message variable. This memory address has created a binding pointing to the value of the variable.

message = 'This is an updated message'
// reassigning a new value to an existing variable. The memory address of the variable will bind and point to the new value. When garbage collection happens the original value will be removed.

var x = 1 // memory address allocated to x and bound to the value of 1. 
var y = x // new memory address allocated to y and it will be bound to the value 1.

console.log('Value of x:', x)
console.log('Value of y:', y)

x = 4 // x given new value and it bound to 4

console.log('Value of x:', x) // will be 4 
console.log('Value of y:', y) // remains at 1
