<<<<<<< HEAD
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
=======
module.exports = function (state, action){
	switch (action.type) {
		case 'DISPLAY_PAST_NIGHTS':
			const newState = {}
			newState.showingPastNights = !state.showingPastNights
			return Object.assign({}, state, newState)

			break;

		default:
		return Object.assign({}, state)

	}
	// function reducer(state,action) {
	//
	// 	const newState=clone(state)
	// 	switch (action.type) {
	//
	// 		case 'GET_ALL_USERS':
	// 			newState.users = action.payload
	// 			return newState
	//
	// 		default:
	// 			return state
	// 	}
	// }
}
>>>>>>> 44ce7f8859d7ed1b3ce5e9a0bdea21267c9fa639
