#!/usr/bin/env node
import { gameRules, generateRound } from '../../src/games/calc.js'
import { engine } from '../../src/index.js'

engine(gameRules, generateRound)
