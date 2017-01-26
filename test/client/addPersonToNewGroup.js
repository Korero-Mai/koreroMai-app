const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('ADDS_PERSON_TO_NEW_GROUP | changes the value of userNames.going for a specfic user to its negation', t => {

  const state = {
    userNames : {
      1: {id:1, name: 'Lucas', going: false},
      2: {id:2, name: 'Meghan', going: true},
      3: {id:3, name: 'Alice', going: false}
    }
  }

  freeze(state)

  const expectedState1 = {
    userNames : {
      1: {id:1, name: 'Lucas', going: true},
      2: {id:2, name: 'Meghan', going: true},
      3: {id:3, name: 'Alice', going: false}
    }
  }

  const action = {
    type: 'ADDS_PERSON_TO_NEW_GROUP',
    payload: 1
  }

  const newState1 = reducer(state, action)

  t.deepEqual(expectedState1, newState1, 'should change Lucas to true')

  const expectedState2 = {
    userNames : {
      1: {id:1, name: 'Lucas', going: true},
      2: {id:2, name: 'Meghan', going: false},
      3: {id:3, name: 'Alice', going: false}
    }
  }

  const actionTwo = {
    type: 'ADDS_PERSON_TO_NEW_GROUP',
    payload: 2
  }

  const newState2 = reducer(newState1, actionTwo)

  t.deepEqual(expectedState2, newState2, 'should change Meghan to false')

  t.end()
})
