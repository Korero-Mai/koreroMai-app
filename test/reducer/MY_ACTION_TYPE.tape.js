const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('MY_ACTION_TYPE | toggle actionType to true or false', t => {

  const state = {
    actionType: false
  }
  freeze(state)

  const expectedState1 = {
    actionType: true
  }

  const action = {
    type: 'MY_ACTION_TYPE'
  }

  const newState1 = reducer(state, action)

  t.deepEqual(expectedState, newState1, 'should change a false value to true')

  const expectedState2 = {
    actionType: true
  }

  const newState2 = reducer(newState1, action)

  t.deepEqual(expectedState2, newState2, 'should change a true value to false')

  t.end()
})
