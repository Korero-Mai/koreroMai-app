module.exports = function(state = {}, action) {
  switch (action.type) {

    case 'SET_END':
      return action.end

    case 'RESET_END':
      return null

    case 'RESET_ADVENTURE':
      return null

    default:
      return state
  }
}
