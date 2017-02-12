const React = require('react')
const { connect } = require('react-redux')
const Groups = require('../components/groups')
const GroupInfo = require('../components/selectedGroupInfo')
const UserInfo = require('../components/userInfo')

function UserProfile(props) {

  return (
    <div>
      <div className="row">
        <UserInfo />
        <Groups/>
      </div>
      <div className="row">
      </div>
        <GroupInfo/>
    </div>
  )
}

module.exports = connect((state) => state)(UserProfile)
