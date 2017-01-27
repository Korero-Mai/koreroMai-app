module.exports= function(knex) {
	return {

		findAll: function(table) {
			return knex(table).select()
		},

		addUser: function(table, input) {
			const formattedData = {
				name: input.userName
			}
			return knex(table)
			.insert(formattedData)
			.then(function(){
				return knex(table)
				.select()
			})
		},
	}
}
