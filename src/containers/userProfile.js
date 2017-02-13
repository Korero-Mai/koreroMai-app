const React = require('react')
const { connect } = require('react-redux')
const Groups = require('../components/groups')
const GroupInfo = require('../components/selectedGroupInfo')
const UserInfo = require('../components/userInfo')

function UserProfile(props) {

  return (
    <div>
      <div className="row">
        <UserInfo id={props.params.id}/>
        <Groups id={props.params.id}/>
      </div>
      <div className="row">
      </div>
        {props.players.players.length > 0
          ? <GroupInfo id={props.params.id}/>
          : null}
    </div>
  )
}

module.exports = connect((state) => state)(UserProfile)
