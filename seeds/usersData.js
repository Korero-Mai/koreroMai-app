
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, name: 'lilly'}),
        knex('users').insert({id: 2, name: 'james'}),
        knex('users').insert({id: 3, name: 'ana'}),
      ]);
    });
};
