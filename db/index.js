module.exports = function (knex) {

	return {
//users table methods
    addUser: function (table='users', newUserData) {
      return knex(table)
      .insert(newUserData)
      .then((ids)=>{
				return this.findUserById(ids[0])
      })
    },

    findUserByEmail: function (email) {
      return knex('users')
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
			.then(playerData=>{
				return this.findUserById(userID)
				.then((user)=>{
					return this.addUserToPlayerData(user[0],playerData[0])
				})
			})
		},

		addUserToPlayerData: function(teacher,student){
			const filteredData = {
				user: {
					id:teacher.id,
					username:teacher.username,
					email:teacher.email
				},
				player:student
			}
			return filteredData
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

		addScore: function(scoreData){
			const scores = {
				prac_sounds_wrong: scoreData.wrongSounds,
				prac_words_wrong: scoreData.wrongWords
			}
			return this.checkIfPlayerExists('players', scoreData)
				.then((bool)=>{
					if(!bool){
						return []
					} else{
						return this.getPlayerId(scoreData.player_token)
					}
				})
				.then((ids)=>{
						scores.player_id = ids[0].id_player
					return this.insertScoreData(scores)
				})
				.then((playerScore)=>{
					return this.updatesTotalScores(playerScore[0].player_id)
				})
		 },

		 getPlayerId: function(token){
			 return knex('players')
			 .select('id_player')
			 .where('player_token', token)
		 },


		 insertScoreData: function(newData){
			 return knex('players_gameScores')
			 .insert(newData)
			 .then((ids)=>{
				 return knex('players_gameScores')
				 .select('*')
				 .where('players_gameScores.id_game','=', ids[0])
			 })
		 },

		 updatesTotalScores: function(id){
			 return knex('players_gameScores')
			 .where('player_id',id)
			 .select('*')
			 .then((scores)=>{
				 const wrongSounds = this.calcTotalScore(scores,'prac_sounds_wrong')
				 const wrongWords = this.calcTotalScore(scores,'prac_words_wrong')

				 const newScores = {
					 prac_sounds_total_wrong: wrongSounds,
					 prac_words_total_wrong: wrongWords
				 }
				 return {
					 id: scores[0].player_id,
					 newScores
				 }
			 })
			 .then((playerScore)=>{
				 return this.changePlayerInfo(playerScore.id,playerScore.newScores)
			 })
			 .then(()=>{
				 return this.findPlayerByID(id)
			 })
		 },

		 calcTotalScore: function(scores,colName){
			 return scores.map((score)=>{
				 return score[colName]
			 }).reduce((total,num)=>{
				 return total+num
			 },0)
		 },

		 changePlayerInfo: function(id,newScore){
			 console.log('updatedPlayer',id,newScore);
			 return knex('players')
			 .where('id_player','=', id)
			 .update(newScore)
		 },

		 findPlayersByUser: function(table, input){
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
			 const filteredData ={user:{},players:[],groups:{}}
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

			 filteredData.groups = this.filterGroups(filteredData.players)
			 delete filteredData.players
			 return filteredData
		 },

		 filterGroups: function(arr){
			 const keys = arr.map((item)=>{
				 return item.group_name
			 })
			 var groupNames = [];
			 for(var i = 0; i < keys.length; i++){
				 if (groupNames.indexOf(keys[i]) == -1) groupNames.push(keys[i]);
			 }
			 const groups={}
			 for(var x =0; x<groupNames.length;x++){
				 groups[groupNames[x]]=[]
			 }

			 for(var j=0;j<groupNames.length;j++){
				 for(var k=0;k<arr.length;k++){
					 if(groupNames[j]===arr[k].group_name){
						 groups[groupNames[j]].push(arr[k])
					 }
				 }
			 }
			 return groups
		},

		 findSelectedPlayerData: function(table,token){
			 const formattedToken = {player_token:token}
			 return this.checkIfPlayerExists('players', formattedToken)
			 	.then((bool)=>{
			 		if(!bool){ return [] }
			 		return this.getPlayerId(token)
			 	})
				.then((ids)=>{
					return this.findPlayerByID(ids[0].id_player)
				})
		 },

		 findPlayerByID: function(id){
			 return knex('players')
			 .select('*')
			 .where({id_player: id})
		 },

		 findPlayerByToken: function(token){
			 return knex('players')
			 .select('*')
			 .where({player_token: token})
		 },

		 findUserById: function(id){
			 return knex('users')
			 .select('*')
			 .where({id: id})
		 },

     getScoreData: function(playerId){
       return knex('players_gameScores')
       .select('*')
       .where({player_id: playerId})
     }
	}
}
