const React = require('react')
const { FlatButton } = require('material-ui')

module.exports = (props) => (
    <div>
      <FlatButton onClick={() => props.dispatch({type: 'DISPLAY_PAST_NIGHTS'})}>
        + Show Past Nights
      </FlatButton>
    </div>
)
