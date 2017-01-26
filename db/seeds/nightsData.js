
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('nights').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('nights').insert({id: 1, total: 60.00, paid_by: 1}),
        knex('nights').insert({id: 2, total: 20.00, paid_by: 2}),
        knex('nights').insert({id: 3, total: 50.00, paid_by: 1}),
      ]);
    });
};
