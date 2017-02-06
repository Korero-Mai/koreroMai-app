module.exports = function(state = {}, action) {
  console.log("into the reducers", action);

	switch (action.type) {

		case 'GET_STICK':
      return {...state, stick: true}

		case 'RESET_INVENTORY':
      return {...state}

		default:
			return state
	}
}
