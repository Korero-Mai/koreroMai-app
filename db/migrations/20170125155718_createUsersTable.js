
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (t) {
    t.increments();
    t.string('name');
    t.string('email');
    t.string('password');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
