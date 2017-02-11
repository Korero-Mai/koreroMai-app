const React = require('react')
const { connect } = require('react-redux')
const Groups = require('../components/groups')
const GroupInfo = require('../components/selectedGroupInfo')

function UserProfile(props) {

  return (
    <div>
      {UserName(props)}
      <Groups/>
      <GroupInfo/>
    </div>
  )
}

module.exports = connect((state) => state)(UserProfile)

function UserName (props) {
  return (
    <div>
      <h2>UserName</h2>
      <button className='button expanded'>Edit Profile</button>
    </div>
  )
}
