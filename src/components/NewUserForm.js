const React = require('react')
const request = require('superagent')
const { RaisedButton } = require('material-ui')

module.exports = class NewUserForm extends React.Component {

  handleSubmit() {
      const { dispatch, router } = this.props
      const userName = this.refs.userName.value
      const email = this.refs.email.value
      const password = this.refs.password.value
      const confirmPassword = this.refs.password.value
      const newUserData = { userName, password, email, confirmPassword }

      function isEmailInvalid(email){
        const arr = email.split('@');
        if(arr.length === 2 && arr[1] !== ('')){
          return false
        }
        return true
      }

      const isEntryInvalid = (userData) => {
        if(isEmailInvalid(userData.email)){
          dispatch({type: 'AUTH_ERR', payload: 'Not a valid email address'})
          return true
        }
        if(userData.userName.length < 4){
          dispatch({type: 'AUTH_ERR', payload: 'Username must be 4 characters or more'})
          return true
        }
        if(userData.password.length < 8){
          dispatch({type: 'AUTH_ERR', payload: 'Password must be at least 8 characters'})
          return true
        }
        if(userData.password !== userData.confirmPassword){
          dispatch({type: 'AUTH_ERR', payload: 'Passwords do not match'})
          return true
        }
        return false
      }

      if (isEntryInvalid(newUserData)) {
        this.refs.userName.focus()
        return
      }

      request.post('api/v1/users/register')
        .send({email: newUserData.email})
        .end((err, data) => {
          if(err) {
            alert('Oh no! An error!', err)
            return false
          }
          if(data.body){
            dispatch({type: 'AUTH_ERR', payload: 'Username already in use'})
          }else{
            request.post('api/v1/users')
            .send({newUserData})
            .then((response) => {
              const user = response.body[0]
              dispatch({type: 'UPDATE_USER', payload: user})
              router.push(`/users/${user.id}/profile`)
          })
        }
      })
  }

  render () {
   return (
      <div>
        <h2>New User Form</h2>
        <form>
          <p>Name:</p><input type='text' ref='userName' placeholder='User Name' />
          <p>Email:</p><input type='email' ref='email' placeholder='email' />
          <p>Password:</p><input type='password' ref='password' placeholder='password' />
          <p>Confirm Password:</p><input type='password' ref='confirmPassword' placeholder='Confirm password' /><br />
          <RaisedButton onClick={this.handleSubmit.bind(this)} className='button'>Create Account</RaisedButton>
        </form>
      </div>
    )
  }
}
