const React = require('react')
const { RaisedButton } = require('material-ui')
const NameForDisplay = require('../nameForDisplay')

module.exports = function(props) {
  return (
    <div>
      <RaisedButton onClick={()=> props.dispatch({type:'DISPLAY_ADD_USER'})}>
        - Add another person
      </RaisedButton>
      <h3>Add another person to your night</h3>
      <NameForDisplay /><br/><br/>
      <button>submit</button>
    </div>
  )
}
