const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const NewUserButton = (props) => {

	return (
		<div>
    <Link to="/newUser" >
      <button>New User</button>
    </Link>
		</div>
	)
}

module.exports = connect((state) => state)(NewUserButton)
