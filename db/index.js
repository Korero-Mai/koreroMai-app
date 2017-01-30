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
				console.log('id', ids);
				return knex(table)
				.select('name', 'id')
				.where ({id: ids[0]})
			})
		},
		find: function (table, input) {
			
		}
	}
}
