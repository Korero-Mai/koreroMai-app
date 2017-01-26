const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { FlatButton } = require('material-ui')


const ShowPastNights = (props) => {
  const nightsShowing = (
    <div>
    <div>
    <FlatButton>
    - Hide Past Nights
    </FlatButton>
    </div>
    Past nights!
    </div>
  )

  const nightsHidden = (
    <div>
      <FlatButton>
        + Show Past Nights
      </FlatButton>
    </div>
  )

  return props.showingPastNights
    ? nightsShowing
    : nightsHidden
}


module.exports = ShowPastNights
