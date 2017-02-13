require('babel-register')
const test = require('ava')
const initialState = require('../../state')
const reducer = require('../../src/reducers')
const request = require('superagent')


test('EDIT_USER | edit user ', t => {
    t.plan(2)

    const input = {type: 'EDIT_USER', payload: true}

    const newState = reducer(initialState.editUser, input)
    t.true(newState.editUser)

    const newState2 = reducer(newState, input)
    t.false(newState2.editUser, "should toggle editUser value (false)")
  })
