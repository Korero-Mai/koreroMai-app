module.exports = function (state = false, action) {

  switch (action.type) {
    case 'TOGGLE_MODAL':
      return !state
    case 'END_ROUND':
      return false
    default:
      return state
  }
}
