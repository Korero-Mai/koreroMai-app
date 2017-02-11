const { combineReducers } = require('redux')
const activity = require('./activity')
const modal = require('./modal')
const letters = require('./letters')
const learnSoundPage = require('./learnSoundPage')

module.exports = combineReducers({
  // currentUser
  activity,
  modal,
  letters,
  learnSoundPage
})
