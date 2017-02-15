module.exports = function (state = [], action) {

  switch (action.type) {

    case 'UPDATE_SCORE_DATA':
      return Object.assign({}, state, action.payload)
    case 'RESET_SCORE_DATA':
      return []
    default:
      return state
  }
}
