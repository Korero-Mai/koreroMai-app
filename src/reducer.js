const clone = require('clone')

module.exports = function (state, action) {

	const newState = clone(state)

	switch (action.type) {
		case 'UPDATE_USERS':
			newState.users = action.payload
			console.log(newState)
			return newState

		default:
			return newState
		}
	}
