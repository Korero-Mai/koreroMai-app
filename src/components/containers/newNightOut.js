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
      3: {id:3, name: 'Alice'}
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
          return <button onclick="addPersonToGroup">{name.name}</button>

        })
      }
      </div>

      <button>submit</button>
    </div>
  )
}


module.exports = NewNightOut
