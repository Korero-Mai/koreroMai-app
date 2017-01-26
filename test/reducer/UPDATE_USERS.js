const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('UPDATE_USERS | the user list gets updated based on the state', t => {
	const state = {
		users:{
			1:{
				name: 'lilly'
			}
		}
	}
	freeze(state)

	const expectedState = {
		users:{
			1:{
				name: 'lilly'
			},
			2:{
				name: 'james'
			},
		 	3:{
				name: 'ana'
			}
		}
	}

	const action = {
		type: 'UPDATE_USERS',
		payload:
		{
			1:{
				name: 'lilly'
			},
			2:{
			name: 'james'
			},
			3:{
			name: 'ana'
			}
		}
	}

	const newState = reducer(state, action)

	t.deepEqual(expectedState, newState)
	t.end()
})
