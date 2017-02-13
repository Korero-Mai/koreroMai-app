module.exports = function (state = '', action) {

  switch (action.type) {

    case 'UPDATE_PLAYERTOKEN':
      // return Object.assign({}, state, action.payload)
      state = action.payload
      return state

    case 'LOGOUT_PLAYER':
      return ''

    default:
      return state
  }
}
