// declaration
var username    

// initialisation
username = 'Bob'  

// usage
console.log(username)

// Why separate declaration from initialisation?
// - have a placeholder in memory for a variable
// - hoisting

// Memory Placeholder: By declaring a variable without initialising it, you're essentially creating a placeholder in memory. This can be useful when the variable's value is not immediately available or will be determined later in the code.

// Hoisting: In languages like JavaScript, variable declarations are "hoisted" to the top of their containing scope. This means you can use a variable before its declaration appears in the code, although it's important to note that only the declaration is hoisted, not the initialisation.

// Why hoisting exists and why it's useful

// Flexibility in Coding: Hoisting allows you to write code more flexibly. You can declare functions and variables anywhere in your code, and they will still work as expected because JavaScript will move these declarations to the top of their scope. This can be particularly handy in large codebases where the order of declarations might not be straightforward.

// Function Hoisting: Functions in JavaScript are also hoisted. This means you can call a function before it's defined in your code, which can make your code cleaner and more organised. For example:

greet(); // This works because of hoisting

function greet() {
  console.log('Hello!')
}

// Variety of Use Cases: Hoisting allows variables to be used before they are declared, providing more flexibility in your code. This is especially useful in scenarios where the variable's initialisation depends on a condition or a computation that happens later in the code.