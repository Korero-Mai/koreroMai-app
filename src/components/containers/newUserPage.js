const React = require('react')
const { connect } = require('react-redux')

const NewUserForm = require('../NewUserForm')
import RegisterButton from '../RegisterButton'


function NewUser(props) {
  const { showingRegisterForm, dispatch, router } = props

  return showingRegisterForm
    ? <NewUserForm  dispatch={dispatch} router={router} />
    : <RegisterButton dispatch={dispatch} />
}


module.exports = connect((state) => state)(NewUser)
