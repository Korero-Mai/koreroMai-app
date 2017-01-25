const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const App = (props) => {

	return (
		<div>
			<p> Hellllooooo WEKA!!! </p>
			<Link to='/userprofile'>
				userprofile
			</Link>
			{props.children}
		</div>
	)
}

module.exports = connect((state) => state)(App)
