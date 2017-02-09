exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (t) => {
    t.increments('id');
    t.string('username');
  })
};

exports.down = function(knex, Promise) {
  return knex.dropTableIfExists('users');
};
