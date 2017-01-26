module.exports = {
	userName: 'TexMix',
	users: {
	},
	amountOwed: 4635,
	amountOwing: 1050,
	showingPastNights: false,
	showingRegisterForm: false,
	pastNights: [
		{
			nightId: 641,
			participants: ['Jim', 'Tim'],
			amountOwing: 550
		},
		{
			nightId: 651,
			participants: ['Kim', 'Tim'],
			amountOwing: 500
		}
	],
	currentNight: {
		users: {
			1: {id:1, name: 'Lucas', paying: false},
			2: {id:2, name: 'Meghan', paying: false},
			3: {id:3, name: 'Alice', paying: false}
		},
		personPaying: null,
		total: 4655
	},

	userNames : {
		1: {id:1, name: 'Lucas', going: false},
		2: {id:2, name: 'Meghan', going: false},
		3: {id:3, name: 'Alice', going: false}
	}
}
