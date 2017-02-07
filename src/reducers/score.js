module.exports = function(state = {}, action) {

  switch (action.type) {

    case 'GET_STICK':
      return state + 1

    case 'SKIP_STICK':
      return state - 1

    case 'SET_END':
      if (action.end === 2) {
        return state + 10
      } else {
        return state
      }

    case 'RESET_END':
      return 0

    case 'RESET_ADVENTURE':
      return 0

    default:
      return state
  }
}
