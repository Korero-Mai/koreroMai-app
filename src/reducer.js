const clone = require('clone')
const _ = require('lodash')
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
			const ids = _.map(action.payload, 'id')
			newState.users = _.zipObject(ids, action.payload)
			break;

		case "LOGOUT":
			newState.userName = null
			break;

		case "LOGIN":
			newState.userName = 'TexMix'
			break;

    case 'ADDS_PERSON_TO_NEW_GROUP':
      newState.users[action.payload].going = !newState.users[action.payload].going
      break;

		default:
			return newState
	}

	return newState
}
