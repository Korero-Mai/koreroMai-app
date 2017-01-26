const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { AppBar, MenuItem, Drawer } = require('material-ui')



const App = (props) => {
	console.log('props', props);

	const menuItems = [
		{route: 'newUser', text: 'New User'},
		{route, 'nightsout', text: 'View night out'}
	]

	return (

		<div>
			<AppBar title='Drink Splitter'>
				<Drawer
					docked={false}
					MenuItem={menuItems} />
			</AppBar>

			<Link to='/userprofile'>
				userprofile
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
