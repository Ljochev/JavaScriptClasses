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
let numArray = [11, 1, 3, 17, 10, 11, 87, 11]
let numArrayHasEvenNumber = numArray.some((num) => num % 2 === 0)
let numArrayHasOddNumber = numArray.some((num) => num % 2 !== 0)

console.log(numArrayHasEvenNumber)
console.log(numArrayHasOddNumber)

// Spread Operator, Ternary Operator and Destructuring
