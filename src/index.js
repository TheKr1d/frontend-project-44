import readlineSync from 'readline-sync'
import { hello } from './cli.js'
import { rounds } from './config/game-settings.js'

export const engine = (gameRules, funcGenerateRound) => {
  const userName = hello()

  console.log(gameRules)

  let isWinner = true

  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = funcGenerateRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (correctAnswer === userAnswer) {
      console.log('Correct!')
    }
    else {
      isWinner = false
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      break
    }
  }

  if (isWinner) {
    console.log(`Congratulations, ${userName}!`)
  }
  else {
    console.log(`Let's try again, ${userName}!`)
  }
}
