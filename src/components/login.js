const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')

const Login = (props) => {
  return (
    <div>
      <form>
        <div>
            Name:
            <input className='homePageButton' type='text' placeholder='User Name' />
            Password:
            <input className='homePageButton' type='text' placeholder='Password' />
        </div>
        <RaisedButton onClick={() => props.dispatch({type: 'LOGIN'})} >Login </RaisedButton>
      </form>
    </div>
  )
}

module.exports = connect((state) => state)(Login)
