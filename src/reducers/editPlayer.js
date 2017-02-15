module.exports = function (state ='' , action) {

  switch (action.type) {
    case 'EDIT_PLAYER':
    // return Object.assign({}, state, action.payload)
    state = action.payload
    return  state
    default:
      return state
  }
}
