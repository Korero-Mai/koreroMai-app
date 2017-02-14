const React = require('react')
const { connect } = require('react-redux')


function UserInfo(props) {
const{users, dispatch} = props
  return (

    <div className="">
      <h3>Hello, {users.username} !</h3>

      <button className='button expanded'
        onClick={()=>dispatch({type:"EDIT_USER"})}>Edit Profile</button>
    </div>
  )
}

module.exports = connect((state) => state)(UserInfo)
