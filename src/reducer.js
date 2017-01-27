const clone = require('clone')
const _ = require('lodash')
module.exports = function (state, action){
	console.log('action', action);
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
			newState.userName = action.payload
			console.log('state', newState)
			break;

    case 'ADDS_PERSON_TO_NEW_GROUP':
      newState.userNames[action.payload].going = !newState.userNames[action.payload].going
      break;

		case 'USER_PAYING':
			newState.currentNight.personPaying = newState.currentNight.personPaying === action.payload
				? null
				: action.payload
			Object.keys(newState.currentNight.users).forEach(userKey => {
				newState.currentNight.users[userKey].paying = newState.currentNight.users[userKey].id === newState.currentNight.personPaying
			})

			break;

		default:
			return newState
	}

	return newState
}
