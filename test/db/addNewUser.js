const test = require('ava')

// instantiate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)

// migrate the latest database tables
test.beforeEach(() => {
  console.log('migrating....')
  return testKnex.migrate.latest()
    .then(() => {
      console.log('seeds....')
      return testKnex.seed.run()
    })
})

// rollback to the original state of the database
// test.afterEach.always(() => {
//   return testKnex.migrate.rollback()
// })

test('Add new user | it should add a new user into the data base', (t) => {
   t.plan(2)
 // arrange
const tableName = 'users'
const name = {username:'Anna', email:'', password:''}
const expected = []
 //act
return db.addUser('users', name)
  .then(function(data){
    // console.log('db.addUser ', data);
//Assert
    t.is(data[0].id, 4 ,'add user to db')
    t.is(data[0].username, 'Anna' ,'add user to db')
   })
})

test('Select user by email | it should select an user by the email', (t) => {
   t.plan(4)
 // arrange
const tableName = 'users'
const email = 'anna@anna.com'
const expected = [{id: 1, username: 'anna', email: 'anna@anna.com', password: '$2a$10$st5Yp1EDwl/2R0TqRjrqmuP8AE32qX/beKY2y6eQwgcHsFGZRSk1O'}]
 //act
return db.findUserByEmail('users', email)
  .then(function(data){
        // console.log('db.findUserByEmail ', data);
//Assert
    t.is(data[0].id, expected[0].id ,'find an user by email')
    t.is(data[0].username, expected[0].username ,'find an user by email')
    t.is(data[0].email, expected[0].email ,'find an user by email')
    t.is(data[0].password, expected[0].password ,'find an user by email')

   })
})


test('wrong email | it should return an empty array', (t) => {
   t.plan(1)
 // arrange
const tableName = 'users'
const email = 'meghana@anna.com'
const expected = []
 //act
return db.findUserByEmail('users', email)
  .then(function(data){
      // console.log('db.findUserByEmail ', data);
//Assert
    t.is(data.length, 0 ,'find an user by email')
   })
})
