module.exports = function(state = {}, action) {

	switch (action.type) {

		case 'GET_STICK':
      return {...state, stick: true}

		case 'SKIP_STICK':
      return {...state, stick: false}

    case 'RESET_ADVENTURE':
      return {
        gold: 0
      }

		default:
			return state
	}
}
