module.exports = function (state = false, action) {

  switch (action.type) {

    case 'INCREMENT_WRONGSOUNDS':
      return state +1

    case 'END_ROUND':
      return 0

    case 'RESET_WRONGSOUNDS':
      return 0

    default:
      return state
  }
}
