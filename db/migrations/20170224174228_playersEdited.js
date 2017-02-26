
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('players', (t) => {
    t.increments('id_player')
    t.string('player_name')
    t.string('player_token')
    t.integer('prac_letters_total_wrong')
    t.integer('prac_words_total_wrong')
    t.string('group_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('players');
};
