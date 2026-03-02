import _ from 'lodash'
import { engine } from '../index.js'
import { rounds } from '../config/game-settings.js'

export default () => {
  const gameRules = 'Find the greatest common divisor of given numbers.'
  const questionsAnswers = []

  let i = 0

  while (i < rounds) {
    const randomNumOne = _.random(1, 99)
    const randomNumTwo = _.random(1, 99)
    const questionStr = `${randomNumOne} ${randomNumTwo}`

    const maxNum = _.min([randomNumOne, randomNumTwo])
    let correctAnswer = 1

    for (let i = maxNum; i > 0; i -= 1) {
      if (randomNumOne % i === 0 && randomNumTwo % i === 0) {
        correctAnswer = i
        break
      }
    }

    questionsAnswers.push([questionStr, String(correctAnswer)])
    i += 1
  }

  engine(questionsAnswers, gameRules)
}
