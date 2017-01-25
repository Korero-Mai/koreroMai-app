const React = require('react')
const { connect } = require('react-redux')
const { link } = require('react-router')

const NewUser = (props) => {

	return (
		<div>
			<p> New User component </p>
		</div>
	)
}

module.exports = connect((state) => state)(NewUser)
