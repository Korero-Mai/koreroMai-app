const { combineReducers } = require('redux')
const situation = require('./situation')
const inventory = require('./inventory')
const steps = require('./steps')
const end = require('./end')
const score = require('./score')

module.exports = combineReducers({
  situation,
  inventory,
  steps,
  end,
  score
})
