import _ from 'lodash'
import { engine } from '../index.js'
import { rounds } from '../config/game-settings.js'

const isPrime = (num) => {
  if (num === 2) {
    return true
  }
  if (num < 2 | num % 2 === 0) {
    return false
  }

  for (let i = 3; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

export default () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  const questionsAnswers = []

  let i = 0

  while (i < rounds) {
    const randomNum = _.random(1, 99)
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no'

    questionsAnswers.push([randomNum, correctAnswer])
    i += 1
  }

  engine(questionsAnswers, gameRules)
}
