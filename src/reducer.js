
const clone = require('clone')

module.exports = function (state, action){
	const newState = {}

	switch (action.type) {

		case 'DISPLAY_PAST_NIGHTS':
			newState.showingPastNights = !state.showingPastNights
			break;

		case 'UPDATE_USERS':
			newState.users = action.payload

			break;

		default:
		return Object.assign({}, state)
	}

	return Object.assign({}, state, newState)
}
