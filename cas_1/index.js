// Getting started with JavaScript

console.log("Hello World")

// Data types

// number
// string
// boolean
// undefined
// null

var myNumber = 1001 // number
var myName = "Hristijan" // string
var myBool = false // boolean
var myUndefined = undefined
var myNull = null
var unknownValue

// console.log()

// Reference data types:

// objects
// arrays

var myObject = {
  name: "Hristijan", // key-value pairs
  surname: "Kostadinoski",
  age: 27,
}

// console.log(myObject)

var myArray = [
  1,
  2,
  "name",
  "random value",
  true,
  false,
  null,
  undefined,
  [1, 2, 3, 4, 5],
  { name: "Marko" },
]
// console.log(myArray)

// var, let, const

var age = 10 // functional scope
let age2 = 10 // block scope
const age3 = 10 // block scope

let mySurname = "Petko"
mySurname = 90

// console.log(mySurname)

const PI = 3.14
// console.log(PI)

// sum
let num1 = 10
let num2 = 10
let sum = num1 + num2

// console.log(sum)

let name2 = "Marko"
let surname2 = "Petkovski"
let fullName = name2 + " " + surname2
// console.log(name2, surname2)

let randomNum1 = 100
let randomNum2 = 10
// console.log(randomNum1 / randomNum2)

// boolean algebra in JS

// logical operators:
// && (Logical AND)
let bool1 = true
let bool2 = true
let resultBool = bool1 && bool2
console.log(resultBool, "BOOL")

// || (Logical OR)
let x = true
let y = false
let resultOR = x || y
console.log(resultOR)

// ! (Logical NOT)
let xyz = true
console.log(!xyz)

// ==, ===, !=
let bigNumber = 10000
let smallNumber = "10000"
console.log(bigNumber === smallNumber)

// >, <, >=, <=
let ranNum = 10
let ranNum2 = 90
let ranResult = ranNum <= ranNum2
console.log(ranResult)
