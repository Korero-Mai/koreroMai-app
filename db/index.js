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
			return knex(table)
			.insert(newPlayer)
			.then((ids)=>{
				return knex(table)
        .select('id_player','player_name','group_name')
				.where({id_player: ids[0]})
			})
		},

		checkIfPlayerExists:function(table, newPlayer){
			return knex(table)
			.select('player_token',newPlayer.player_token)
			.then((data)=>{
				console.log('data checkIfPlayerExists');
			})
		}
	}
}
