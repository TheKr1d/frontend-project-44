import _ from 'lodash'

const isEven = num => num % 2 === 0

export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'

export const generateRound = () => {
  const randomNum = _.random(1, 99)
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no'

  return [randomNum, correctAnswer]
}
