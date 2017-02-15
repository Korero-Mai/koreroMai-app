
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players_gameScores').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('players_gameScores').insert({
          id_game: 1,
          player_id: 1,
          prac_sounds_wrong: 3,
          prac_sounds_timestamp:'',
          prac_words_wrong: 6,
          prac_words_timestamp: ''
        }),
        knex('players_gameScores').insert({
          id_game: 2,
          player_id: 2,
          prac_sounds_wrong: 4,
          prac_sounds_timestamp:'',
          prac_words_wrong: 5,
          prac_words_timestamp: ''
        }),
        knex('players_gameScores').insert({
          id_game: 3,
          player_id: 3,
          prac_sounds_wrong: 3,
          prac_sounds_timestamp:'',
          prac_words_wrong: 8,
          prac_words_timestamp: ''
        }),
        knex('players_gameScores').insert({
          id_game: 4,
          player_id: 4,
          prac_sounds_wrong: 6,
          prac_sounds_timestamp:'',
          prac_words_wrong: 12,
          prac_words_timestamp: ''
        }),
        knex('players_gameScores').insert({
          id_game: 5,
          player_id: 5,
          prac_sounds_wrong: 3,
          prac_sounds_timestamp:'',
          prac_words_wrong: 5,
          prac_words_timestamp: ''
        }),
        knex('players_gameScores').insert({
          id_game: 6,
          player_id: 5,
          prac_sounds_wrong: 3,
          prac_sounds_timestamp:'',
          prac_words_wrong: 5,
          prac_words_timestamp: ''
        }),
        knex('players_gameScores').insert({
          id_game: 7,
          player_id: 1,
          prac_sounds_wrong: 6,
          prac_sounds_timestamp:'',
          prac_words_wrong: 9,
          prac_words_timestamp: ''
        }),
        knex('players_gameScores').insert({
          id_game: 8,
          player_id: 5,
          prac_sounds_wrong: 1,
          prac_sounds_timestamp:'',
          prac_words_wrong: 2,
          prac_words_timestamp: ''
        })
      ])
    })
}
