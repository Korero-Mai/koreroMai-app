
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users_players', (t) => {
    t.increments('users_players_id');
    t.string('user_id');
    t.string('player_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_players');
};
