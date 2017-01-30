const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const ReactDOM = require('react-dom')
const {TextField} = require('material-ui')
const {RaisedButton} = require('material-ui')
const request = require('superagent')

const NewUser = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault()
    const { dispatch } = this.props

    const name = this.refs.name.value
    const email = this.refs.email.value
    const password = this.refs.password.value
    const confirmPassword = this.refs.confirmPassword.value

    const newUserData = { name, password, email, confirmPassword }

    const isEntryValid = (userData) => {
      if(userData.name.length < 4){
        dispatch({type: 'AUTH_ERR', payload: 'Username must be 4 characters or more'})
        return false
      }
      if(userData.password !== userData.confirmPassword){
        dispatch({type: 'AUTH_ERR', payload: 'Passwords do not match'})
        return false
      }
      return true

    }


    if (isEntryValid(newUserData)) {
      request.post('api/v1/register')
        .send({name: newUserData.name})
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
            .end((err, data) => {
              if (err) {
                alert('Oh no! error', err);
              }
              dispatch({type: 'LOGIN', payload: data.body[0].name})
            })
          }
        })
      } else {
        this.refs.name.focus()
      }
  },


  render: function () {
    const { showingRegisterForm, dispatch } = this.props
    const newUserForm = (
      <div>
        <h2>New User Form</h2>
        <form>
          <p>Name:</p><input type='text' ref='name' placeholder='User Name' />
          <p>Email:</p><input type='text' ref='email' placeholder='email' />
          <p>Password:</p><input type='text' ref='password' placeholder='password' />
          <p>Confirm Password:</p><input type='text' ref='confirmPassword' placeholder='Confirm password' /><br />
          <RaisedButton className='homePageButton' onClick={this.handleSubmit} >Create Account</RaisedButton>
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
