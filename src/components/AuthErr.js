const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const { FlatButton } = require('material-ui')

const AuthErr = (props) => {
  console.log({props});
  const { authErr, dispatch } = props

  const isErr = (
    <div className='authErr' >
      {authErr}
    </div>
  )


  return authErr
    ? isErr
    : ( <div></div> )

}

module.exports = AuthErr
