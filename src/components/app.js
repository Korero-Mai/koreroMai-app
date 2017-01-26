const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')


//components
const NewUserLink = require('./NewUserLink')

const App = (props) => {
	console.log('props', props);



	return (

		<div>
			<img src="http://www.kofusion.com/wp-content/uploads/2009/02/featured_drinks.jpg" width='100px'/>
			<h1>Drink Splitter</h1>
			<nav>
				<ul className="navList">
					<li className="navListItem"><Link to="/">Home</Link></li>
					<li className="navListItem"><Link to="/userprofile">Your Profile</Link></li>
					<li className="navListItem"><Link to="/nightout">Current Night Out</Link></li>
          <li className="navListItem"><Link to="/newUser">New User</Link></li>
				</ul>
			</nav>
			<h3>
				Kia ora! Welcome to Drink Splitter - the app to help you figure out which one of your friends owes you for the drinks on your night out.
			</h3>

			<p>Disclaimer: Drink Splitter takes no responsibility for unpaid bills or dodgy friends.</p>
			
			{props.children}
		</div>
	)
}

module.exports = connect((state) => state)(App)
