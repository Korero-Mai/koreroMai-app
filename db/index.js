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
		addPlayer: function(table, newPlayer){
			return this.checkIfPlayerExists(table, newPlayer)
				.then((bool)=>{
					if(bool){
						return []
					} else{
						return this.insertData(table, newPlayer)
					}
				})
		},

		insertData: function(table,newData){
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
		}
	}
}
