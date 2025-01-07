## Introduction

###### Variables in JavaScript are fundamental for storing and managing data in your programs. They act as containers that hold values, which you can then manipulate and use throughout your code. Here's a quick overview:

#### Declaring Variables
###### You can declare variables in JavaScript using the keywords var, let, or const. Each has its own scope and rules:

##### var 
###### This is the oldest way to declare variables. It's function-scoped, meaning it's accessible within the function it's declared in.

``` 
var name = 'Alice'
```

##### let 
###### Introduced in ES6 (ECMAScript 2015), let is block-scoped, meaning it's only accessible within the block it's declared in (e.g., within a pair of { }).

```
let age = 25
```

##### const 
###### Also introduced in ES6, const is block-scoped and used to declare variables that are read-only. Once a value is assigned to a const variable, it cannot be changed.

```
const birthYear = 1990
```

#### Variable Naming
###### When naming variables, there are a few rules and best practices to follow:

###### Use meaningful names (e.g., userName instead of x).

###### Variable names are case-sensitive (e.g., name and Name are different variables).

###### Use camelCase for naming (e.g., firstName, totalAmount).

#### Assigning Values
###### You can assign values to variables when you declare them or at a later point:

```
let favoriteColor
favoriteColor = 'blue'
``` 

#### Reassigning Values
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

#### Variable Scope
###### The scope of a variable determines where it can be accessed. There are three main types of scope in JavaScript:

##### Global scope 
###### Variables declared outside any function or block are in the global scope and can be accessed anywhere.

##### Function scope 
###### Variables declared inside a function with var are accessible only within that function.

##### Block scope 
###### Variables declared inside a block (with let or const) are accessible only within that block.

```
if (true) {
  let blockScopedVar = 'I am block scoped';
  console.log(blockScopedVar); // This works
}
console.log(blockScopedVar); // Error: blockScopedVar is not defined
```

#### Hoisting
###### In JavaScript, variable declarations are "hoisted" to the top of their scope. This means you can use variables before they've been declared, but only when using var. With let and const, you must declare them before use:

```
console.log(hoistedVar) // undefined (due to hoisting)
var hoistedVar = 'I am hoisted'

console.log(nonHoistedVar) // Error: nonHoistedVar is not defined
let nonHoistedVar = 'I am not hoisted'
```