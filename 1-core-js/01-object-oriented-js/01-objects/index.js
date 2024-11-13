const person = {
  firstName: 'John',
  lastName: 'Smith',
  birthdate: '23/11/63',
  married: true,
  children: 4,
  job: 'teacher'
}

console.log(person)
console.log(person.birthdate)
console.log(person['birthdate']) // supports expressions

const birthday = "birthdate"
console.log(person[birthday])
console.log(person.birthday) // undefined 

/*
Property 'birthday' may not exist on type '{ firstName: string; lastName: string; birthdate: string; married: boolean; children: number; job: string; }'.
*/

person.drive = function() {
  return "Mercedes"
}

console.log(person)
console.log(person.drive())  // method