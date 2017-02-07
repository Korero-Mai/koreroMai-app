const React = require('react')
const { connect } = require('react-redux')

function Adventure(props) {
  return (
    <div>
      <p>You see a stick on the ground</p>
      <button onClick={() => props.dispatch({type: 'GET_STICK'})}>Take it</button>
      <button>Leave it</button>
    </div>
  )
}

module.exports = connect((state) => state)(Adventure)

//logic in reducers : if 
