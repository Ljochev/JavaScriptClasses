// Event Listeners
const myButton = document.getElementById("my-button")

const clickHandler = () => {
  alert("The button is clicked!")
  //   myButton.removeEventListener("click", clickHandler) // removing the event listener
}

myButton.addEventListener("click", clickHandler)

const title = document.querySelector("h1")

title.addEventListener("", () => {
  title.style.fontSize = "45px"
  title.style.transition = "font-size 0.3s ease-in-out"
})

title.addEventListener("mouseleave", () => {
  title.style.fontSize = "25px"
  title.style.transition = "font-size 0.3s ease-in-out"
})

// preventDefault() and stopPropagation()
const googleLink = document.getElementsByTagName("a")[0]
googleLink.addEventListener("click", (event) => {
  event.preventDefault()
  console.log(event)
  console.log("google link")
  googleLink.style.color = "green"
})

const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

parent.addEventListener("click", () => {
  console.log("you clicked the PARENT element")
})

child.addEventListener("click", (event) => {
  event.stopPropagation()
  console.log("you clicked the CHILD element")
})

const submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", () => {
  const inputElement = document.getElementById("myInput")
  const inputValue = inputElement.value

  alert(`Hello ${inputValue}`)
})
