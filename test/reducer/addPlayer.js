require('babel-register')
const test = require('ava')
const initialState = require('../../state')
const reducer = require('../../src/reducers')
const request = require('superagent')


test('ADD_PLAYER | it should add a player ', t => {
    t.plan(2)

    const input = {type: 'ADD_PLAYER', payload: true}

    const newState = reducer(initialState.addPlayer, input)
    t.true(newState.addPlayer)

    const newState2 = reducer(newState, input)
    t.false(newState2.addPlayer, "should toggle addPlayer value (false)")
  })
