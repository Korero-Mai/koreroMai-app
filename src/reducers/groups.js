module.exports = function (state = {}, action) {

  switch (action.type) {
    case 'UPDATE_GROUPS':
    return Object.assign({}, state, action.payload)
    default:
      return state
  }
}
