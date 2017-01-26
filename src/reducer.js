const clone = require('clone')

module.exports = function (state){
	return state
}


//
// function reducer(state,action) {
//
// 	const newState=clone(state)
// 	switch (action.type) {
//
// 		case 'GET_ALL_USERS':
// 		newState.users = action.payload
// 		return newState
//
// 		default:
// 		return state
// 	}
// }
