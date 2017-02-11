
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, username: 'anna', email:'anna@anna.com', password:
        '$2a$10$st5Yp1EDwl/2R0TqRjrqmuP8AE32qX/beKY2y6eQwgcHsFGZRSk1O'}),
        knex('users').insert({id: 2, username: 'Misha Saunders', email:'mishca@mischa.com', password:'$2a$10$oJSLeYfo1sdTCQiAkkiipOj2gVnXC6TMvI/Fu3W/fuj5Kp1rHtfRO'}),
        knex('users').insert({id: 3, username: 'Lucas Tonini', email:'lucas@lucas.com', password:'$2a$10$1xc0QOWbNuqVam.YKVuTRezium5PlHOACOJkeBSu3kKEbmlLGTBmm'})
      ]);
    });
};
