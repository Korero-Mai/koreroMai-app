const React = require('react')
const { connect } = require('react-redux')
const { link } = require('react-router')

const WhosPaying = require('../whosPaying')

const NightOut = (props) => {
	const { currentNight } = props
	const { total } = currentNight
	return (
		<div className='welcome'>
			<h1>Night Out </h1>

			<div>
				TOTAL FOR NIGHT: ${total/100}
			</div><br />
			<WhosPaying {...props} />
			<div>
				ADD ANOTHER PERSON
			</div>
		</div>

	)
}

//module.exports = connect((state) => state)(NightOut)
module.exports = connect((state) => state)(NightOut)
