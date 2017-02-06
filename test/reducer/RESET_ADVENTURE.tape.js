require('babel-register')
const test = require('tape')
const initialState = require('../../state')
const reducer = require('../../src/reducers')

test('RESET_ADVENTURE | reset state values to default', t => {

  const state = {
  situation: {
    step: 1,
    path: 1
  },
  inventory: {
    gold: 5
  }
}

  const action = {
    type: 'RESET_ADVENTURE'
  }

  const newState = reducer(state, action)

  t.deepEqual(initialState, newState, "should reste the state values")

  t.end()
})
