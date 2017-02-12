module.exports = function (state = {}, action) {

  switch (action.type) {

    case 'UPDATE_USER':
      state.id = action.payload.id
      state.username = action.payload.username
      return state

    default:
      return state
  }
}
