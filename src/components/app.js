const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')


const App = (props) => {
	console.log('props', props);



	return (

		<div>
			<img src="http://www.kofusion.com/wp-content/uploads/2009/02/featured_drinks.jpg" width='100px'/>
			<h1>Drink Splitter</h1>
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

module.exports = connect((state) => state)(App)
