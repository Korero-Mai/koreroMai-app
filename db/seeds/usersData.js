
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, name: 'Lee Adama', email: 'leeadama@gmail.com', password: 'r341h45h45ur3m8',}),
        knex('users').insert({id: 2, name: 'Kara Thrace', email: 'kara@gmail.com', password: 'r341h45h45ur3m8',}),
        knex('users').insert({id: 3, name: 'Caprica Six', email: 'six@gmail.com', password: 'r341h45h45ur3m8',}),
        knex('users').insert({id: 4, name: 'William Adama', email: 'willa@gmail.com', password: 'r341h45h45ur3m8',}),
        knex('users').insert({id: 5, name: 'Gaius Balter', email: 'gbbalter@gmail.com', password: 'r341h45h45ur3m8',}),
        knex('users').insert({id: 6, name: 'Boomer', email: 'boomdawg@gmail.com', password: 'r341h45h45ur3m8',}),
        knex('users').insert({id: 7, name: 'Laura Roslin', email: 'lr@gmail.com', password: 'r341h45h45ur3m8',}),
        knex('users').insert({id: 8, name: 'Saul Tigh', email: 'saul@gmail.com', password: 'r341h45h45ur3m8',}),
      ]);
    });
};
