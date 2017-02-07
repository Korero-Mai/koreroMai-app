const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function Home(props) {
  return (
    <div>
      <h1>Choose React</h1>
      <p>Choose your own adventure! In React!</p>
      <Link to="adventure"><button onClick={() => props.dispatch({type: 'UPDATE_SITUATION', situation: 11})}>Start!</button></Link>
    </div>
  )
}

module.exports = connect((state) => state)(Home)