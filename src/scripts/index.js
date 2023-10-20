const calculateTMB = (genre, age, height, weight) => {
  let TMB = (10 * weight) + (6.25 * height) - (5 * age)
  if (genre === 'woman') {
    return TMB - 161
  } else {
    return TMB + 5
  }
}

const calculateCalories = (activity, genre, age, height, weight) => {
  const TMB = calculateTMB(genre, age, height, weight)
  switch (activity) {
    case 'nothing':
      return TMB * 1.2
    case 'light':
      return TMB * 1.375
    case 'moderate':
      return TMB * 1.55
    case 'regular':
      return TMB * 1.725
    case 'athlete':
      return TMB * 1.9

    
  }
}

const messageContainer = document.querySelector('.message')
const form = document.querySelector('.calculator__form')
const name = document.querySelector('#name-input')
const genreInput = document.querySelector('input[name="genre"]:checked')
const activityInput = document.querySelector('input[name="activity"]:checked')
const age =  document.querySelector('#age-input')
const height =  document.querySelector('#height-input')
const weight =  document.querySelector('#weight-input')
let ageRange = ''

form.addEventListener('submit', event => {
  event.preventDefault()
  const caloriesPerDay = calculateCalories(activityInput.value, genreInput.value, age.value, height.value, weight.value)
  if (age.value >= 15 && age.value <= 29) {
    ageRange = 'Joven'
  } else if (age.value >= 30 && age.value <= 59){
    ageRange = 'adultos'
  } else if (age.value >= 60) {
    ageRange = 'adultos mayores'
  }
  messageContainer.style.display = 'grid'
  messageContainer.innerHTML = `
    <div class="message__info">
      <h2 class="message__info--title">${name.value}</h2>
      <p class="message__info--text">Usted se encuentra en el grupo poblacional de <span class="population">${ageRange}</span> y las calorías por día que debe consumir son <span class="calories">${caloriesPerDay}</span></p>
    </div>
  `
  
})