require('babel-register')
const test = require('ava')
const initialState = require('../../state')
const reducer = require('../../src/reducers')

test('INCREMENT_WRONGSOUNDS | increment the wrongSounds value by 1', t => {

  t.plan(1)

  const input  = {type: 'INCREMENT_WRONGSOUNDS'}

  const newState = reducer(initialState.wrongSounds, input)
  const expectedState = initialState.wrongSounds + 1

  t.is(newState.wrongSounds, expectedState, "should add 1 to wrongSounds")

})

test('RESET_WRONGSOUNDS | set the wrongSounds value to 0', t => {

  t.plan(1)

  const input  = {type: 'RESET_WRONGSOUNDS'}

  const newState = reducer(initialState.wrongSounds, input)
  const expectedState = 0

  t.is(newState.wrongSounds, expectedState, "should set the wrongSounds value to 0")

})
