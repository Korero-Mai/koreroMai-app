const React = require('react')
const { connect } = require('react-redux')
const { link } = require('react-router')
const _ = require('lodash')

const UsersList = (props) => {
  const users = props.users
	return (
		<div>
			<h1>All the Users</h1>
      <ul>
        {_.map(users, (user) => {
            return <li key={user.id}>ID {user.id}: {user.name}</li>
          })
        }
      </ul>
		</div>
	)
}

module.exports = connect((state) => state)(UsersList)
