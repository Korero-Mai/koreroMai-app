const React = require('react')
const { connect } = require('react-redux')
const { link } = require('react-router')
const AddUser = require('../users/add')

const Paying = require('../users/paying')

const NightOut = (props) => {
	const { currentNight } = props
	const { total } = currentNight
	return (
		<div className='welcome'>
			<h1>Night Out </h1>

			<div>
				TOTAL FOR NIGHT: ${total/100}
			</div><br />
			<Paying {...props} /><br/><br/>
			<div>
				<AddUser />
			</div><br/>
		</div>

	)
}

//module.exports = connect((state) => state)(NightOut)
module.exports = connect((state) => state)(NightOut)
