
exports.up = function(knex, Promise) {
  return knex.schema.createTable('nights', function (t){
    t.increments();
    t.integer('total');
    t.integer('paid_by');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('nights')
};
