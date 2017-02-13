require('babel-register')
const test = require('ava')
const initialState = require('../../state')
const reducer = require('../../src/reducers')
const request = require('superagent')
const freeze = require('deep-freeze')

freeze(initialState.users)

test('UPDATE_PLAYERTOKEN| inject entered player token in the state', t => {

    t.plan(1)

    const input = {type: 'UPDATE_PLAYERTOKEN', payload: 'token'}

    const expectedState = 'token'

    const newState = reducer(initialState.playerToken, input)
    t.deepEqual(newState.playerToken, expectedState)
  })
