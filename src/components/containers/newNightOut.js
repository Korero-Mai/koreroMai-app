const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const moment = require('moment')
const _ = require('lodash')
const { FlatButton } = require('material-ui')


const NewNightOut = (props) => {
const  { userNames, dispatch } = props

  const namesForDisplay = _.map(userNames, (user) => {
    user.color = user.going
      ?'blue'
      :'white'
    return user
  })



  return (
    <div>
      <div className='welcome'>
      <h2>{(moment().format('dddd DD MMMM YYYY'))}</h2>
        <h1>Add people to your group</h1>
          <div>{
            namesForDisplay.map((name) => {
              return <FlatButton style={{backgroundColor: name.color}} onClick={()=> dispatch({type:'ADDS_PERSON_TO_NEW_GROUP', payload: name.id})}>
                {name.name}
              </FlatButton>

            })
          }
          </div>
          <br />
          <button>submit</button>
      </div>

    </div>
  )
}

module.exports =  connect((state) => state)(NewNightOut)
