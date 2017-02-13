require('babel-register')
const test = require('ava')
const initialState = require('../../state')
const reducer = require('../../src/reducers')
const request = require('superagent')
const freeze = require('deep-freeze')

freeze(initialState.users)

test('UPDATE_USER | inject fetched user in the state', t => {

    t.plan(1)


    const input = {type: 'UPDATE_USER', payload:
      {
        id: 1,
        username: "anna"
      }
    }

    const expectedState = {
      id: 1,
      username: "anna"
    }

    const newState = reducer(initialState.users, input)
    t.deepEqual(newState.users, expectedState)
  })

test('LOGOUT_USER | remove user from the state', t => {

    t.plan(1)

    const input = {type: 'LOGOUT_USER'}

    const expectedState = {}

    const newState = reducer(initialState.users, input)
    t.deepEqual(newState.users, expectedState)
  })
