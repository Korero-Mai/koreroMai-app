const React = require('react')
const { connect } = require('react-redux')
const { link } = require('react-router')

const NightOut = (props) => {
	return (
		<div>
			<h1>Night Out </h1>
		</div>

	)
}

//module.exports = connect((state) => state)(NightOut)
module.exports = NightOut
