
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, username: 'Mathieu'}),
        knex('users').insert({id: 2, username: 'Janie'}),
        knex('users').insert({id: 3, username: 'Rodrigo'})
      ]);
    });
};
