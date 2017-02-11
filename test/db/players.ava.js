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

test('Add new player | it should add a new player to the players table', (t) => {
   t.plan(3)
 // arrange
const table = 'players'
const newPlayer = {
  player_name: 'Joyce',
  player_token:'joyce123',
  group_name:'group2'
}

const expected = [{id:6,player_name:"Joyce",group_name:"group2"}]
 //act

return db.addPlayer(table, newPlayer)
  .then(function(data){
//Assert
    t.is(data[0].id_player, expected[0].id ,
      'adds player to db')
    t.is(data[0].player_name, expected[0].player_name ,
      'adds player to db')
    t.is(data[0].group_name, expected[0].group_name ,
      'adds player to db')
   })
})

test('checks for existing player | checks for an existing player by token and returns an empty array if another player is found', (t) => {
   t.plan(3)
 // arrange
const table = 'players'
const newPlayer = {
  player_name: 'Bobb',
  player_token:'bobbie123',
  group_name:'group2'
}

const expected = []
 //act

return db.addPlayer(table, newPlayer)
  .then(function(data){
//Assert
    t.falsy(data[0],'adds player to db')

   })
})
