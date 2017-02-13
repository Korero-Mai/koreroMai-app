require('babel-register')
const test = require('ava')
const initialState = require('../../state')
const reducer = require('../../src/reducers')

test('INCREMENT_WRONGWORDS | increment the WrongWords value by 1', t => {

  t.plan(1)

  const input  = {type: 'INCREMENT_WRONGWORDS'}

  const newState = reducer(initialState.wrongWords, input)
  const expectedState = initialState.wrongWords + 1

  t.is(newState.wrongWords, expectedState, "should add 1 to wrongWords")

})

test('RESET_WRONGWORDS | set the wrongWords value to 0', t => {

  t.plan(1)

  const input  = {type: 'RESET_WRONGWORDS'}

  const newState = reducer(initialState.wrongWords, input)
  const expectedState = 0

  t.is(newState.wrongWords, expectedState, "should set the wrongWords value to 0")

})

test('END_ROUND | set the wrongWords value to 0', t => {

  t.plan(1)

  const input  = {type: 'END_ROUND'}

  const newState = reducer(initialState.wrongWords, input)
  const expectedState = 0

  t.is(newState.wrongWords, expectedState, "should set the wrongWords value to 0")

})

test('LOGOUT_USER | set the wrongWords value to 0', t => {

  t.plan(1)

  const input  = {type: 'LOGOUT_USER'}

  const newState = reducer(initialState.wrongWords, input)
  const expectedState = 0

  t.is(newState.wrongWords, expectedState, "should set the wrongWords value to 0")

})
