let person = "Bobby"
console.log(person.toUpperCase())

let array = [34, 94, 39, 28, 62, 82, 43]
array.sort()

console.log(array)

let array2 = array.map(num => num * 2)
array2

/**
 * Prototype Inheritance - acces object properties from another object
 * 
 * How do JavaScript objects know what methods they have?
 * 
 * How do JavaScript objects know what methods they have?
 * JavaScript objects know what methods they have through their prototype chain. When you create an object, it 
 * automatically links to a prototype object. This prototype can have properties and methods that the new object 
 * inherits and can use.
 *
 * Why does the for ... in loop iterate over an objects own and inherited properties?
 * The for...in loop in JavaScript is designed to iterate over all enumerable properties of an object. This includes 
 * both the object's own properties and properties that it inherits from its prototype chain.
 *
 */

let parent = {
  surname: 'Hulkenberg'
}

let child = {
  forename: 'Eddie'
}

Object.setPrototypeOf(child, parent)

for (const item in child) {
  console.log(item)
  }
