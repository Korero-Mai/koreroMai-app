const { combineReducers } = require('redux')
const situation = require('./situation')
const inventory = require('./inventory')
const steps = require('./steps')

module.exports = combineReducers({
  situation,
  inventory,
  steps
})
