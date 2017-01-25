const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const App = (props) => {
	console.log('props', props);
	return (
		<div>
			<p> Hellllooooo WEKA!!! </p>
			{props.childern}
		</div>
	)
}

//module.exports = connect((state) => state)(App)
module.exports = App
