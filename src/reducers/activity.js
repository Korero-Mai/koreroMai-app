module.exports = function (state={}, action) {

  switch (action.type) {

    case 'UPDATE_ACTIVITY':
      console.log('state',...state );
      return {...state,
        [action.activity] : true,
        letters: state.letters,
      }

    case 'RESET_ACTIVITY':
      return {}

    default:
      return state
  }
}
