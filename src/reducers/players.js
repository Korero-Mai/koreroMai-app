module.exports = function (state = [], action) {

  switch (action.type) {

    case 'UPDATE_PLAYERS':
      state = action.payload
      return state

    default:
      return state
  }
}
