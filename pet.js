console.log("pet script running")

let happiness = 70
let energy = 70

const petButton = document.querySelector("#pet-button")
console.log(petButton)
const feedButton = document.querySelector("#feed-button")
console.log(feedButton)
const workoutButton = document.querySelector("#workout-button")
console.log(workoutButton)
const status = document.querySelector("#status")
console.log(status.innerHTML)
const gudetama = document.querySelector("#gudetama")
console.log(gudetama.innerHTML)
const caption = document.querySelector("#caption")
console.log(caption.innerHTML)

const updateImage = (imagePath) => {
  // console.log(`updating image to ${imagePath}`)
  gudetama.innerHTML = `<img src=${imagePath} class="center"/>`
  // console.log(`gudetama.innerHTML: ${gudetama.innerHTML}`)
}

const updateCaption = (newCaption) => {
  console.log(`changing caption to "${newCaption}"`)
  caption.innerHTML = `<p>${newCaption}</p>`
  console.log(`new caption: ` + caption.innerHTML)
}

const eatingGudetama = () => {
  console.log("start eating")
  updateImage("img/eating.webp")
  updateCaption("yum yum bacon")
  
  setTimeout(() => {      
    console.log("done eating")
    updateCaption("wahoo thank you")
    updateImage("img/attention.png")
  }, 3000)
}

const updateStatus = (e) => {
  console.log(e.target.id + " pressed")
  if (e.target.id === "heart") {
    updateCaption("play time yay time")
    happiness += 5
  }
  else if (e.target.id === "bacon") {
    eatingGudetama()
    energy += 10
  }
  else if (e.target.id === "weight") {
    if (energy <= 40) {
      updateCaption("am tired but fine")
    } 
    else {
      updateCaption("bleh moving")
    }

    happiness = (happiness - 10 < 0) ? 0 : happiness - 10
    energy = (energy == 0) ? 0 : energy - 10
  }
  status.innerHTML = `<p>happiness: ${happiness}</p><p>energy: ${energy}</p>`
  
  if (energy == 0) {
    updateImage("img/leaving.webp")
    updateCaption("sad and tired... bye now")
  }
  // else {
  //   updateCaption("play with me")
  // }
}

petButton.addEventListener('click', updateStatus)
feedButton.addEventListener('click', updateStatus)
workoutButton.addEventListener('click', updateStatus)