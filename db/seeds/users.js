
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, username: 'Mathieu', email:'matt@.com', password:'1234'}),
        knex('users').insert({id: 2, username: 'Janie', email:'janie@.com', password:'1111'}),
        knex('users').insert({id: 3, username: 'Rodrigo', email:'rod@.com', password:'2222'})
      ]);
    });
};
