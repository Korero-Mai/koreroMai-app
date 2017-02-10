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
      })
    },
    findUserByEmail: function (table, email) {
      return knex(table)
      .select('*')
      .where('email', email.email)
      .then((selectedUser) => {
        return selectedUser[0]
      })
    }
	}
}
