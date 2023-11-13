// Build-in High Order Functions in JS

//forEach()
let fruits = ["apple", "banana", "cherry", "mango"]

// fruits.forEach(function (fruit) {
//   console.log(fruit)
// })

// fruits.forEach((fruit) => console.log(fruit))

// map()
let numberArr = [1, 2, 3, 4, 5, 6]
let newArray = numberArr.map((number) => number + 1)

// console.log(numberArr)
// console.log(newArray)

// sort()
let randomArr = [10, 3, 9, 99, 4, 13, 24]
let sortedArr = randomArr.sort((a, b) => a - b)

// console.log(sortedArr)

// reduce()
let sumOfRandomNumber = randomArr.reduce((acc, curr) => acc + curr, 0)
console.log(sumOfRandomNumber)

//filter()
let numberBiggerThenTen = randomArr.filter((num) => num > 10)
console.log(numberBiggerThenTen)

//find()
let evenNumbers = [10, 20, 40, 60, 80, 100]
let firstNumberBiggerThenSixty = evenNumbers.find((num) => num > 60)
console.log(firstNumberBiggerThenSixty)

//some()
let numArray = [11, 1, 3, 17, 10, 30, 87, 11]
let numArrayHasEvenNumber = numArray.some((num) => num % 2 === 0)
let numArrayHasOddNumber = numArray.some((num) => num % 2 !== 0)

console.log(numArrayHasEvenNumber)
console.log(numArrayHasOddNumber)

const isEvenNumber = (num) => {
  return num % 2 === 0
}

let randomEvenNumber = numArray.filter(isEvenNumber).every(isEvenNumber)
console.log(randomEvenNumber)

// Spread Operator, Ternary Operator and Destructuring

// spread operator(...)
let originalArray = [10, 20, 30, 40, 50]
let copiedArray = [...originalArray]

console.log(originalArray, copiedArray)

let array1 = [1, 2, 3, 4]
let array2 = [5, 6, 7, 8]
let combinedArray = [...array1, ...array2]

console.log(combinedArray)

function sum(a, b, c) {
  return a + b + c
}

let sumArray = [10, 20, 30]
const result = sum(...sumArray)
console.log(result)

// Ternary Operator

//example:
let checkNum = (num) => {
  return num % 2 === 0 ? "Even" : "Odd"

  // this is the same
  //   if (num % 2 === 0) {
  //     return "Even"
  //   } else {
  //     return "Odd"
  //   }
}

console.log(checkNum(14))

// Destrcturing
let [firstNumber, secondNumber, thirdNumber] = [1, 2, 9]

// kje go preskokne vtoriot element od nizata
// let [firstNumber, , thirdNumber] = [1, 2, 9]
console.log(firstNumber, thirdNumber)

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
}

const { firstName, age: personAge } = person
console.log(firstName, personAge)
