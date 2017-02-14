require('babel-register')
const test = require('ava')
const initialState = require('../../state')
const reducer = require('../../src/reducers/players')
const request = require('superagent')


// test('UPDATE_PLAYERS | inject fetched players in the state', t => {
//
//     t.plan(1)
//
//
//     const input = {type: 'UPDATE_PLAYERS',
//     payload:
//     {
//       group_name:'group3',
//       players: [{
//             id_player: 3,
//             player_name: "Candis",
//             player_token: "candis123",
//             prac_sounds_total_wrong: 3,
//             prac_words_total_wrong: 6,
//             group_name: "group1"
//           }]
//     }
//   }
//
//     const expectedState =     {
//           group_name:'group3',
//           players: [{
//                 id_player: 3,
//                 player_name: "Candis",
//                 player_token: "candis123",
//                 prac_sounds_total_wrong: 3,
//                 prac_words_total_wrong: 6,
//                 group_name: "group1"
//               }]
//         }
//
//     const newState = reducer(initialState.players, input)
//     t.deepEqual(newState.players, expectedState)
//   })

  test('UPDATE_PLAYER_ATTRIBUTE | inject fetched players in the state', t => {

      t.plan(1)

      const fakeInitialState = {
        group_name: "group1",
        players: [
          {
            id_player: 3,
            player_name: "Candis",
            player_token: "candis123",
            prac_sounds_total_wrong: 3,
            prac_words_total_wrong: 6,
            group_name: "group1"
          }
        ]
      }

      const action = {
        type: 'UPDATE_PLAYER_ATTRIBUTE',
        payload: {
          value: "Bob",
          key: 'player_name',
          player_token: "candis123"
        }
      }



      const expectedState = {
        players: [
          {
            id_player: 3,
            player_name: "Bob",
            player_token: "candis123",
            prac_sounds_total_wrong: 3,
            prac_words_total_wrong: 6,
            group_name: "group1"
          }
        ],
        group_name: "group1"
      }

      const newState = reducer(fakeInitialState, action)
      // console.log('newsate', newState.players);
      t.deepEqual(newState, expectedState, 'this works')
    })
