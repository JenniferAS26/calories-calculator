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

const form = document.querySelector('.calculator__form')

form.addEventListener('submit', event => {
  event.preventDefault()
  const name = document.querySelector('#name-input').value
  const genreInput = document.querySelector('input[name="genre"]:checked').value
  const activityInput = document.querySelector('input[name="activity"]:checked').value
  const age =  document.querySelector('#age-input').value
  const height =  document.querySelector('#height-input').value
  const weight =  document.querySelector('#weight-input').value
  const caloriesPerDay = calculateCalories(activityInput, genreInput, age, height, weight)
  console.log(caloriesPerDay)
  
})