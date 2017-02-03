const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('UPDATE_USERS', t => {
  const expectedState = {
      users : {
        1: {id: 1, name: 'lilly'},
        2: {id: 2, name: 'james'},
        3: {id: 3, name: 'ana'}
  }
}

const state = {users:{}}

  const action = {
    type: 'UPDATE_USERS',
    payload: [
  {
    "id": 1,
    "name": "lilly"
  },
  {
    "id": 2,
    "name": "james"
  },
  {
    "id": 3,
    "name": "ana"
  }
]
  }

const newState = reducer(state, action)

t.deepEqual(newState, expectedState, 'should return all users as an object')
t.end()
})
