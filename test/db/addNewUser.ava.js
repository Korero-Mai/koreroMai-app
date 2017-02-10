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
//Assert
    t.is(data[0].id, 4 ,'add user to db')
    t.is(data[0].username, 'Anna' ,'add user to db')
   })
})

test('Select user by email | it should select an user by the email', (t) => {
   t.plan(4)
 // arrange
const tableName = 'users'
const email = {email:'matt@.com'}
const expected = {id: 1, username: 'Mathieu', email: 'matt@.com', password: '1234'}
 //act
return db.findUserByEmail('users', email)
  .then(function(data){

//Assert
    t.is(data.id, expected.id ,'find an user by email')
    t.is(data.username, expected.username ,'find an user by email')
    t.is(data.email, expected.email ,'find an user by email')
    t.is(data.password, expected.password ,'find an user by email')

   })
})
