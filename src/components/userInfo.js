const React = require('react')
const { connect } = require('react-redux')


function UserInfo(props) {
const{users, dispatch} = props
  return (
    <div className="">
      <h2>{users.username}</h2>
      <button className='button expanded'
        onClick={()=>dispatch({type:"EDIT_USER"})}>Edit Profile</button>
    </div>
  )
}

module.exports = connect((state) => state)(UserInfo)
