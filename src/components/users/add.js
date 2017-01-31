const React = require('react')
const { connect } = require('react-redux')

function AddUser(props) {
  const { dispatch, showingAddUser } = props
  const HideAddUser = require ('./HideAddUser')
  const ShowAddUser = require ('./ShowAddUser')

  return props.showingAddUser
    ? <ShowAddUser dispatch={dispatch}/>
    : <HideAddUser dispatch={dispatch}/>
}

module.exports = connect((state) => state)(AddUser)

// {
//   namesForDisplay.map((name) => {
//     return <FlatButton style={{backgroundColor: name.color}} onClick={()=> dispatch({type:'ADDS_PERSON_TO_NEW_GROUP', payload: name.id})}>
//       {name.name}
//     </FlatButton>
//
//   })
// }
