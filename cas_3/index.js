// Complex Data Types: Arrays and Objects in JavaScript
let fruits = ["apple", "banana", "cherry", "orange"]
// apple - index 0
// banana - index 1
// cherry - index 2
// orange - index 3

let fruitsLength = fruits.length

// access elements
let secondElementOfFruits = fruits[3]
// console.log(fruitsLength)
// console.log(secondElementOfFruits)

// modifying elements
fruits[1] = "kiwi"
console.log(fruits)

// adding elements
fruits.push("peach")
console.log(fruits)

// remove element
fruits.pop()
console.log(fruits)

let removedFruit = fruits.shift()
console.log(removedFruit)
console.log(fruits)

let arrayOfNumbers = [1, 2, 3, 4, 5]
arrayOfNumbers.unshift(0)
console.log(arrayOfNumbers)

let newArrayOfNumbers = arrayOfNumbers.slice(1, 4)
console.log(newArrayOfNumbers)
console.log(arrayOfNumbers)

let newFruitArray = fruits.splice(1, 2)

console.log(newFruitArray)

let cars = ["Fiat", "Peugeot", "Mercedes", "BMW", "Seat"]
let mercedes = cars[2]

console.log(mercedes)

// combine two arrays
let cars2 = ["Ferrari", "Polo"]

let combineCars = cars.concat(cars2)
console.log(combineCars)

// Objects
let person = {
  name: "Hristijan",
  age: 27,
  isStudent: false,
}

// accessing properties
console.log(person.age)

// modifying properties
person.name = "Marko"
console.log(person)

// adding properties
person.email = "marko@gmail.com"
console.log(person)

let student = {
  name: "John",
  grades: [5, 3, 4],
  address: {
    city: "New York",
    zipCode: "10001",
    area: "002",
  },
}

// console.log(student, "-----------")

// console.log(student.address.area)
// console.log(student.grades[2])
// let lengthOfGrades = student.grades.length
// console.log(lengthOfGrades)

student.address.area = "010"

console.log(student, "===========")

// Accessing properties using both "dot notation" and "bracket notation"

let book = {
  author: "Agata Kristi",
  year: 2002,
}

//dot notation
console.log(book.author)

//bracket notation
console.log(book["year"])

let randomNumber = 101

// console.log("This is random number", randomNumber)
// console.log("This is random number " + randomNumber)
// console.log(`This is my random number ${randomNumber}`)

// Loops in JavaScript

// for loop
for (let i = 0; i < 5; i++) {
  console.log(i)
}

// let randomArray = [10, 20, 30, 40, 50, 60, 70, 80, 90]
// for (let i = 0; i < randomArray.length; i++) {
//   console.log(randomArray[i])
// }

// while loop

let count = 0

while (count < 5) {
  console.log("Hello World")
  if (count === 2) {
    break
  }
  count++
}

// do/while

let randomNum = 1
let sum = 0

do {
  //   sum += randomNum
  //   randomNum++
  console.log("Hello")
  randomNum++
} while (randomNum < 6)

console.log(sum)

// 1
// 3
// 6 + 4 = 10
