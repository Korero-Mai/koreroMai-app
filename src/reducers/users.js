module.exports = function (state = {}, action) {

  switch (action.type) {

    case 'UPDATE_USER':
      state.id = action.payload.id
      state.username = action.payload.username
      return state

    case 'LOGOUT_USER':
      state = {}
      return state

    default:
      return state
  }
}
