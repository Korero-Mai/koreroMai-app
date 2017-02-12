const { combineReducers } = require('redux')
const activity = require('./activity')
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


module.exports = combineReducers({
  // currentUser
  activity,
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
  players

})
