const { combineReducers } = require('redux')
const activity = require('./activity')
const modal = require('./modal')
const letters = require('./letters')
const learnSoundPage = require('./learnSoundPage')
const practiceSoundPage = require('./practiceSoundPage')
const learnWordPage = require('./learnWordPage')
const practiceWordPage = require('./practiceWordPage')
const words = require('./words')
const wrongSounds = require('./wrongSounds')


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
  wrongSounds

})
