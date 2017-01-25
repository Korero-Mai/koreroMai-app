const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

//components
const NewUser = require('./newUser')



const App = (props) => {
	console.log('props', props);
	return (
		<div>

			<p> Hellllooooo WEKA!!! </p>
			<Link to="/newUser" >
				<button>New User</button>

			<Link to='/userprofile'>
				userprofile
			</Link>
			{props.children}
		</div>
	)
}

//module.exports = connect((state) => state)(App)
module.exports = App
