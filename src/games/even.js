import _ from 'lodash'
import { engine } from '../index.js'
import { rounds } from '../config/game-settings.js'

const isEven = num => num % 2 === 0

export default () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'
  const questionsAnswers = []

  let i = 0

  while (i < rounds) {
    const randomNum = _.random(1, 99)
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no'

    questionsAnswers.push([randomNum, correctAnswer])
    i += 1
  }

  engine(questionsAnswers, gameRules)
}
