
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, name: 'Lee Adama'}),
        knex('users').insert({id: 2, name: 'Kara Thrace'}),
        knex('users').insert({id: 3, name: 'Caprica Six'}),
        knex('users').insert({id: 4, name: 'William Adama'}),
        knex('users').insert({id: 5, name: 'Gaius Balter'}),
        knex('users').insert({id: 6, name: 'Boomer'}),
        knex('users').insert({id: 7, name: 'Laura Roslin'}),
        knex('users').insert({id: 8, name: 'Saul Tigh'}),
      ]);
    });
};
