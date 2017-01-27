const _ = require('lodash')

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

		countNightsByUser: function() {
			return knex('users_nights')
				.count('nights_id as totalNights')
				.select('user_id')
				.groupBy('user_id')
				.then((count) => {
					console.log(count)
					return count
				})
		}
	}
}
