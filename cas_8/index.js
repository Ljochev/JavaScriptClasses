// JSON

// Example
const json = {
  name: "John",
  age: 32,
  isStudent: false,
}

// JSON.stringify()
const userData = {
  name: "John",
  age: 32,
  isStudent: false,
}
// console.log(userData)

const jsonString = JSON.stringify(userData)
// console.log(jsonString)

// JSON.parse()
const parsedData = JSON.parse(jsonString)
// console.log(parsedData)

// GET Method with fetch using .then/.catch
function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      const emailContainer = document.getElementById("email-container")

      data.forEach((el) => {
        const emailParagraph = document.createElement("p")
        emailParagraph.textContent = el.email
        emailContainer.appendChild(emailParagraph)
      })
    })
    .catch((error) => console.log(error))
}

// fetchUsers()

// GET Method using aynsc/await try/catch
async function fetchDataAndDisplay() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    const emailContainer = document.getElementById("email-container")

    data.forEach((el) => {
      const emailParagraph = document.createElement("p")
      emailParagraph.textContent = el.email
      emailContainer.appendChild(emailParagraph)
    })
  } catch (error) {
    console.log(error)
  }
}

// fetchDataAndDisplay()

// POST Method
const postData = () => {
  const newPost = {
    userId: 13,
    title: "Post 13",
    body: "Random post",
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}

postData()
