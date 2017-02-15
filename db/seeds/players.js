
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('players').insert({
          id_player: 1,
          player_name: 'Annie',
          player_token: 'annie123',
          prac_sounds_total_wrong: '7',
          prac_words_total_wrong: '6',
          group_name: 'group1'
        }),
        knex('players').insert({
          id_player: 2,
          player_name: 'Bobbie',
          player_token: 'bobbie123',
          prac_sounds_total_wrong: '1',
          prac_words_total_wrong: '2',
          group_name: 'group1'
        }),
        knex('players').insert({
          id_player: 3,
          player_name: 'Candis',
          player_token: 'candis123',
          prac_sounds_total_wrong: '3',
          prac_words_total_wrong: '6',
          group_name: 'group1'
        }),
        knex('players').insert({
          id_player: 4,
          player_name: 'Jimmie',
          player_token: 'jimmie123',
          prac_sounds_total_wrong: '1',
          prac_words_total_wrong: '15',
          group_name: 'group2'
        }),
        knex('players').insert({
          id_player: 5,
          player_name: 'Phil',
          player_token: 'phil123',
          prac_sounds_total_wrong: '2',
          prac_words_total_wrong: '3',
          group_name: 'group2'
        })
      ])
    })
}
