# What Are Instance Methods?
##### Instance methods are functions that are defined inside a class and can be called on instances (objects) of that class. They can access and modify the data held in an instance and perform operations using that data.

#### Key Points:
###### Defined in a Class: Instance methods are part of a class definition.

###### Called on Instances: They can be called on instances of the class.

###### Access Instance Data: Instance methods can access and modify instance variables (attributes) of the class.

#### Example in JavaScript:
```
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  // Instance Method
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

// Create an instance of Dog
const myDog = new Dog("Lenny", "Labrador");

// Call the instance method
myDog.bark(); // Output: Lenny says Woof!
```

#### How It Works:
###### Class Definition: Dog is a class with a constructor that initialises name and breed.

###### Instance Method: bark is an instance method that prints a message.

###### Create Instance: myDog is an instance of Dog.

###### Call Method: myDog.bark() calls the instance method, and it uses the instance’s name attribute.

#### Benefits of Instance Methods:
###### Encapsulation: Keep related data and behaviour together.

###### Reusability: Methods can be reused across different instances.

###### Organisation: Help organise code logically within classes.

#### Summary
###### Instance methods are a powerful feature of object-oriented programming that allow you to define behaviour for your objects, encapsulating related functionality within the class.
