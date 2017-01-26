const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const moment = require('moment')
const _ = require('lodash')


const NewNightOut = (props) => {

const initialState = {

    userNames : {
      1: {id:1, name: 'Lucas'},
      2: {id:2, name: 'Meghan'},
      3: {id:3, name: 'Janie'}
    }
  }

  return (
    <div>
      <p>nice</p>
      <p>{(moment().format('dddd DD MMMM YY'))}</p>
      <h1>Add people to your group</h1>

      <ul>
      {
        _.map(initialState.userNames, (name) => {
          return <li>{name.name}</li>
          
        })
      }
      </ul>

      <button>submit</button>
    </div>
  )
}


module.exports = NewNightOut
