
exports.up = function(knex, Promise) {
  return knex.schema.table('players', (t) => {
    t.dropColumn('prac_sounds_total_wrong');
    t.integer('prac_letters_total_wrong')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('players', (t) => {
    t.dropColumn ('prac_letters_total_wrong')
  })
};
