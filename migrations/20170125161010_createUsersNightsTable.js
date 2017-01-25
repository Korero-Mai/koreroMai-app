
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_nights', function (t){
    t.increments();
    t.integer('user_id');
    t.integer('nights_id');
    t.integer('amount_paid');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_nights')
};
