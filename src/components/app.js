const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { AppBar } = require('material-ui')



const App = (props) => {
	console.log('props', props);
	return (

		<div>
			<AppBar title='Drink Splitter' />

			<Link to='/userprofile'>
				userprofile
			</Link>

			{props.children}
		</div>
	)
}

module.exports = connect((state) => state)(App)

// <mui.LeftNav
//     ref='leftNav'
//     menuItems={menuItems}
// 	  docked={false} />
// <mui.AppBar
//     title='Default'
//     onLeftIconButtonTouchTap={this._toggleNav} />
