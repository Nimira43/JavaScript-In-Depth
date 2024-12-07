## Common JavaScript Quirks

#### Floating Point Precision

###### Floating-point precision issues in JavaScript arise because the language uses binary floating-point arithmetic, which can lead to small rounding errors. This is due to the way numbers are represented in binary, which can't always precisely represent decimal numbers. For example, 0.1 + 0.2 doesn't exactly equal 0.3 in JavaScript; instead, it results in 0.30000000000000004.

#### Other JavaScript Quirks:

###### Type Coercion: JavaScript automatically converts types when performing operations, which can lead to unexpected results. For example, 1 + '2' results in '12' because the number is coerced into a string.

###### Equality Operators: == performs type coercion, while === checks for both value and type equality. For example, 0 == '0' is true, but 0 === '0' is false.

###### Global Variables: Declaring variables without var, let, or const makes them global, which can lead to unintended side effects.

###### Hoisting: Variable and function declarations are moved to the top of their containing scope during compilation. This means you can use a function before it's declared, but not a variable.

###### Scope: JavaScript has function scope and block scope (with let and const). Understanding the difference is crucial to avoid bugs.

###### NaN: Stands for "Not-a-Number" and is the result of invalid mathematical operations. Interestingly, NaN !== NaN, so to check for NaN, use isNaN() or Number.isNaN().

###### Falsy Values: JavaScript treats certain values as false in a boolean context, including false, 0, '', null, undefined, and NaN.

###### Closures: Functions that remember the scope in which they were created. This allows for powerful patterns but can also lead to memory leaks if not managed properly.

###### Event Loop: JavaScript is single-threaded but uses an event loop to handle asynchronous operations. Understanding the event loop is key to mastering asynchronous programming in JavaScript.