// Create a memory address for the message variable. This memory address has created a binding pointing to the value of the variable.
// Note: The `var` keyword has function scope, not block scope, and its declarations are hoisted to the top of the function or global context. This is specific to `var`.
var message = 'This is a message'

message = 'This is an updated message'
// Reassigning a new value to an existing variable. 
// The memory address of the variable (binding) now points to the updated value. 
// When garbage collection happens, the original value ('This is a message') is eligible for removal, assuming no other references to it exist.

var x = 1; // A memory address is allocated to `x` and bound to the value 1. 
var y = x; // A new memory address is allocated to `y`, and it is initially bound to the value 1. 
// Note: Since numbers in JavaScript are primitive types, they are stored by value, not by reference.

console.log('Value of x:', x); // 1
console.log('Value of y:', y); // 1

x = 4; // `x` is given a new value, 4, and its binding points to this value.
// The variable `y` remains bound to the original value of 1. 
// This demonstrates that primitives are immutable and independently copied when assigned.

console.log('Value of x:', x); // 4 
console.log('Value of y:', y); // 1






