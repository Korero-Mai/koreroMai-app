const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('USER_PAYING | changes the value of personPaying to the relevant user and updates the paying key in each user', t => {

  const state = {
    currentNight: {
  		users: {
  			1: {id:1, name: 'Lucas', paying: true},
  			2: {id:2, name: 'Meghan', paying: false},
  			3: {id:3, name: 'Alice', paying: false}
  		},
  		personPaying: 1,
  		total: 4655
    }
  }
  freeze(state)

  const expectedState1 = {
    currentNight: {
  		users: {
  			1: {id:1, name: 'Lucas', paying: false},
  			2: {id:2, name: 'Meghan', paying: true},
  			3: {id:3, name: 'Alice', paying: false}
  		},
  		personPaying: 2,
  		total: 4655
    }
  }

  const action = {
    type: 'USER_PAYING',
    payload: 2
  }

  const newState1 = reducer(state, action)

  t.deepEqual(expectedState1, newState1, 'should change a false value to true and all other true values to false, should update the personPaying')

  const expectedState2 = {
    currentNight: {
  		users: {
  			1: {id:1, name: 'Lucas', paying: false},
  			2: {id:2, name: 'Meghan', paying: false},
  			3: {id:3, name: 'Alice', paying: false}
  		},
  		personPaying: null,
  		total: 4655
    }
  }

  const newState2 = reducer(newState1, action)

  t.deepEqual(expectedState2, newState2, 'should change a true value to false, should update the personPaying')

  t.end()
})
