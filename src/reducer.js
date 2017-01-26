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
