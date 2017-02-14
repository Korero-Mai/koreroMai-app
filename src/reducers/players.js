const initialState = require('../../state')

module.exports = function (state = initialState.players, action) {

  switch (action.type) {

    case 'UPDATE_PLAYERS':
      return Object.assign({}, state, action.payload)

    case 'UPDATE_PLAYER_ATTRIBUTE':
      return Object.assign({}, state, {
        players: state.players.map((player) => {
          console.log('reducer',player.player_id , action.payload.player_id);
          if (player.player_id === action.payload.player_id) {
            return Object.assign({}, player, {
              [action.payload.key]: action.payload.value
            })
          }
          return player
        })
      })

    default:
      return state
  }
}
