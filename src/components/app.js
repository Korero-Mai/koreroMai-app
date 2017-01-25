const React = require('react')
const { connect } = require('react-redux')
const { link } = require('react-router')

const App = (props) => {

	return (
		<div>
			<p> Hellllooooo WEKA!!! </p>
		</div>
	)
}

module.exports = connect((state) => state)(App)
