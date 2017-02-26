
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('players').insert({
          id_player: 1,
          player_name: 'Aroha',
          player_token: 'aroha123',
          prac_letters_total_wrong: '7',
          prac_words_total_wrong: '6',
          group_name: 'Year 1'
        }),
        knex('players').insert({
          id_player: 2,
          player_name: 'Michael',
          player_token: 'michael123',
          prac_letters_total_wrong: '1',
          prac_words_total_wrong: '2',
          group_name: 'Year 1'
        }),
        knex('players').insert({
          id_player: 3,
          player_name: 'Rangimarie',
          player_token: 'rangimarie123',
          prac_letters_total_wrong: '3',
          prac_words_total_wrong: '6',
          group_name: 'Year 1'
        }),
        knex('players').insert({
          id_player: 4,
          player_name: 'Aaliya',
          player_token: 'aaliya123',
          prac_letters_total_wrong: '1',
          prac_words_total_wrong: '15',
          group_name: 'Year 2'
        }),
        knex('players').insert({
          id_player: 5,
          player_name: 'Wiremu',
          player_token: 'wiremu123',
          prac_letters_total_wrong: '2',
          prac_words_total_wrong: '3',
          group_name: 'Year 2'
        })
      ])
    })
}
