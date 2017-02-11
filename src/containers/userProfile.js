const React = require('react')
const { connect } = require('react-redux')
const Groups = require('../components/groups')
const GroupInfo = require('../components/selectedGroupInfo')

function UserProfile(props) {

  return (
    <div>
      <div className="row">
        {UserName(props)}
        <Groups/>
      </div>
      <div className="row">
      </div>
        <GroupInfo/>
    </div>
  )
}

module.exports = connect((state) => state)(UserProfile)

function UserName (props) {
  return (
    <div className="large-4 columns">
      <h2>UserName</h2>
      <button className='button expanded'>Edit Profile</button>
    </div>
  )
}
