module.exports = function (knex) {

	return {
		findAll: function (table) {
		return knex(table).select()
  },
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
      console.log('here is the email from db',email);
      return knex(table)
      .select('*')
      .where('email', email)
      .then((selectedUser) => {
        return selectedUser
      })
    }
	}
}
