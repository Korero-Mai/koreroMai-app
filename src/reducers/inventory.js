module.exports = function(state = {}, action) {
  console.log("into the reducers", action);

	switch (action.type) {

		case 'GET_STICK':
      return {...state, stick: true}

    case 'RESET_ADVENTURE':
      return {
        gold: 0
      }

		default:
			return state
	}
}
