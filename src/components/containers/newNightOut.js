const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const moment = require('moment')
const _ = require('lodash')
const { FlatButton } = require('material-ui')


const NewNightOut = (props) => {

const initialState = {

    userNames : {
      1: {id:1, name: 'Lucas', going: true},
      2: {id:2, name: 'Meghan', going: true},
      3: {id:3, name: 'Alice', going: false}
    }
  }

  return (
    <div>
      <p>nice</p>
      <p>{(moment().format('dddd DD MMMM YY'))}</p>
      <h1>Add people to your group</h1>

      <div>
      {
        _.map(initialState.userNames, (name) => {
          return <FlatButton onClick={()=> props.dispatch({type:'ADDS_PERSON_TO_NEW_GROUP'})}>
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
