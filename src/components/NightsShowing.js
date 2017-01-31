const React = require('react')
const { FlatButton } = require('material-ui')

module.exports = ({dispatch, pastNights}) => (
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
