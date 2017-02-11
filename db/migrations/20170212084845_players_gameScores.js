
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('players_gameScores', (t) => {
    t.increments('id_game');
    t.string('player_id');
    t.string('prac_sounds_wrong');
    t.timestamp('prac_sounds_timestamp').defaultTo(knex.fn.now())
    t.string('prac_words_wrong');
    t.timestamp('prac_words_timestamp').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('players_gameScores');
};
