module.exports = function (knex) {

	return {
//users table methods
    addUser: function (table='users', newUserData) {
      return knex(table)
      .insert(newUserData)
      .then(function (id) {
        return knex('users')
        .select('username', 'id')
        .where({id: id[0]})
				.then(users => users)
      })
    },

    findUserByEmail: function (table, email) {
      return knex(table)
      .select('*')
      .where('email', email)
      .then((selectedUser) => {
        return selectedUser
      })
    },

//players table methods
		addPlayer: function(table, input){
			return this.checkIfPlayerExists(table, input)
				.then((bool)=>{
					if(bool){
						return []
					} else{
						return this.insertplayerData(table, input)
					}
				})
		},

		insertplayerData: function(table,input){
			const newData = input
			const userID = input.id
			delete newData.id
			return knex(table)
			.insert(newData)
			.then((ids)=>{
				return knex(table)
				.select('*')
				.where({id_player: ids[0]})
			})
			.then((player)=>{
				return this.linkPlayerToJoinTable(player[0].id_player, userID)
			})
			.then((ids)=>{
				return this.findUserByJoinTableID(ids[0])
			})
			.then(joinTableRow=>{
				return this.findPlayerByID(joinTableRow[0].player_id)
			})
			
		},

		linkPlayerToJoinTable:function(playerID,userID){
			return knex('users_players')
			.insert({user_id:userID , player_id:playerID})
			.select('*')
		},

		findUserByJoinTableID: function(id){
			return knex('users_players')
			.select('*')
			.where({users_players_id: id})
		},

		checkIfPlayerExists:function(table, newPlayer){
			return knex(table)
			.select('*')
			.where('player_token',newPlayer.player_token)
			.then((data)=>{
				return data.length ? true : false
			})
		},

		addScore: function(table, scoreData){
			return this.checkIfPlayerExists('players', scoreData)
				.then((bool)=>{
					if(!bool){
						return []
					} else{
						return this.getPlayerId(scoreData.player_token)
					}
				})
				.then((ids)=>{
						delete scoreData.player_token
						scoreData.player_id = ids[0].id_player
					return this.insertScoreData(table,scoreData)
				})
		 },

		 getPlayerId: function(token){
			 return knex('players')
			 .select('id_player')
			 .where('player_token', token)
		 },


		 insertScoreData: function(table,newData){
			 return knex(table)
			 .insert(newData)
			 .then((ids)=>{
				 return knex('players_gameScores')
				 .select('*')
				 .where({id_game: ids[0]})
			 })
		 },

		 findPlayersByGroup: function(table,input){
			 return knex(table)
			 .select('*')
			 .where({group_name: input.group_name})
		 },

		 findPlayersByUser: function(table,input){
			 return knex('users_players')
			 .join('users','users.id','=','user_id')
			 .join('players','players.id_player','=','player_id')
			 .select('*')
			 .where('users.id',input)
			 .then((all)=>{
				 return this.filterUsersPlayersData(all)
			 })
		 },

		 filterUsersPlayersData: function(input){
			 const filteredData ={user:{},players:[]}
			 input.map((student,i)=>{
				 filteredData.user.id = student.id
				 filteredData.user.username = student.username
				 filteredData.user.email = student.email
				 filteredData.user.password = student.password

				 const player = {}
				 player.id_player = student.id_player
				 player.player_name = student.player_name
				 player.player_token = student.player_token
				 player.prac_sounds_total_wrong = student.prac_sounds_total_wrong
				 player.prac_words_total_wrong = student.prac_words_total_wrong
				 player.group_name = student.group_name

				filteredData.players.push(player)
			 })
			 return filteredData
		 },

		 findSelectedPlayerData: function(table,token){
			 const formattedToken = {player_token:token}
			 return this.checkIfPlayerExists('players', formattedToken)
			 	.then((bool)=>{
			 		if(!bool){
			 			return []
			 		} else{
			 			return this.getPlayerId(token)
			 		}
			 	})
				.then((ids)=>{
					return this.findPlayerByID(ids[0])
				})
		 },

		 findPlayerByID: function(id){
			 return knex('players')
			 .select('*')
			 .where({id_player: id})
		 }
	}
}
