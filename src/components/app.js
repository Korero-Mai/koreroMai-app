const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

//components
const NewUserButton = require('./NewUserButton')



const App = (props) => {
	console.log('props', props);
	return (
		<div>

		<NewUserButton />
			<p> Hellllooooo WEKA!!! </p>

			<Link to='/userprofile'>
				userprofile
			</Link>
			{props.children}
		</div>
	)
}

//module.exports = connect((state) => state)(App)
module.exports = App
