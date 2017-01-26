const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { FlatButton, RaisedButton } = require('material-ui')

const ShowPastNights = require('./showPastNights')


const UserProfile = (props) => {
  const { userName, amountOwed, amountOwing, showingPastNights, dispatch } = props
  return (
    <div>
      <h1>
        {userName + "'s"} profile
      </h1>
      <RaisedButton>
        Start New Night
      </RaisedButton>
      <div>
        Amount Owed: ${amountOwed/100}<br/><br/>
        Amount Owing: ${amountOwing/100}<br/><br/>
      </div>
      <ShowPastNights {...props} />
    </div>
  )
}


module.exports = connect((state) => state)(UserProfile)
