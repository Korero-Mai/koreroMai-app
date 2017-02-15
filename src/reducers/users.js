module.exports = function (state = {}, action) {

  switch (action.type) {
    case 'UPDATE_USER':
      return Object.assign({}, state, {
        id: action.payload.id,
        username: action.payload.username
      })
    case 'LOGOUT_USER':
      return {}
    default:
      return state
  }
}
