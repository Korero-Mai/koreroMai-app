const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const App = (props) => {
	return (
		<div>
			<div className="navBar">
				<nav>
						<Link to="/"><button>Home</button></Link>
						<Link to="/users"><button>Users</button></Link>
				</nav>
			</div>
			<br />
			<br />
			{props.children}
		</div>
	)
}

module.exports = connect((state) => state)(App)
