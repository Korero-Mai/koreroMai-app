const React = require('react')
const request = require('superagent')


module.exports = class NewUserForm extends React.Component {

  handleSubmit(e) {
      e.preventDefault()
      const userName = this.refs.userName.value
      const email = this.refs.email.value
      const password = this.refs.password.value

      if (userName.length === 0) {
        this.refs.userName.focus()
        return
      }

      const newUserData = {
        'userName': userName,
        'email': email,
        'password': password
      }

      request.post('api/v1/users')
        .send({newUserData})
        .then((response) => {
          const user = response.body[0]
          this.props.dispatch({type: 'UPDATE_USER', payload: user})
          this.props.router.push(`/users/${user.id}/profile`)
        })
    }

  render () {
   return (
      <div>
        <h2>New User Form</h2>
        <form>
          <p>Name:</p><input type='text' ref='userName' placeholder='User Name' />
          <p>Email:</p><input type='text' ref='email' placeholder='email' />
          <p>Password:</p><input type='text' ref='password' placeholder='password' />
          <button onClick={this.handleSubmit.bind(this)} className='button'>Create Account</button>
        </form>
      </div>
    )
  }
}
