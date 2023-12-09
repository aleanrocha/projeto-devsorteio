const btnRandomDraw = document.querySelector('#btn-random-draw')
const resultRandom = document.querySelector('#result-random-number')
const formRandomNumber = document.querySelector('form')
const inpMin = document.querySelector('#number-one')
const inpMax = document.querySelector('#number-two')

const generateRandomNumber = (e) => {
  e.preventDefault()
  const min = Math.ceil(inpMin.value)
  const max = Math.floor(inpMax.value)
  if (inpMin.value === '' || inpMax.value === '') {
    alert('Por favor, preencha todos os campos!')
    return
  } else if (min >= max) {
    alert('O número inicial não pode ser maior que o número final')
    return
  } else if (min < 0 || max < 0) {
    alert('Não aceitamos valores negativos')
    return
  }
  const showNumber = (i) => {
    setTimeout(() => {
      const resultRandomNumber = Math.floor(
        Math.random() * (max - min + 1) + min
      )
      resultRandom.textContent = resultRandomNumber
      if (i === max) {
        resultRandom.textContent = resultRandomNumber
      }
    }, i * 0.5)
  }
  for (let i = min; i <= max; i++) {
    showNumber(i)
  }
}

btnRandomDraw.addEventListener('click', generateRandomNumber)
formRandomNumber.addEventListener('submit', (e) => {
  e.preventDefault()
  generateRandomNumber()
})

console.log('rodando no node')