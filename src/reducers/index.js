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
<<<<<<< HEAD
const editUser = require('./editUser')


=======
const playerToken = require('./playerToken')
>>>>>>> 3a78aa0dba60245f5c38df229f28567e29b691ba

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
<<<<<<< HEAD
  editUser
=======
  playerToken
>>>>>>> 3a78aa0dba60245f5c38df229f28567e29b691ba

})
