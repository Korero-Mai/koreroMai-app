
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users_players', (t) => {
    t.increments('users_players_id');
    t.integer('user_id');
    t.integer('player_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_players');
};
