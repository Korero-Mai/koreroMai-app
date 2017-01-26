const clone = require('clone')

module.exports = function (state, action){
	const newState = clone(state)


	switch (action.type) {

		case 'DISPLAY_PAST_NIGHTS':
			newState.showingPastNights = !state.showingPastNights
			break;

		case 'UPDATE_USERS':
			newState.users = action.payload
			console.log(newState)

			break;

    case 'ADDS_PERSON_TO_NEW_GROUP':
      newState.userNames[action.payload].going = !newState.userNames[action.payload].going
      break;

		default:
		return newState
	}

	return newState

}
