
module.exports = function (knex) {

	return {
		findAll: function (table) {
		return knex(table).select()
		},

		addUser: function (table, input) {
			const formattedData = {
				name: input.userName,
				password: input.password,
				email: input.email
			}
			return knex(table)
			.insert(formattedData)
			.then(function(ids) {
				return knex(table)
				.select('name', 'id')
				.where ({id: ids[0]})
			})
		},

		countNightsByUser: function() {
			return knex('users_nights')
				.count('nights_id as totalNights')
				.select('user_id')
				.groupBy('user_id')
				.then((count) => {
					console.log(count)
					return count
				})
      },

		findUserByEmail: function (email) {
			return knex('users')
				.select()
				.where('email', email)
		}
	}
}
