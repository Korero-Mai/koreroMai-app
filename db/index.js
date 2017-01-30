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
			console.log(input)
			.insert(formattedData)
			.then(function() {
				return knex(table)
				.select()
				.where ({name: input.name})
			})
		}
	}
}
