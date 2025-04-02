const message = "First message"
console.log(message)

// message = "Second Message"

/**
 * 
 *  const.js:4 
    Uncaught TypeError: Assignment to constant variable.at const.js:4:9

    Using const means you don't ever want to change
    the binding map
 * 
 */

/* However... */

const messageObject = {
  text: 'Message 1'
}

console.log(messageObject)

messageObject.text = 'Message 2'

console.log(messageObject)

/* 

You can change the values inside an object.
The object itself remains mutable, meaning the properties within the object can be changed. This is because const does not make the contents of the object immutable—it only prevents you from reassigning the variable to something else.

*/