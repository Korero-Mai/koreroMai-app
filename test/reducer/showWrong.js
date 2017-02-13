require('babel-register')
const test = require('ava')
const initialState = require('../../state')
const reducer = require('../../src/reducers')

test('SHOW_TRY_AGAIN | toggle value of showWrong to true', t => {

  t.plan(1)

  const input  = {type: 'SHOW_TRY_AGAIN'}

  const newState = reducer(initialState.showWrong, input)
  t.true(newState.showWrong, "should set showWrong value to true")

})

test('END_ROUND | set value of showWrong to false', t => {

  t.plan(1)

  const input  = {type: 'END_ROUND'}

  const newState = reducer(initialState.showWrong, input)
  t.false(newState.showWrong, "should set showWrong value to false")
})
