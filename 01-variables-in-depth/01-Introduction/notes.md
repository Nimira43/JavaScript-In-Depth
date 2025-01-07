## Introduction

###### Variables in JavaScript are fundamental for storing and managing data in your programs. They act as containers that hold values, which you can then manipulate and use throughout your code. Here's a quick overview:

### Declaring Variables
###### You can declare variables in JavaScript using the keywords var, let, or const. Each has its own scope and rules:

#### var 
###### This is the oldest way to declare variables. It's function-scoped, meaning it's accessible within the function it's declared in.

``` 
var name = 'Alice'
```

#### let 
###### Introduced in ES6 (ECMAScript 2015), let is block-scoped, meaning it's only accessible within the block it's declared in (e.g., within a pair of { }).

```
let age = 25
```

#### const 
###### Also introduced in ES6, const is block-scoped and used to declare variables that are read-only. Once a value is assigned to a const variable, it cannot be changed.

```
const birthYear = 1990
```

### Variable Naming
###### When naming variables, there are a few rules and best practices to follow:

###### Use meaningful names (e.g., userName instead of x).

###### Variable names are case-sensitive (e.g., name and Name are different variables).

###### Use camelCase for naming (e.g., firstName, totalAmount).

### Assigning Values
###### You can assign values to variables when you declare them or at a later point:

```
let favoriteColor
favoriteColor = 'blue'
``` 

### Reassigning Values
###### Variables declared with var and let can be reassigned:

```
let age = 25
age = 26 // age is now 26
```

###### However, variables declared with const cannot be reassigned:

```
const pi = 3.14
pi = 3.14159 // Error: Assignment to constant variable
```

### Variable Scope
###### The scope of a variable determines where it can be accessed. There are three main types of scope in JavaScript:

#### Global scope 
###### Variables declared outside any function or block are in the global scope and can be accessed anywhere.

#### Function scope 
###### Variables declared inside a function with var are accessible only within that function.

#### Block scope 
###### Variables declared inside a block (with let or const) are accessible only within that block.

```
if (true) {
  let blockScopedVar = 'I am block scoped';
  console.log(blockScopedVar); // This works
}
console.log(blockScopedVar); // Error: blockScopedVar is not defined
```

### Hoisting
###### In JavaScript, variable declarations are "hoisted" to the top of their scope. This means you can use variables before they've been declared, but only when using var. With let and const, you must declare them before use:

```
console.log(hoistedVar) // undefined (due to hoisting)
var hoistedVar = 'I am hoisted'

console.log(nonHoistedVar) // Error: nonHoistedVar is not defined
let nonHoistedVar = 'I am not hoisted'
```

### Memory Allocation
###### When you declare a variable in JavaScript, the runtime environment (such as a web browser or Node.js) allocates memory for it. This process involves the following steps:

#### Declaration: 
###### When you declare a variable using var, let, or const, the runtime allocates a space in memory to hold the variable's value.

#### Initialisation: 
###### The variable is then initialised with a value (which can be undefined initially). For let and const, the variable is not hoisted in the same way as var, so you cannot access it before the declaration.

### Memory Management
###### JavaScript uses a process called garbage collection to manage memory automatically. Garbage collection is the process of identifying and freeing up memory that is no longer in use by the program. This helps prevent memory leaks, where memory that is no longer needed is not released.

###### Here’s how JavaScript's garbage collection works:

#### Reference Counting: 
###### JavaScript keeps track of the number of references to each object in memory. An object is considered reachable (and therefore not eligible for garbage collection) if there is a reference to it somewhere in the program. When there are no more references to an object, it becomes eligible for garbage collection.

#### Mark-and-Sweep Algorithm: 
###### The most common garbage collection algorithm used by JavaScript engines is the mark-and-sweep algorithm. Here's how it works:

##### Marking Phase: 
###### The garbage collector starts from the root objects (such as global objects and function scopes) and marks all reachable objects. This means it follows references from these root objects and marks every object it encounters.

##### Sweeping Phase: 
###### After marking all reachable objects, the garbage collector then sweeps through memory, collecting and freeing up memory occupied by objects that were not marked as reachable.

##### Example
###### Consider the following code snippet:

```
function createArray() {
  let arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push(i);
  }
  return arr;
}

let numbers = createArray();
```

###### In this example the createArray function creates an array and fills it with numbers from 0 to 999.

###### The numbers variable holds a reference to the array created by the createArray function.

###### As long as the numbers variable holds the reference to the array, the array will not be eligible for garbage collection.

###### If the numbers variable is set to null or goes out of scope, the reference to the array is lost, and the garbage collector can reclaim the memory occupied by the array.

### Summary on Memory
###### JavaScript's runtime environment handles memory allocation and management through variable declarations and the automatic garbage collection process. By keeping track of references to objects and freeing up memory that is no longer needed, JavaScript ensures efficient memory usage and helps prevent memory leaks.

### Execution Context
###### The execution context is the environment in which JavaScript code is executed. It determines the value of this, what variables and functions are accessible, and other context-specific information. There are three types of execution contexts:

#### Global Execution Context: 
###### This is the default context where code runs outside any function. It creates a global object (e.g., window in browsers) and sets this to the global object.

#### Function Execution Context: 
###### Created whenever a function is invoked. Each function call gets its own execution context.

#### Eval Execution Context: 
###### Created when the eval() function is executed.

###### Execution context goes through three phases:

##### Creation Phase: 
###### Variables, functions, and this are set up.

##### Execution Phase: 
###### Code inside the execution context is executed.

##### Cleanup Phase: 
###### After execution, the context is destroyed, and memory is reclaimed.

### Variable Environment
###### The variable environment is a component of the execution context that holds information about variables and function declarations. It includes the Variable Object (VO) for global execution context and Activation Object (AO) for function execution context.

##### Example:

```
function foo() {
  let a = 10; // 'a' is stored in the variable environment of 'foo'
}

foo();
```

### Lexical Environment
###### The lexical environment is a structure that holds identifier-variable mappings (lexical scoping) and consists of two parts:

#### Environment Record: 
###### Contains the actual variable bindings and function declarations.

#### Reference to the Outer Environment:
###### Points to the lexical environment of the outer (parent) scope.

###### Lexical environments are created every time a function is invoked or a block (with let or const variables) is executed.

##### Example:

```
function outer() {
  let x = 5
  function inner() {
    let y = 10
    console.log(x) // 'inner' has access to 'x' from 'outer' due to lexical scoping
  }
  inner()
}

outer()
```

###### In this example, the inner function has access to the variable x from the outer function due to the lexical environment.

