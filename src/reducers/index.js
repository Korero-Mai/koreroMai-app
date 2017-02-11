const { combineReducers } = require('redux')
const activity = require('./activity')
const modal = require('./modal')
const letters = require('./letters')
const learnSoundPage = require('./learnSoundPage')
const practiceSoundPage = require('./practiceSoundPage')

module.exports = combineReducers({
  activity,
  modal,
  letters,
  learnSoundPage,
  practiceSoundPage
})
