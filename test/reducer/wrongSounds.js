require('babel-register')
const test = require('ava')
const initialState = require('../../state')
const reducer = require('../../src/reducers')

test('INCREMENT_WRONGLETTERS | increment the wrongLetters value by 1', t => {

  t.plan(1)

  const input  = {type: 'INCREMENT_WRONGLETTERS'}

  const newState = reducer(initialState.wrongLetters, input)
  const expectedState = initialState.wrongLetters + 1

  t.is(newState.wrongLetters, expectedState, "should add 1 to wrongLetters")

})

test('RESET_WRONGLETTERS | set the wrongLetters value to 0', t => {

  t.plan(1)

  const input  = {type: 'RESET_WRONGLETTERS'}

  const newState = reducer(initialState.wrongLetters, input)
  const expectedState = 0

  t.is(newState.wrongLetters, expectedState, "should set the wrongLetters value to 0")

})

test('END_ROUND | set the wrongLetters value to 0', t => {

  t.plan(1)

  const input  = {type: 'END_ROUND'}

  const newState = reducer(initialState.wrongLetters, input)
  const expectedState = 0

  t.is(newState.wrongLetters, expectedState, "should set the wrongLetters value to 0")

})

test('LOGOUT_USER | set the wrongLetters value to 0', t => {

  t.plan(1)

  const input  = {type: 'LOGOUT_USER'}

  const newState = reducer(initialState.wrongLetters, input)
  const expectedState = 0

  t.is(newState.wrongLetters, expectedState, "should set the wrongLetters value to 0")

})
