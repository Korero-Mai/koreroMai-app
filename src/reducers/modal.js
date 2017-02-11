module.exports = function (state = false, action) {

  switch (action.type) {

    case 'OPEN_MODAL':
      return true

    case 'CLOSE_MODAL':
      return false

    case 'CLOSE_MODAL_RESET_SCORE':
      return false

    default:
      return state
  }
}
