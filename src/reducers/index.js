const { combineReducers } = require('redux')
const situation = require('./situation')
const inventory = require('./inventory')

module.exports = combineReducers({
  situation,
  inventory
})
