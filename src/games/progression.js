import _ from 'lodash'

export const gameRules = 'What number is missing in the progression?'

const generateProgression = (start, step, length) => {
  const arr = []

  for (let i = 0; i <= length; i += 1) {
    arr.push(start + i * step)
  }

  return arr
}

export const generateRound = () => {
  const start = _.random(1, 10)
  const step = _.random(1, 10)
  const length = _.random(5, 10)

  let progression = generateProgression(start, step, length)
  const secretPositionIndex = _.random(5, length)
  const saveSecretElement = progression[secretPositionIndex]
  progression[secretPositionIndex] = '..'

  const progressionStr = progression.join(' ')

  return [progressionStr, String(saveSecretElement)]
}
