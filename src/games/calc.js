import _ from 'lodash'

export const gameRules = 'What is the result of the expression?'

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

export const generateRound = () => {
  const operators = ['+', '-', '*']

  const randomNumOne = _.random(1, 9)
  const randomNumTwo = _.random(1, 9)
  const randomOperators = operators[_.random(0, operators.length - 1)]

  const expression = `${randomNumOne} ${randomOperators} ${randomNumTwo}`
  const correctAnswer = String(calculate(randomNumOne, randomNumTwo, randomOperators))

  return [expression, correctAnswer]
}
