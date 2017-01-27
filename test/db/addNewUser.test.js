// const test = require('tape')
//
// // instantiate test database and routes
// const testKnex = require('knex')(require('../../knexfile').test)
// const db = require('../../db')(testKnex)
//
//
//
// test('Add new user | it should add a new user into the data base', (t) => {
//   testKnex.migrate.latest()
//   testKnex.seed.run()
//    // arrange
//   const tableName = 'users'
//
//   const Name = {userName:'Anna'}
//
//   const expected = []
//
// // const input = {
// //   email: 'lalala',
// //   password: 'kakakak',
// //   userName: 'Anna'
// // }
//
//  //act
//    return db.addUser('users', Name)
//     .then(function(data){
//       t.equal(data.length, 4 ,'add user to db')
//    })
//    testKnex.migrate.rollback()
//    t.end()
// })
