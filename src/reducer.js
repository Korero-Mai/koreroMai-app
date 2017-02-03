const clone = require('clone')

module.exports = function (state, action){

	const newState = clone(state)

	switch (action.type) {

		case 'MY_ACTION_TYPE':
			newState.actionType = !state.actionType
			break;

		default:
			return newState
	}

	return newState
}
