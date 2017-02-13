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

test('Add new player and link to user| it should add a new player to the players table', (t) => {
   t.plan(4)
 // arrange
const table = 'players'
const input = {
  id: 3,
  player_name: 'Joyce',
  player_token:'joyce123',
  group_name:'group2'
}

const expected = [{
  id:3,
  player_id:6,
  player_name:"Joyce",
  group_name:"group2"
}]
 //act

return db.addPlayer(table, input)
  .then(function(data){
      // console.log('db.addPlayer ', data);
//Assert
    t.is(data.player.id_player, expected[0].player_id ,
      'adds player to db')
    t.is(data.player.player_name, expected[0].player_name ,
      'adds player to db')
    t.is(data.player.group_name, expected[0].group_name ,
      'adds player to db')
    t.is(data.user.id, expected[0].id,
      'adds player to db')
   })
})

test('checks for existing player | checks for an existing player by token and returns an empty array if another player is found', (t) => {
   t.plan(1)
 // arrange
const table = 'players'
const input = {
  player_name: 'Bobb',
  player_token:'bobbie123',
  group_name:'group2'
}

const expected = []
 //act

return db.addPlayer(table, input)
  .then(function(data){
      // console.log('db.addPlayer ', data);
//Assert
    t.falsy(data[0],'adds player to db')
   })
})

test('adds a new player score | adds a new score to the scoresTable', (t) => {
   t.plan(4)
 // arrange
const table = 'players_gameScores'
const input= {
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

return db.addScore(table, input)
  .then(function(data){
      // console.log('db.addScore ', data);
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

test('find players by user_id| retrieves players by group', (t) => {
   t.plan(3)
 // arrange
const table = 'players'
const input= 1

const expected = {
  id: 1,
  player1: 'Annie',
  player2: 'Bobbie'
}

 //act
return db.findPlayersByUser(table, input)
  .then(function(data){
    // console.log('db.findPlayersByUser ', data.groups);
//Assert
    t.is(data.user.id, expected.id,'findsPlayersByGroup')
    t.is(data.groups['group1'][0].player_name, expected.player1,'findsPlayersByGroup')
    t.is(data.groups['group1'][1].player_name, expected.player2,'findsPlayersByGroup')
   })
})

test('post player data by player_token| retrieves player data by player_token', (t) => {
   t.plan(1)
 // arrange
const table = 'players_gameScores'
const input= 'annie123'

const expected = 1

 //act

return db.findSelectedPlayerData(table, input)
  .then(function(data){
//Assert
    t.is(data.length, expected,'finds all the players gameScores')
   })
})
