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
        console.log(selectedUser)
        return selectedUser
      })
    },

//players table methods
		addPlayer: function(table, newPlayer){
			return this.checkIfPlayerExists(table, newPlayer)
				.then((bool)=>{
					if(bool){
						return []
					} else{
						return this.insertplayerData(table, newPlayer)
					}
				})
		},

		insertplayerData: function(table,newData){
			return knex(table)
			.insert(newData)
			.then((ids)=>{
				return knex(table)
				.select('*')
				.where({id_player: ids[0]})
			})
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

		 findPlayersByGroup: function(table,groupName){
			 return knex(table)
			 .select('*')
			 .where({group_name: groupName})
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
					return knex(table)
					.select('*')
					.where({player_id: ids[0].id_player})
				})
		 }
	}
}
