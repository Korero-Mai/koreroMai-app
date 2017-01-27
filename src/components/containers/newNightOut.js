const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const moment = require('moment')
const _ = require('lodash')
const { FlatButton } = require('material-ui')


const NewNightOut = (props) => {
const  { users, dispatch } = props

console.log("this is props", props);
  const namesForDisplay = _.map(users, (user) => {
    user.color = user.going
      ?'blue'
      :'white'
    return user
  })


  return (
    <div>
      <p>nice</p>
      <div>
      <p>{(moment().format('dddd DD MMMM YYYY'))}</p>
        <h1>Add people to your group</h1>
        {
          namesForDisplay.map((name) => {
            return <FlatButton style={{backgroundColor: name.color}} onClick={()=> dispatch({type:'ADDS_PERSON_TO_NEW_GROUP', payload: name.id})}>
              {name.name}
            </FlatButton>

          })
        }
      </div>

      <button>submit</button>
    </div>
  )
}

module.exports =  connect((state) => state)(NewNightOut)
