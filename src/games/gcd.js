import _ from 'lodash'

export const gameRules = 'Find the greatest common divisor of given numbers.'

export const generateRound = () => {
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

  return [questionStr, String(correctAnswer)]
}
