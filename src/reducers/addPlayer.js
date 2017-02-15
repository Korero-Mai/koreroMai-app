module.exports = function (state = false, action) {

  switch (action.type) {
    case 'ADD_PLAYER':
    return !state
    default:
      return state
  }
}
