
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_nights').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users_nights').insert({id: 1, user_id: 1, nights_id: 1, amount_paid: 20.00}),
        knex('users_nights').insert({id: 2, user_id: 2, nights_id: 1, amount_paid: 20.00}),
        knex('users_nights').insert({id: 3, user_id: 3, nights_id: 1, amount_paid: 20.00}),
      ]);
    });
};
