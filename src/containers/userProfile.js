const React = require('react')
const { connect } = require('react-redux')
const Groups = require('../components/groups')
const GroupInfo = require('../components/selectedGroupInfo')
const UserInfo = require('../components/userInfo')
const EditUserInfo = require('../components/editUserInfo')
const AddPlayer = require('../components/addplayer')

function UserProfile(props) {

  return (
    <div>
      <div className="row">
        <Groups id={props.params.id}/>
        <div className='large-4 columns'>
          {props.editUser
            ? <EditUserInfo />
            : <UserInfo id={props.params.id}/>
          }

        </div>
      </div>
      <div className="row">
      </div>
        {props.players.players.length > 0
          ? <GroupInfo id={props.params.id}/>
          : <AddPlayer id={props.params.id} stand={true}/>
        }

    </div>
  )
}

module.exports = connect((state) => state)(UserProfile)
