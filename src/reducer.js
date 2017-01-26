const clone = require('clone')

module.exports = function (state, action){
	const newState=clone(state)
	switch (action.type) {

		case 'UPDATE_USERS':
			newState.users = action.payload
			return newState

		case 'DISPLAY_PAST_NIGHTS':
			const newState = {}
			newState.showingPastNights = !state.showingPastNights
			return Object.assign({}, state, newState)

		default:
		return Object.assign({}, state)

	}
}
