// Synchronous and Asynchronous execution of code in JavaScript
// console.log("Task 1")

// for (let i = 0; i < 10000; i++) {
//   console.log("Many other tasks", i)
// }

// console.log("Task 3")

// Callbacks
// console.log("Task 1")

// setTimeout(() => {
//   console.log("Task 2")
// }, 2000)

// console.log("Task 3")

// setTimeout and setInterval
// let counter = 0

// function incrementCounter() {
//   counter++
//   console.log("Counter", counter)
// }

// setInterval(incrementCounter, 1000)

// Promises

// pending
// fullfield
// rejected

// const myPromise = new Promise((resolve, reject) => {
//   if (false) {
//     resolve("Success!")
//   } else {
//     reject("Error!")
//   }
// })

// myPromise
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// Async/Await

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { name: "Mirko", surname: "Popovski", age: 32 }
      const isUserAvailable = false
      if (isUserAvailable) {
        resolve(userData)
      } else {
        reject("ERROR")
      }
    }, 3000)
  })
}

// async function fetchUser() {
//   const user = await getUserData()
//   console.log(user)
// }

async function fetchUser() {
  try {
    const user = await getUserData()
    console.log(user)
  } catch (error) {
    console.log("Something went wrong!", error)
  }
}

fetchUser()

// console.log("nesto")

// setTimeout(() => {
//   console.log("SETTIMEOT")
// }, 0)

// console.log("CONSOLELOG")

// try/catch and finally

// try {
//   console.log("code in try block")
// } catch (error) {
//   console.log("code to handle the exception", error)
// } finally {
//   console.log("The code will be executed regradless of exceptions")
// }
