module.exports = function(state = {}, action) {

	switch (action.type) {

		case 'UPDATE_STEP_AND_PATH':
      return {...state, step: action.payload[0], path: action.payload[1]}

		case 'RESET_STEP_AND_PATH':
      return {...state, step: null, path: null}

		case 'RESET_ADVENTURE':
      return {
        step: null,
        path: null
      }

		default:
			return state
	}
}
