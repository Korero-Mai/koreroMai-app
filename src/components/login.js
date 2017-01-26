const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')

const Login = (props) => {

  return (
    <div>
        <form>
          <p>Name:</p><input type='text' placeholder='User Name' />
          <p>Password:</p><input type='text' placeholder='Password' />
          <br/>
          <br/>
          <RaisedButton onClick={() => props.dispatch({type:'LOGIN'})} className='button'>Login </RaisedButton>
        </form>
    </div>
  )
}

module.exports = connect((state) => state)(Login)
