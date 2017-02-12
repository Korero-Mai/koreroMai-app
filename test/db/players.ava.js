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
   t.plan(1)
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

test('adds a new player score | adds a new score to the scoresTable', (t) => {
   t.plan(4)
 // arrange
const table = 'players_gameScores'
const player= {
  player_token:'bobbie123',
  prac_sounds_wrong: 4,
  prac_words_wrong: 5,
}

const expected = [{
  id_game: 9,
  player_id: 2,
  prac_sounds_wrong: 4,
  prac_sounds_timestamp:'',
  prac_words_wrong: 5,
  prac_words_timestamp: ''
}]
 //act

return db.addScore(table, player)
  .then(function(data){
//Assert
    t.is(data[0].id_game,expected[0].id_game,
      'adds score to table')
    t.is(data[0].player_id,expected[0].player_id,
      'adds score to table')
    t.is(data[0].prac_sounds_wrong,expected[0].prac_sounds_wrong,
      'adds score to table')
    t.is(data[0].prac_words_wrong,expected[0].prac_words_wrong,
      'adds score to table')
   })
})

test('post players by roup| retrieves players by group', (t) => {
   t.plan(3)
 // arrange
const table = 'players'
const group= 'group2'

const expected = {
  l: 2,
  player1: 'Jimmie',
  player2: 'Phil'
}

 //act

return db.findPlayersByGroup(table, group)
  .then(function(data){
//Assert
    t.is(data.length, expected.l,'findsPlayersByGroup')
    t.is(data[0].player_name, expected.player1,'findsPlayersByGroup')
    t.is(data[1].player_name, expected.player2,'findsPlayersByGroup')
   })
})

test('post player data by player_token| retrieves player data by player_token', (t) => {
   t.plan(1)
 // arrange
const table = 'players_gameScores'
const player_token= 'annie123'

const expected = 2

 //act

return db.findSelectedPlayerData(table, player_token)
  .then(function(data){
//Assert
    t.is(data.length, expected,'finds all the players gameScores')
   })
})
