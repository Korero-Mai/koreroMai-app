module.exports = function (state = {}, action) {

  switch (action.type) {

    case 'UPDATE_ACTIVITY':
      return {...state, [action.activity] : true}

    default:
      return state 
  }
}
