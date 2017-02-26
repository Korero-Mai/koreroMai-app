
exports.up = function(knex, Promise) {
  return knex.schema.table('players_gameScores', (t) => {
    t.dropColumn('prac_sounds_wrong');
    t.dropColumn('prac_sounds_timestamp')
    t.integer('prac_letters_wrong')
    t.integer('prac_letters_timestamp')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('players_gameScores', (t) => {
    t.dropColumn ('prac_letters_wrong')
    t.dropColumn ('prac_letters_timestamp')
  })
};
