const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { FlatButton } = require('material-ui')


const ShowPastNights = (props) => {
  const { dispatch, pastNights } = props
  const nightsShowing = (
    <div>
      <div>
        <FlatButton onClick={() => dispatch({type: 'DISPLAY_PAST_NIGHTS'})}>
          - Hide Past Nights
        </FlatButton>
      </div>
      <div>
        <table>
          <tr>
            <th>Night Id |</th>
            <th>Participants |</th>
            <th>Amount Owing</th>
          </tr>
          {pastNights.map(tablePastNight)}
        </table>
      </div>
    </div>
  )

  const nightsHidden = (
    <div>
      <FlatButton onClick={() => dispatch({type: 'DISPLAY_PAST_NIGHTS'})}>
        + Show Past Nights
      </FlatButton>
    </div>
  )

  return props.showingPastNights
    ? nightsShowing
    : nightsHidden
}

function tablePastNight(night){
  let stringOfParticipants = ''
  night.participants.forEach(participant => {
    stringOfParticipants += `${participant}, `
  })
  return (
    <tr>
      <td>{night.nightId}</td>
      <td>{stringOfParticipants}</td>
      <td>${night.amountOwing/100}</td>
    </tr>
  )
}


module.exports = ShowPastNights
