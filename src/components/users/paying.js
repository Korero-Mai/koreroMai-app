const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { FlatButton } = require('material-ui')


const Paying = (props) => {
  const { currentNight, dispatch } = props
  const { users } = currentNight
  const usersForDisplay = Object.keys(users).map(userKey => {
    users[userKey].color = users[userKey].paying
      ? 'green'
      : 'white'
    return users[userKey]
  })
  return (
    <div>
    <h2>Who is going to pick up the bill?</h2>
    {usersForDisplay.map(user => <FlatButton key={user.id} style={{backgroundColor: user.color}} onClick={() => {dispatch({type: 'USER_PAYING', payload: user.id})}}>{user.name}</FlatButton>)}
    </div>
  )
}


module.exports = Paying
