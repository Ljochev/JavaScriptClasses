/* ========== Object-oriented programming(OOP) in JavaScript =========== */

// Function Constructor
// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// Adding a method to the prototype
// Person.prototype.great = function () {
//   console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old`)
// }

// // making instance of Person
// const marko = new Person("Marko", "21")
// const stefan = new Person("Stefan", "31")

// marko.great()
// stefan.great()

// Classes
class Person2 {
  constructor(name, surname, age) {
    ;(this.name = name), (this.age = age)
    this.surname = surname
  }

  great() {
    console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old`)
  }

  printSurname() {
    console.log(`My surname is ${this.surname}`)
  }
}

const sanja = new Person2("Sanja", "Petkovska", 35)
const mirko = new Person2("Mirko", 16)

sanja.great()
sanja.printSurname()

// Inheritance

// Parent class
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`)
  }
}

// This class inherits from the class Person
class Professor extends Person {
  constructor(name, age, subject) {
    super(name, age)
    this.subject = subject
  }

  teach() {
    console.log(`I teach ${this.subject}`)
  }
}

// This class inherits from the class Person
class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }

  study() {
    console.log(`I'm styding ${this.major}`)
  }
}

//Instances
const newPerson = new Person("Martin", 30)
const professor = new Professor("Dr. Smith", 45, "Computer Science")
const student = new Student("John", 20, "Programming in Java")

professor.introduce()
student.introduce()
student.study()
