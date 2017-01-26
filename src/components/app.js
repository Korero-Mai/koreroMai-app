const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')


const App = (props) => {
	console.log('props', props);



	return (

		<div>

			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/userprofile">Your Profile</Link></li>
					<li><Link to="/nightout">Current Night Out</Link></li>
				</ul>
			</nav>

			{props.children}
		</div>
	)
}

//module.exports = connect((state) => state)(App)
module.exports = App
