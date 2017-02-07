module.exports = function(state = null, action) {

	switch (action.type) {

		case 'UPDATE_SITUATION':
      return action.situation

    case 'GET_STICK' :
      return action.situation

    case 'SKIP_STICK' :
      return action.situation

		case 'RESET_SITUATION':
      return null

		case 'RESET_ADVENTURE':
      return null

		default:
			return state
	}
}
