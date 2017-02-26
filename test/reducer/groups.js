require('babel-register')
const test = require('ava')
const initialState = require('../../state')
const reducer = require('../../src/reducers')
const request = require('superagent')


test('UPDATE_GROUPS | inject fetched groups in the state', t => {

    t.plan(1)


    const input = {type: 'UPDATE_GROUPS', payload:
      {
        group1:
        [
          { id_player: 3,
         player_name: 'Candis',
         player_token: 'candis123',
         prac_letters_total_wrong: 3,
         prac_words_total_wrong: 6,
         group_name: 'group1' }
       ]
      }
    }
    const expectedState = {
      group1:
      [
        { id_player: 3,
       player_name: 'Candis',
       player_token: 'candis123',
       prac_letters_total_wrong: 3,
       prac_words_total_wrong: 6,
       group_name: 'group1' }
     ]
    }


    const newState = reducer(initialState.groups, input)
    t.deepEqual(newState.groups, expectedState)
  })
