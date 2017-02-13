module.exports = function (state = false, action) {

  switch (action.type) {

    case 'EDIT_USER':
    return !state

    default:
      return state
  }
}
