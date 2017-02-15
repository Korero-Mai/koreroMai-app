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

test('Delete player from the join table users_players', (t) => {
   t.plan(1)
 // arrange
const id_player = 4
const id = 2

 //act

return db.deletePlayerFromJoin(id_player, id)
  .then(function(data){
    console.log('deletePlayerFromJoin data', data);
//Assert
    t.deepEqual(data.groups.group2.length, 1,
      'deletes player from db')
    })
})




test('Delete player | it should delete a player from the players table', (t) => {
   t.plan(1)
 // arrange
const id_player = 3
const id = 1

const expected = []
 //act

return db.deletePlayer(id_player, id)
  .then(function(data){
//Assert
    t.deepEqual(data, expected,
      'deletes player from db')
    })
})


test.only('Add new player and link to user| it should add a new player to the players table', (t) => {
   t.plan(5)
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
  player_token:"joyce123",
  player_name:"Joyce",
  group_name:"group2"
}]
 //act

return db.addPlayer(table, input)
  .then(function(data){
      // console.log('db.addPlayer ', data);
//Assert
    t.is(data.players[0].id_player, expected[0].player_id ,
      'adds player to db')
    t.is(data.players[0].player_name, expected[0].player_name ,
      'adds player to db')
    t.is(data.players[0].group_name, expected[0].group_name ,
      'adds player to db')
    t.is(data.players[0].player_token, expected[0].player_token ,
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
   t.plan(3)
 // arrange

const input= {
  player_token:'bobbie123',
  wrongSounds: 4,
  wrongWords: 5,
}

const expected = [ { id_player: 2,
    player_name: 'Bobbie',
    player_token: 'bobbie123',
    prac_sounds_total_wrong: 8,
    prac_words_total_wrong: 10,
    group_name: 'group1'
  } ]

 //act

return db.addScore(input)
  .then(function(data){
        console.log('db.addScore ', data);
//Assert
    t.is(data[0].id_player,expected[0].id_player,
      'adds score to table')
    t.is(data[0].prac_sounds_total_wrong,expected[0].prac_sounds_total_wrong,
      'adds score to table')
    t.is(data[0].prac_words_total_wrong,expected[0].prac_words_total_wrong,
      'adds score to table')
   })
})

test('updates the total score of a player | updates the total score of a player', (t) => {
   t.plan(1)
 // arrange

const player_id = 5

const expected = [{
  id_player: 2,
  player_name: 'Bobbie'

}]
 //act

return db.updatesTotalScores(player_id)
  .then(function(data){
      // console.log('db.updatesTotalScores ', data);
//Assert
    t.is(data[0].id_game,expected[0].id_game,
      'adds score to table')

   })
})

test('change player info | updates the total score of a player', (t) => {
   t.plan(3)
 // arrange

const player_id = 5
const newData = {prac_sounds_total_wrong: 12,
prac_words_total_wrong: 6}

const expected = [{
  id_player: 2,
  player_name: 'Bobbie'

}]
 //act

return db.changePlayerInfo(player_id, newData)
  .then(function(data){
    return testKnex('players')
    .where('id_player',player_id)
    .first()
  })
  .then((data)=>{
    // console.log('db.changePlayerInfo ', data);

    t.is(data.id_player,5,'adds score to table')
    t.is(data.prac_sounds_total_wrong,12,'adds score to table')
    t.is(data.prac_words_total_wrong,6,'adds score to table')
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
