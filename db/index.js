module.exports= function(knex) {
	return {

		findAll: function(table) {
			return knex(table).select()
		},


		addUser: function(table, input) {
			return knex(table)
			.insert(input)
			.then(function(){
				return knex(table)
				.select()
				.where({name: input.name})
			})
		},

		findWhereNameIs: function(table, input) {
			return knex(table)
				.select()
				.where({name: input})
		}
	}
}
