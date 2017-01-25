const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')


const UserProfile = (props) => {
  const { userName } = props
  return (
    <div>
      <p>
        {userName}'s profile
      </p>
    </div>
  )
}


module.exports = connect((state) => state)(UserProfile)
