const React = require('react')
const { connect } = require('react-redux')

function UserInfo(props) {

  return (
    <div className="large-4 columns">
      <h2>{props.users.username}</h2>
      <button className='button expanded'>Edit Profile</button>
    </div>
  )
}

module.exports = connect((state) => state)(UserInfo)
