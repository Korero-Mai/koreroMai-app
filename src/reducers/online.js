module.exports = function online(state = {}, action){

	switch (action.type) {

		case 'TOOGLE_ONLINE':
 			return {...state, !action.thing}
 			break;

		default:
			return newState
	}
}
