#!/usr/bin/env node
import { gameRules, generateRound } from '../../src/games/even.js'
import { engine } from '../../src/index.js'

engine(gameRules, generateRound)
