
const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const {RaisedButton} = require('material-ui')
const request = require('superagent')

const NewUser = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault()
    const userName = this.refs.userName.value
    const email = this.refs.email.value
    const password = this.refs.password.value
    // const confirmPassword = this.refs.confirmPassword.value

    const newUserData = {
      'userName': userName,
      'email': email,
      'password': password
    }

    if (userName.length > 0) {

      request.post('api/v1/users')
      .send({newUserData})
      .then((response) => {
        const user = response.body[0]
        // console.log('user', response);
        this.props.dispatch({type: 'UPDATE_USER', payload: user})
        this.props.router.push(`/users/${user.id}/profile`)
      })
    } else {
      this.refs.userName.focus()
    }
  },
  render: function () {
    const {showingRegisterForm, dispatch} = this.props
    const newUserForm = (
      <div>
        <h2>New User Form</h2>
        <form>
          <p>Name:</p><input type='text' ref='userName' placeholder='User Name' />
          <p>Email:</p><input type='text' ref='email' placeholder='email' />
          <p>Password:</p><input type='text' ref='password' placeholder='password' />
          <button onClick={this.handleSubmit} className='button'>Create Account</button>
        </form>
      </div>
    )
    const registerButton = (
      <div className='homePageButton'>
        <RaisedButton className='homePageButton' onClick={() => dispatch({type: 'DISPLAY_REGISTER_FORM'})}>Register </RaisedButton>
      </div>
    )

    return showingRegisterForm
    ? newUserForm
    : registerButton
  }
})

module.exports = connect((state) => state)(NewUser)



// <p>Confirm Password:</p><input type='text' ref='confirmPassword' placeholder='Confirm password' />
//
