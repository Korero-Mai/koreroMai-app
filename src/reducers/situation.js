module.exports = function online(state = {}, action) {

	switch (action.type) {

		case 'UPDATE_STEP_AND_PATH':
      return {...state, step: action.payload[0], path: action.payload[1]}
    break;

		case 'RESET_STEP_AND_PATH':
      return {...state, step: null, path: null}
    break;

		default:
			return state
	}
}
