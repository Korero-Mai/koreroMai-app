module.exports = function (state = false, action) {

  switch (action.type) {
    case 'SHOW_TRY_AGAIN':
      state = true
    return state
    case 'HIDE_TRY_AGAIN':
      state = false
    return state
    case 'END_ROUND':
      state = false
    return state
    default:
      return state
  }
}
