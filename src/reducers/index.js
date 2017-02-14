const { combineReducers } = require('redux')
const modal = require('./modal')
const letters = require('./letters')
const words = require('./words')
const learnSoundPage = require('./learnSoundPage')
const practiceSoundPage = require('./practiceSoundPage')
const learnWordPage = require('./learnWordPage')
const practiceWordPage = require('./practiceWordPage')
const wrongSounds = require('./wrongSounds')
const wrongWords = require('./wrongWords')
const users = require('./users')
const players = require('./players')
const groups = require('./groups')
const editUser = require('./editUser')
const playerToken = require('./playerToken')
const addPlayer = require('./addPlayer')
const showWrong = require('./showWrong')
const editPlayer = require('./editPlayer')
const scoreData = require('./scoreData')


module.exports = combineReducers({
  modal,
  letters,
  learnSoundPage,
  practiceSoundPage,
  learnWordPage,
  practiceWordPage,
  words,
  wrongSounds,
  wrongWords,
  users,
  players,
  groups,
  editUser,
  playerToken,
  addPlayer,
  showWrong,
  editPlayer,
  scoreData

})
