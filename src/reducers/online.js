module.exports = function online(state = false, action) {

	switch (action.type) {

		case 'TOGGLE_ONLINE':
 			return !state

		default:
			return state
	}
}
