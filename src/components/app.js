const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')


const App = (props) => {

//If we want to make Userslist an admin page only fecthing data on load
//if props.location is UsersList
// fetch relevant data
// dispatch action (type: userlist payload: relevant data)
//in the action : define newstate filling with relevant data
// end action with rendering newstate --> userList.js
// behold the list

	console.log('props', props);

	return (

		<div>
			<AppBar title='Drink Splitter' />

			<Link to='/userprofile'>
				userprofile
			</Link>
			<br />
			<Link to='/userslist'>
				userslist
			</Link>
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

//module.exports = connect((state) => state)(App)
module.exports = App
