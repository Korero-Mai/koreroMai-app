module.exports = function (state ='', action) {
  switch (action.type) {
    case 'EDIT_PLAYER':
    state = action.payload
    return  state
    default:
      return state
  }
}
