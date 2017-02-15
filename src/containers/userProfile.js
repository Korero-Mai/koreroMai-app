const React = require('react')
const { connect } = require('react-redux')
const Groups = require('../components/groups')
const GroupInfo = require('../components/selectedGroupInfo')
const UserInfo = require('../components/userInfo')
const EditUserInfo = require('../components/editUserInfo')
const AddPlayer = require('../components/addplayer')

function UserProfile(props) {
  if (!Object.keys(props.users).length){
    return (
        <h1 className="h1-home">Unauthorized!</h1>
    )
  } else {
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
          ? <GroupInfo id={props.params.id} />
          : (
            <table className="hover">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Token</th>
                    <th>Group</th>
                    <th>Practice Sounds Total Score</th>
                    <th>Practice Words Total Score</th>
                    <th>trends</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <AddPlayer id={props.params.id} />
                </tbody>
              </table>
          )
        }
      </div>
    )
  }
}

module.exports = connect((state) => state)(UserProfile)
