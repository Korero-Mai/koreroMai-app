const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')
const NameForDisplay = require('./nameForDisplay')

const AddAnotherUser = (props) => {

  const { dispatch, showingAddUser } = props

    const showAddUser = (
    <div>
      <RaisedButton onClick={()=> dispatch({type:'DISPLAY_ADD_USER'})}>
        - Add another person
      </RaisedButton>

      <h3>Add another person to your night</h3>


      <NameForDisplay /><br/><br/>
      <button>submit</button>

    </div>
  )

  const hideAddUser = (
    <div>
      <RaisedButton onClick={()=> dispatch({type:'DISPLAY_ADD_USER'})}> + Add another person</RaisedButton>
    </div>
  )

  return props.showingAddUser
    ? showAddUser
    : hideAddUser
}

module.exports = connect((state) => state)(AddAnotherUser)




// {
//   namesForDisplay.map((name) => {
//     return <FlatButton style={{backgroundColor: name.color}} onClick={()=> dispatch({type:'ADDS_PERSON_TO_NEW_GROUP', payload: name.id})}>
//       {name.name}
//     </FlatButton>
//
//   })
// }
