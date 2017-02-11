
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_players').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users_players').insert({
          users_players_id: 1,
          user_id: 1,
          player_id: 1
        }),
        knex('users_players').insert({
          users_players_id: 2,
          user_id: 1,
          player_id: 2
        }),
        knex('users_players').insert({
          users_players_id: 3,
          user_id: 1,
          player_id: 3
        }),
        knex('users_players').insert({
          users_players_id: 4,
          user_id: 2,
          player_id: 4
        }),
        knex('users_players').insert({
          users_players_id: 5,
          user_id: 2,
          player_id: 5
        }),
        knex('users_players').insert({
          users_players_id: 6,
          user_id: 3,
          player_id: 1
        }),
        knex('users_players').insert({
          users_players_id: 7,
          user_id: 3,
          player_id: 2
        }),
        knex('users_players').insert({
          users_players_id: 8,
          user_id: 3,
          player_id: 3
        })

      ]);
    });
};
