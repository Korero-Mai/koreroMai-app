require('babel-register')
const test = require('ava')
const initialState = require('../../state')
const reducer = require('../../src/reducers')
const request = require('superagent')


test('EDIT_PLAYER | should edit player info', t => {
    t.plan(3)

    const input = {type: 'EDIT_PLAYER', payload: 'bobbie123' }

    const input2 = {type: 'EDIT_PLAYER', payload: 'jenne123' }

    const input3 = {type: 'EDIT_PLAYER', payload: '' }

    const newState = reducer(initialState, input)
    t.is(newState.editPlayer,'bobbie123', 'should be player token')

    const newState2 = reducer(newState, input2)
    t.is(newState2.editPlayer, 'jenne123',"should be null")

    const newState3 = reducer(newState, input3)
    t.is(newState3.editPlayer, '',"should be null")

  })
