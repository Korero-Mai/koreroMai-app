const React = require('react')
const { RaisedButton } = require('material-ui')


module.exports = function(props) {
  return (
    <div>
      <RaisedButton onClick={()=> props.dispatch({type:'DISPLAY_ADD_USER'})}> + Add another person</RaisedButton>
    </div>
  )
}
