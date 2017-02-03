module.exports = function (knex) {

	return {
		findAll: function (table) {
		return knex(table).select()
		}
	}
}
