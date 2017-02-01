const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { FlatButton, RaisedButton } = require('material-ui')

const ShowPastNights = require('../nightsOut/showPast')

const UserProfile = (props) => {
  const { amountOwed, amountOwing, dispatch, routeParams, users } = props
  const userName = users[routeParams.id].name
  return (
    <div className='welcome'>
      <h1>
        {userName + "'s"} profile
      </h1>

      <br />
      <div className='homePageButton'>
        <Link to='/newnightout'>
          <RaisedButton >
              Start New Night
          </RaisedButton>
        </Link>
      </div>
      <br />
      <div>
        Amount Owed: ${amountOwed / 100}<br /><br />
        Amount Owing: ${amountOwing / 100}<br /><br />

      </div>
      <ShowPastNights {...props} />
    </div>
  )
}

module.exports = connect((state) => state)(UserProfile)
