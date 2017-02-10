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
