// Containers
const welcomeContainer = document.querySelector('.welcome')
const calculatorContainer = document.querySelector('.calculator')

// Buttons
const startButton = document.querySelector('.welcome__button')

// Events
startButton.addEventListener('click', () => {
  welcomeContainer.style.display = 'none'
  calculatorContainer.style.display = 'grid'
})