module.exports = function(state = null, action) {

	switch (action.type) {

		case 'UPDATE_STEP_AND_PATH':
      return action.payload

		case 'RESET_STEP_AND_PATH':
      return null

		case 'RESET_ADVENTURE':
      return null

		default:
			return state
	}
}
