#!/usr/bin/env node
import { gameRules, generateRound } from '../../src/games/gcd.js'
import { engine } from '../../src/index.js'

engine(gameRules, generateRound)
