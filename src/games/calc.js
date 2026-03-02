import _ from 'lodash'
import { engine } from '../index.js'
import { rounds } from '../config/game-settings.js'

const calculate = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+':
      return numberOne + numberTwo
    case '-':
      return numberOne - numberTwo
    case '*':
      return numberOne * numberTwo
    default:
      return `ERROR: operator - udefined. This operator ${operator}`
  }
}

export default () => {
  const gameRules = 'What is the result of the expression?'
  const questionsAnswers = []

  const operators = ['+', '-', '*']

  let i = 0
  while (i < rounds) {
    const randomNumOne = _.random(1, 9)
    const randomNumTwo = _.random(1, 9)
    const randomOperators = operators[_.random(0, 2)]

    const expression = `${randomNumOne} ${randomOperators} ${randomNumTwo}`
    const correctAnswer = String(calculate(randomNumOne, randomNumTwo, randomOperators))

    questionsAnswers.push([expression, correctAnswer])
    i += 1
  }

  engine(questionsAnswers, gameRules)
}
