const clone = require('clone')

module.exports = function (state, action){

	const newState = clone(state)

	switch (action.type) {

		case 'DISPLAY_PAST_NIGHTS':
			newState.showingPastNights = !state.showingPastNights
			break;

		case 'DISPLAY_REGISTER_FORM':
			newState.showingRegisterForm = true
			break;

		case 'UPDATE_USERS':
			newState.users = action.payload
			break;

		case 'UPDATE_NIGHTS':
			newState.nights = action.payload
			break;

		case 'UPDATE_USERS_NIGHTS':
			newState.users_nights = action.payload

		case "LOGOUT":
			newState.userName = null
			break;

		case "LOGIN":
			newState.userName = 'TexMix'
			break;

    case 'ADDS_PERSON_TO_NEW_GROUP':
      newState.userNames[action.payload].going = !newState.userNames[action.payload].going
      break;

		default:
			return newState
	}

	return newState
}
