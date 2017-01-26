const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { AppBar } = require('material-ui')



const App = (props) => {

//if props.location is UsersList
// fetch relevant data
// dispatch action (type: userlist payload: relevant data)
//in the action : define newstate filling with relevant data
// end action with rendering newstate --> usreList.js
// vehold the list

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

			{props.children}
		</div>
	)
}

//module.exports = connect((state) => state)(App)
module.exports = App

// <mui.LeftNav
//     ref='leftNav'
//     menuItems={menuItems}
// 	  docked={false} />
// <mui.AppBar
//     title='Default'
//     onLeftIconButtonTouchTap={this._toggleNav} />
