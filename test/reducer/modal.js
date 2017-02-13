require('babel-register')
const test = require('ava')
const initialState = require('../../state')
const reducer = require('../../src/reducers')

test('TOGGLE_MODAL | toggle value of modal(true/false)', t => {

  t.plan(2)

  const input  = {type: 'TOGGLE_MODAL'}

  const newState = reducer(initialState.modal, input)
  t.true(newState.modal, "should toggle modal value(true)")

  const newState2 = reducer(newState, input)
  t.false(newState2.modal, "should toggle modal value (false)")

})

test('END_ROUND | set value of modal to false', t => {

  t.plan(1)

  const input  = {type: 'END_ROUND'}

  const newState = reducer(initialState.modal, input)
  t.false(newState.modal, "should set modal value (false)")
})
