const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('DISPLAY_PAST_NIGHTS | changes the value of showingPastNights to its negation', t => {

  const state = {
    showingPastNights: false
  }
  freeze(state)

  const expectedState1 = {
    showingPastNights: true
  }

  const action = {
    type: 'DISPLAY_PAST_NIGHTS'
  }

  const newState1 = reducer(state, action)

  t.deepEqual(expectedState1, newState1, 'should change a false value to true')

  const expectedState2 = {
    showingPastNights: false
  }

  const newState2 = reducer(newState1, action)

  t.deepEqual(expectedState2, newState2, 'should change a true value to false')

  t.end()
})
