import _ from 'lodash'
import { engine } from '../../src/index.js'
import { rounds } from '../config/game-settings.js'

const generateProgression = (start, step, length) => {
  const arr = []

  for (let i = 0; i <= length; i += 1) {
    arr.push(start + i * step)
  }

  return arr
}

export default () => {
  const gameRules = 'What number is missing in the progression?'
  const questionsAnswers = []

  let i = 0

  while (i < rounds) {
    const start = _.random(1, 10)
    const step = _.random(1, 10)
    const length = _.random(5, 10)

    let progression = generateProgression(start, step, length)
    const secretPositionIndex = _.random(5, length)
    const saveSecretElement = progression[secretPositionIndex]
    progression[secretPositionIndex] = '..'

    const progressionStr = progression.join(' ')

    questionsAnswers.push([progressionStr, String(saveSecretElement)])
    i += 1
  }

  engine(questionsAnswers, gameRules)
}
