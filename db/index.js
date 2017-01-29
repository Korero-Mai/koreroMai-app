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
			console.log('formattedData', formattedData)
			return knex(table)
			.insert(formattedData)
			.then(function() {
				return knex(table)
				.select()
			})
		}
	}
}
