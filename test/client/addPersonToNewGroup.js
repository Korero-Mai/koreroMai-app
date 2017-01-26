const clone = require('clone')
const _ = require('lodash')

module.exports = function (state, action) {
  const newState = clone(state)
  return newState
}

function reducer (state, action) {
  const newState = clone(state)

  switch (action.type) {

    case 'ADDS_PERSON_TO_NEW_GROUP':
      const 
  }
}
