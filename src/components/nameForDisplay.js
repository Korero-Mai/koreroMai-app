const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const { FlatButton } = require('material-ui')

const NameForDisplay = (props) => {

  const { users, dispatch } = props

  const namesForDisplay = _.map(users, (user) => {
    user.color = user.going
      ?'blue'
      :'white'
    return user
  })

  return (
    <div>

    {
      namesForDisplay.map((name) => {
        return <FlatButton style={{backgroundColor: name.color}} onClick={()=> dispatch({type:'ADDS_PERSON_TO_NEW_GROUP', payload: name.id})}>
          {name.name}
        </FlatButton>

      })
    }
    </div>
  )
}

module.exports = connect((state) => state)(NameForDisplay)
