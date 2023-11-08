// Conditional Statements: if/else and switch

// if/else
// let num = 10

// if (num > 5) {
//   console.log("This number is greater than 5!")
// } else if (num === 5) {
//   console.log("This number is equal to 5!")
// } else {
//   console.log("The number is less than 5!")
// }

// switch

// let day = "Monday"

// switch (day) {
//   case "Monday":
//     console.log("It's the start of the week!")
//     break
//   case "Friday":
//     console.log("It's almost the weekend!")
//     break
//   default:
//     console.log("It's another day in the week!")
// }

// What is Function?

let number1 = 90
// deklaracija na funkcija
function addTwoNumbers(number1, number2) {
  let result = number1 + number2
  return result
}

console.log(addTwoNumbers(10, 20)) // povik na funkcija

// declaration
function printMyName() {
  return "Hristijan"
}

//console.log(printMyName()) // invoke the function

// v1
function printMyNumber(number) {
  if (number > 100) {
    console.log("Ovoj broj e pogolem od 100")
  } else {
    console.log("Ovoj broj e pomal od 100")
  }
}

printMyNumber(90)

// v2 - more specific
// function printMyNumber(number) {
//   if (typeof number === "number") {
//     if (number > 100) {
//       console.log("Ovoj broj e pogolem od 100")
//     } else {
//       console.log("Ovoj broj e pomal od 100")
//     }
//   } else {
//     console.log("This is not a number - Please enter valid value/number")
//   }
// }

// Different types of Functions

// function declaration
function greet(name) {
  return `Hello ${name}`
  //   return "Hello " + name
}

console.log(greet("Stefan"))

// function expression
let add = function (x, y) {
  return x + y
}

console.log(add(3, 4))

// arrow function
let greet2 = (name) => {
  return `Hello ${name}`
}

console.log(greet2("Marko"))
// Working with complex data types: Arrays and Objects
