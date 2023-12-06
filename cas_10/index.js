import { multiply, PI } from "./math.js"
import calculator from "./calculator.js"

// Example of localStorage
localStorage.setItem("username", "marko_markovski")
localStorage.setItem("theme", "dark")

const theme = localStorage.getItem("theme")

console.log("The theme is: ", theme)

// Example of sessionStorage
sessionStorage.setItem("tempData", "some_value")
const tempData = sessionStorage.getItem("tempData")

console.log(tempData)

console.log(multiply(10, 10))
console.log(PI)

console.log(calculator.subtract(90, 78))
