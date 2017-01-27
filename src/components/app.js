const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const request = require('superagent')

// components
const NewUserLink = require('./NewUserLink')
const App = (props) => {
	const location = props.location.pathname
	const {userName, dispatch} = props

	return (
		<div>
			<div id='logoHeader'>
				<h1>Drink Splitter</h1>
				<img src="http://www.kofusion.com/wp-content/uploads/2009/02/featured_drinks.jpg" width='100px'/>
			</div>
			<div className="navBar">
				<nav>
					<ul className="navList">
						<li className="navListItem"><Link to="/">Home</Link></li>
						<li className="navListItem"><Link to="/nightout">Current Night Out</Link></li>
						<li className="navListItem"><Link to="/newnightout">New Night Out</Link></li>
						<li id='logout' className="navListItem" onClick={() => props.dispatch({type:'LOGOUT'})}>Log Out</li>
					</ul>
				</nav>
			</div>
			{props.children}
		</div>
	)

}

module.exports = connect((state) => state)(App)
