
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('players_gameScores', (t) => {
    t.increments('id_game')
    t.integer('player_id')
    t.integer('prac_sounds_wrong')
    t.timestamp('prac_sounds_timestamp').defaultTo(knex.fn.now())
    t.integer('prac_words_wrong')
    t.timestamp('prac_words_timestamp').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('players_gameScores')
}
