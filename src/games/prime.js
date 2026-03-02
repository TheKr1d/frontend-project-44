import _ from 'lodash'

export const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

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

export const generateRound = () => {
  const randomNum = _.random(1, 99)
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no'

  return [randomNum, correctAnswer]
}
