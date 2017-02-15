const initialState = require('../../state')

module.exports = function (state = initialState.players, action) {

  switch (action.type) {
    case 'UPDATE_PLAYERS':
      return Object.assign({}, state, action.payload)

    case 'UPDATE_PLAYER_ATTRIBUTE':
      return Object.assign({}, state, {
        players: state.players.map((player) => {
          if (player.player_token === action.payload.player_token) {
            return Object.assign({}, player, {
              [action.payload.key]: action.payload.value,
            })
          }
          return player
        })
      })

    case 'DELETE_PLAYER':
    return Object.assign({}, state, {
      players: state.players.filter((player) => {
        return player.id_player !== action.payload
      })
    })

    default:
      return state
  }
}

// players: {
//   players:[],
//   group_name:""
// },
