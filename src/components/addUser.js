const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')

const AddUser = (props) => {
  return (
    <div>
      <RaisedButton>Add another person</RaisedButton>
    </div>
  )
}

module.exports = connect((state) => state)(AddUser)
