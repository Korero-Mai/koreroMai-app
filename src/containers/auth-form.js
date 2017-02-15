const React = require('react')
const { connect } = require('react-redux')
const RegisterForm = require('../components/register-form')
const LoginForm = require('../components/login-form')

function AuthForm(props) {
  const {dispatch, router} = props

  return (
    <div>
      <LoginForm dispatch={dispatch} router={router}/>
      <RegisterForm dispatch={dispatch} router={router}/>
    </div>
  )
}

module.exports = connect((state) => state)(AuthForm)
