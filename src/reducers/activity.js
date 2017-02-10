module.exports = function (state = {}, action) {

  switch (action.type) {

    case 'UPDATE_ACTIVITY':
      return {...state, [action.activity] : true}

    case 'RESET_ACTIVITY':
      return {}

    default:
      return state
  }
}
